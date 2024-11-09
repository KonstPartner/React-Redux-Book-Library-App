import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './BookFilter.css'
import {
  resetFilters,
  selectAuthorFilter,
  selectTitleFilter,
  selelctOnlyFavoriteFilter,
  setAuthorFilter,
  setTitleFilter,
  toggleOnlyFavorite,
} from '../../redux/slices/filterSlice'

const BookFilter = () => {
  const dispatch = useDispatch()
  const title = useSelector(selectTitleFilter)
  const author = useSelector(selectAuthorFilter)
  const onlyFavorite = useSelector(selelctOnlyFavoriteFilter)

  const handleTitleFilter = (value) => {
    dispatch(setTitleFilter(value))
  }

  const handleAuthorFilter = (value) => {
    dispatch(setAuthorFilter(value))
  }

  const handleOnlyFavoriteFilter = () => {
    dispatch(toggleOnlyFavorite())
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="book-filter">
      <h2>Book Filter</h2>
      <div className="filter-inputs">
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleFilter(e.target.value)}
          placeholder="Filter by title..."
        />
        <input
          type="text"
          value={author}
          onChange={(e) => handleAuthorFilter(e.target.value)}
          placeholder="Filter by author..."
        />
        <label>
          <input
            type="checkbox"
            checked={onlyFavorite}
            onChange={handleOnlyFavoriteFilter}
          />{' '}
          Only Favorite
        </label>
      </div>
      <button className="btn" onClick={handleResetFilters}>Reset Filters</button>
    </div>
  )
}

export default BookFilter
