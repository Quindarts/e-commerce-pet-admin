import { createAsyncThunk } from '@reduxjs/toolkit'
import client from './api-context'
export const apiGetCategoryByParams = async (limit, offset) => {
    const response = await client.get(`/categorys?limit=${limit}&offset=${offset}`)
    return response
}
export const apiGetCategoryById = async (category_id) => {
    const response = await client.get(`/categorys/${category_id}`)
    return response
}
export const apiUpdateCategoryById = async (category_id, data) => {
    const response = await client.put(`/categorys/${category_id}`, data)
    return response
}

//[THUNK]
export const fetchCategoryByParams = createAsyncThunk(
    'categorys/fetchCategoryByParams',
    async ({ limit, offset }, { rejectWithValue }) => {
        try {
            const response = await apiGetCategoryByParams(limit, offset)
            if (response.listCategory) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
