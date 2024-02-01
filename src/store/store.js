import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.slice'
import appReducer from './app.slice'
import categoryReducer from './category.slice'
const store = configureStore({
    reducer: {
        users: userReducer,
        app: appReducer,
        categorys: categoryReducer,
    },
})

export default store
