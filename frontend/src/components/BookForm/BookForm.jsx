import React, { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitle('')
    setAuthor('')
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
