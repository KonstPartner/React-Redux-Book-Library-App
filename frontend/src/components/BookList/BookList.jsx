import React from 'react'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import './BookList.scss'
import {
  deleteBook,
  selectBooks,
  toggleIsFavorite,
} from '../../redux/slices/booksSlice'

import { selectFilters } from '../../redux/slices/filterSlice'

const BookList = () => {
  const books = useSelector(selectBooks)
  const dispatch = useDispatch()

  const filters = useSelector(selectFilters)

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }
  const handleToggleIsFavorite = (id) => {
    dispatch(toggleIsFavorite(id))
  }

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      (filters.onlyFavorite ? book.isFavorite : true)
  )

  const highlightMatch = (text, filter) => {
    if (!filter) return text
    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((chars, index) =>
      regex.test(chars) ? (
        <span key={index} className="highlight">
          {chars}
        </span>
      ) : (
        chars
      )
    )
  }

  return (
    <div className="book-list card w-[90%] lg:w-full">
      <h2 className="text-2xl font-bold">Book List</h2>
      <ul className="book-list__list w-full my-[10px]">
        {!filteredBooks.length
          ? 'No books availible'
          : filteredBooks.map((book, i) => (
              <li key={book.id} className="book-list__list--item p-[12px]">
                <div className="book-list__list--name w-[80%]">
                  {++i}. {highlightMatch(book.title, filters.title)} by{' '}
                  <strong>{highlightMatch(book.author, filters.author)}</strong>{' '}
                  ({book.source})
                </div>
                <div className="book-list__list--actions w-[100px]">
                  <button
                    className="favorite-icons"
                    onClick={() => handleToggleIsFavorite(book.id)}
                  >
                    {!!book.isFavorite ? (
                      <BsBookmarkStarFill className="favorite-icons__icon w-[25px]" />
                    ) : (
                      <BsBookmarkStar className="favorite-icons__icon w-[25px]" />
                    )}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default BookList
