import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    toggleOnlyFavorite: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters: () => {
      return initialState
    },
  },
})

export default filterSlice.reducer

export const {
  setTitleFilter,
  setAuthorFilter,
  toggleOnlyFavorite,
  resetFilters,
} = filterSlice.actions

export const selectFilters = (state) => state.filter

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selelctOnlyFavoriteFilter = (state) => state.filter.onlyFavorite
