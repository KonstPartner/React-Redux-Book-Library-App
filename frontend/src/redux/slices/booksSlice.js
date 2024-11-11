import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createBook } from '../../utils/createBook'
import { setError } from './errorSlice'

const initialState = {
  books: [],
  isLoading: false,
}

export const fetchBook = createAsyncThunk(
  'books/fetchBooks',
  async (src, thunkAPI) => {
    try {
      const res = await axios.get(src)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
    },
    toggleIsFavorite: (state, action) => {
      state.books.forEach((book) =>
        book.id === action.payload ? (book.isFavorite = !book.isFavorite) : book
      )
    },
    setAllBooks: (state, action) => {
      return { ...state, books: action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.title && action.payload.author) {
        state.books.push(createBook(action.payload, 'API'))
      }
    })
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export default booksSlice.reducer

export const { addBook, deleteBook, toggleIsFavorite, setAllBooks } = booksSlice.actions

export const selectBooks = (state) => state.books.books

export const selectIsLoading = (state) => state.books.isLoading
