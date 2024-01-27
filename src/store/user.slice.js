import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from '../services/api-User'

const userSlice = createSlice({
    name: 'users',
    initialState: { user_detail: {}, errMessage: '' },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.user_detail = action.payload
            state.errMessage = ''
        })
        // builder.addCase(fetchUserById.rejected, (state, action) => {
        //     state.errMessage = action.payload
        // })
    },
})
export const selectUserById = userSlice.getSelectors((state) => state.users)

const { actions, reducer } = userSlice

export default reducer
