import React from 'react'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import './BookList.css'
import {
  deleteBook,
  selectBooks,
  toggleIsFavorite,
} from '../../redux/slices/booksSlice'

const BookList = () => {
  const books = useSelector(selectBooks)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }
  const handleToggleIsFavorite = (id) => {
    dispatch(toggleIsFavorite(id))
  }

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul className="list">
        {!books.length
          ? 'No books availible'
          : books.map((book, i) => (
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
