import Link from 'next/link'
import React, { useContext, useState } from 'react'
import MovieCard from './cards/MovieCard'
import { MoviesContext } from '../context/MoviesContext'

const MoviesList = () => {
  const [movies, setMovies] = useContext(MoviesContext)
  return (
    <React.Fragment>
      <div className="font-semibold">Movies</div>
      <div className="flex mt-6 flex-wrap">
        {movies.map((item, index) => {
          return <MovieCard item={item} key={'shortid_' + index} />
        })}
      </div>
    </React.Fragment>
  )
}

export default MoviesList
