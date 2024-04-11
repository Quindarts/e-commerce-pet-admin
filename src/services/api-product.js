import { createAsyncThunk } from '@reduxjs/toolkit'
import client from './api-context'
export const apiGetProductByParams = async (offset, limit) => {
    const response = await client.get(`/products?offset=${offset}&limit=${limit}`)
    return response
}
export const apiSearchCProductByQuery = async (code, name) => {
    const response = await client.get(`/products/search?code=${code}&name=${name}`)
    return response
}
export const fetchProductByParams = createAsyncThunk(
    'products/fetchProductByParams',
    async ({ offset, limit }, { rejectWithValue }) => {
        try {
            const response = await apiGetProductByParams(offset, limit)
            if (response.list) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
export const fetchProductBySearch = createAsyncThunk(
    'products/fetchProductBySearch',
    async ({ name, code }, { rejectWithValue }) => {
        try {
            const response = await apiSearchCProductByQuery(code, name)
            if (response.list_product) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
