import Link from 'next/link'
import React, { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'
const NavComponent = () => {
  const [movies, setMovies] = useContext(MoviesContext)

  return (
    <nav className="relative w-full border-b bg-white">
      {/* ====================================================================== */}
      <div className="page_width_wide relative left-0 right-0 mx-auto h-14 w-full flex items-center justify-betweenF">
        <Link href="/" passHref>
          <div className="text-lg font-bold cursor-pointer text-slate-700">
            {/* <img
              className="h-full w-full object-contain"
              src="/tailwind.svg"
              alt="logo"
            /> */}
            React Context Demo
          </div>
        </Link>
        {/* ====================================================================== */}
        <div className="relative font-semibold text-sm ml-20 text-slate-700">
          Number of Movies:{' '}
          <span className="text-red-500">{movies.length}</span>
        </div>
      </div>
      {/* ====================================================================== */}
    </nav>
  )
}

export default NavComponent
