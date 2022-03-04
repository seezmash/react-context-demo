import Link from 'next/link'
import React, { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'

const AddMoviesForm = () => {
  const [movies, setMovies] = useContext(MoviesContext)

  const addMovie = () => {
    const addMoviesForm = document.getElementById('add_movie_form')
    if (addMoviesForm) {
      let newMovieName = addMoviesForm.name.value
      let newMoviePrice = '$ ' + addMoviesForm.price.value
      setMovies((previousMovies) => [
        ...previousMovies,
        { name: newMovieName, price: newMoviePrice }
      ])
      addMoviesForm.reset()
    }
  }

  return (
    <div className="mt-16 border-t pt-14">
      <div className="font-semibold uppercaseF text-slate-700">Add a movie</div>
      <form
        id="add_movie_form"
        className="mt-6"
        onSubmit={(e) => {
          e.preventDefault()
          addMovie()
        }}
      >
        <label
          htmlFor="name"
          className="text-sm font-semibold text-slate-700 mr-2"
        >
          Name:
        </label>
        <input
          className="border rounded mr-4 py-1.5 px-2"
          type="text"
          name="name"
        />
        <label
          htmlFor="price"
          className="text-sm font-semibold text-gray-600F mr-2"
        >
          Price:
        </label>
        <input
          className="border rounded mr-4 py-1.5 px-2"
          type="number"
          name="price"
        />
        <button className="rounded bg-blue-500 text-white font-semibold px-3 text-sm py-2">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddMoviesForm
