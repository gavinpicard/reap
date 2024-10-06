import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div class="navigation">
          <ul>
            <li><a><h1>Reap</h1></a></li>
            <li><a>Home</a></li>
            <li><a>Feed</a></li>
            <li><a>Search</a></li>
            <li><a>Profile</a></li>
          </ul>
        </div>
      </header>
      <div>
      </div>
      <div class="trending-section">
        <h2>Trending Books</h2>
        <div class="trending-books-container">
          <a>book1</a>
          <a>book2</a>
          <a>book3</a>
          <a>book4</a>
          <a>book5</a>
          <a>book6</a>
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
