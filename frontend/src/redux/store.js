import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'
import errorSlice from './slices/errorSlice'
import filterReducer from './slices/filterSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorSlice,
  },
})

export default store
