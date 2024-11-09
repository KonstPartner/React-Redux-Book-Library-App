import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    deleteBook: (state, action) => {
      state = state.filter((book) => book.id !== action.payload)
      return state
    },
    toggleIsFavorite: (state, action) => {
      state.forEach(book => book.id === action.payload ? book.isFavorite = !book.isFavorite : book)
    }
  },
})

export default booksSlice.reducer

export const { addBook, deleteBook, toggleIsFavorite } = booksSlice.actions

export const selectBooks = (state) => state.books
