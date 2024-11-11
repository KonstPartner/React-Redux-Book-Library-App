import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import './BookForm.scss'
import {
  addBook,
  fetchBook,
  selectIsLoading,
} from '../../redux/slices/booksSlice'
import { createBook } from '../../utils/createBook'
import books from '../../data/books.json'
import { setError } from '../../redux/slices/errorSlice'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitle('')
    setAuthor('')
    if (title && author) {
      dispatch(addBook(createBook({ title, author }, 'manual')))
    } else {
      dispatch(setError('You should fill title and author !'))
    }
  }

  const handleAddRandomBook = () => {
    const bookIndex = Math.floor(Math.random() * books.length)
    dispatch(addBook(createBook(books[bookIndex], 'random')))
  }

  const handleFetchBook = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
  }

  return (
    <div className="book-form card lg:w-[25%] m-auto lg:m-0">
      <h2 className="text-2xl font-bold">Add New Book</h2>
      <form
        onSubmit={handleSubmit}
        className="book-form__form w-[90%] lg:w-[80%]"
      >
        <div className="book-form__inputs mb-[30px]">
          <label className="w-full">
            <input
              className="text-input w-[90%] lg:w-full"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="m-[5px]">Title:</p>
          </label>
          <label className="w-full">
            <input
              className="text-input w-[90%] lg:w-full"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <p className="m-[5px]">Author:</p>
          </label>
        </div>
        <div className="book-form__buttons w-[95%]">
          <button type="submit" className="btn">
            Add Book
          </button>
          <button type="button" onClick={handleAddRandomBook} className="btn">
            Add Random
          </button>
          <button
            type="button"
            className="btn"
            onClick={handleFetchBook}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className='flex items-center'>
                Loading Book...<FaSpinner className="spinner" />
              </div>
            ) : (
              'Add Random Via API'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
