import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import BookFilter from './components/BookFilter/BookFilter'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import Error from './components/Error/Error'
import { selectBooks, setAllBooks } from './redux/slices/booksSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const books = useSelector(selectBooks)

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'))
    if (storedBooks?.length) {
      dispatch(setAllBooks(storedBooks))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  

  return (
    <div className="app mb-[30px]">
      <header className="app__header py-[20px]">
        <h1 className="text-3xl font-bold">Book Library App</h1>
      </header>
      <main className="app__main">
        <BookForm />
        <section className="app__section w-full lg:w-[60%]">
          <BookFilter />
          <BookList />
        </section>
      </main>
      <Error />
    </div>
  )
}

export default App
