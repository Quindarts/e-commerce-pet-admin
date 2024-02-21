import { createSlice } from '@reduxjs/toolkit'
import { fetchCategoryByParams } from '../services/api-category'

const categorySlice = createSlice({
    name: 'categorys',
    initialState: { isFetch: false, listByParams: [], currentPage: 1, params: { limit: 6, page: 1 } },
    reducers: {
        setFetching: (state, action) => {
            state.isFetch = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryByParams.fulfilled, (state, action) => {
            state.listByParams = [...action.payload.listCategory]
            state.params = action.payload.params
        })
    },
})
const { actions, reducer } = categorySlice
export const { setFetching } = actions
export default reducer
