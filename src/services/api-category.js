import client from './api-context'
export const apiGetCategoryByParams = async (limit, offset) => {
    const response = await client.get('/categorys')
    return response
}
