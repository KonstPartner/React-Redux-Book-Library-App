import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})

export default store
