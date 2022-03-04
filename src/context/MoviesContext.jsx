import React, { useState, createContext } from 'react'

const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter 2', price: '$10', id: 2134 },
    { name: 'Game of Thrones', price: '$12', id: 7394 },
    { name: 'Chocolate Factory', price: '$12.50', id: 4712 }
  ])

  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {children}
    </MoviesContext.Provider>
  )
}

export { MoviesContext, MoviesProvider }
