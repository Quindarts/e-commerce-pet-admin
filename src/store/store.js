import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.slice'
import appReducer from './app.slice'
const store = configureStore({
    reducer: {
        users: userReducer,
        app: appReducer,
    },
})

export default store
