import Link from 'next/link'
import NextHead from '../components/next/NextHead'
import Nav from '../components/Nav'
import React from 'react'

import MoviesList from '../components/MoviesList'
import AddMoviesForm from '../components/AddMoviesForm'
import { MoviesProvider } from '../context/MoviesContext'

const HomePage = () => {
  return (
    <React.Fragment>
      <NextHead title="React Context Demo" />
      <MoviesProvider>
        <main className="w-full h-full">
          <Nav />
          <div className="page_width_wide mx-auto mt-10">
            <MoviesList />
            <AddMoviesForm />
          </div>
          {/* ====================================================================== */}
        </main>
      </MoviesProvider>
    </React.Fragment>
  )
}

export default HomePage
