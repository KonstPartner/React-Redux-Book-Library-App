import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'
import errorSlice from './slices/errorSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    error: errorSlice,
  },
})

export default store
