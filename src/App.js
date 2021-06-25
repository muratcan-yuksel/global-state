import React from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import AddMovie from './AddMovie'
import { MovieProvider } from './MovieContext'




export default function App() {
  return (
    <div>
      <MovieProvider>
      <Nav />
     <MovieList/>
     <AddMovie />
     </MovieProvider>
    </div>
  )
}
