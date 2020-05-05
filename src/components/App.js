import React from 'react'
import Article from './Article'
import articles from '../fixtures'

function App() {
  return (
    <div>
      <h1>App Name</h1>
      <Article article={articles[0]} foo="bar" />
    </div>
  )
}

export default App