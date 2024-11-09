import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (_, action) => {
      return action.payload
    },
    clearError: () => {
      return initialState
    },
  },
})

export default errorSlice.reducer

export const { setError, clearError } = errorSlice.actions

export const selectError = (state) => state.error