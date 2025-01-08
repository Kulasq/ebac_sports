import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartSlice from './cartSlice'
import { apiSlice } from './apiSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

export default store
