import './App.css'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import Error from './components/Error/Error'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Library App</h1>
      </header>
      <main>
        <BookForm />
        <BookList />
      </main>
      <Error />
    </div>
  )
}

export default App
