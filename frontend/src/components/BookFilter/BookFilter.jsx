import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './BookFilter.scss'
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
    <div className="book-filter card lg:w-full">
      <h2 className="text-2xl font-bold">Book Filter</h2>
      <div className="book-filter__inputs mt-[20px] lg:mt-0 lg:w-[90%] w-[80%]">
        <input
          className="text-input mb-[10px] lg:mb-0 w-full lg:w-[25%]"
          type="text"
          value={title}
          onChange={(e) => handleTitleFilter(e.target.value)}
          placeholder="Filter by title..."
        />
        <input
          className="text-input mb-[10px] lg:mb-0 w-full lg:w-[25%]"
          type="text"
          value={author}
          onChange={(e) => handleAuthorFilter(e.target.value)}
          placeholder="Filter by author..."
        />
        <label>
          <input
          className='mb-[20px] lg:mb-0'
            type="checkbox"
            checked={onlyFavorite}
            onChange={handleOnlyFavoriteFilter}
          />{' '}
          Only Favorite
        </label>
        <input
          type="button"
          value="Reset Filters"
          className="btn"
          onClick={handleResetFilters}
        />
      </div>
    </div>
  )
}

export default BookFilter
