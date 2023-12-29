import axios, { AxiosError } from 'axios'

const axiosConfig = axios.create({
    baseURL: 'https://e-commerce-pet-server-quindarts.vercel.app',
    timeout: 30000,
    headers: {
        'Context-Type': 'application/json',
    },
})

axiosConfig.interceptors.request.use(
    function (request) {
        if (request.headers) {
            const access_token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjU0YmJlNjY4NGY3N2VmMTlmODEyZTgzIn0sImlhdCI6MTY5OTQ2MzU0MSwiZXhwIjoxODA3NDYzNTQxfQ.iFpwQxVXAflcLZYIxAHo9jQ8-4gLkSiuo3ztXfpn7Xg'
            request.headers['Authorization'] = `Bearer ${access_token}`
        }

        return request
    },
    function (error) {
        return error
    },
)

axiosConfig.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return error.response
    },
)

export default axiosConfig
