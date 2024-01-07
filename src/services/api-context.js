import Axios from 'axios'
import { APP_ROUTER } from '../Utils/Constants'
import { tokenService } from './token.services'

// DEBUG
const isDebug = process.env.NODE_ENV !== 'production'

const client = Axios.create({
    baseURL: `https://e-commerce-pet-server-quindarts.vercel.app`,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

client.interceptors.request.use(
    (config) => {
        if (config.headers) {
            const service = tokenService()
            const refreshToken = service.getLocalRefreshToken()

            config.headers['Authorization'] = `Bearer ${refreshToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

client.interceptors.response.use(
    (response) => {
        if (isDebug) {
        }
        return response.data
    },
    async (error) => {
        const originalConfig = error.config
        if (originalConfig.url !== APP_ROUTER.LOGIN && error.response) {
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true

                try {
                    const serviceToken = tokenService()
                    const rs = await client.post(APP_ROUTER.REFRESH_TOKEN, {
                        refreshToken: serviceToken.getLocalRefreshToken,
                    })
                    const { accessToken } = rs.data
                    serviceToken.updateLocalAccessToken(accessToken)
                    return client(originalConfig)
                } catch (error) {
                    Promise.reject(error)
                }
            }
        }
        return Promise.reject(error.response.data)
    },
)

export default client
