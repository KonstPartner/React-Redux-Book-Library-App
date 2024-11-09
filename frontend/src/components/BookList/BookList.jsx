import React from 'react'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import './BookList.css'
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

  console.log(filteredBooks)
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul className="list">
        {!filteredBooks.length
          ? 'No books availible'
          : filteredBooks.map((book, i) => (
              <li key={book.id}>
                <span>
                  {++i}. {book.title} by <strong>{book.author} </strong> (
                  {book.source})
                </span>
                <span>
                  <button
                    className="favorite-icons"
                    onClick={() => handleToggleIsFavorite(book.id)}
                  >
                    {!!book.isFavorite ? (
                      <BsBookmarkStarFill className="icon" />
                    ) : (
                      <BsBookmarkStar className="icon" />
                    )}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default BookList
