import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './BookForm.css'
import { addBook } from '../../redux/slices/booksSlice'
import { createBook } from '../../utils/createBook'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitle('')
    setAuthor('')
    dispatch(addBook(createBook({ title, author }, 'manual')))
  }

  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            Title:
          </label>
          <label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            Author:
          </label>
        </div>
        <div className="btns">
          <button type="submit">Add Book</button>
          <button>Add Random</button>
          <button>Add Random Via API</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
