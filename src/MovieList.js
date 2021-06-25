import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext';

export default function MovieList() {

        const [movies, setMovies] = useContext(MovieContext)

       
    return (
        <div>
            {movies.map(movie=>(
                <li>{movie.name}, {movie.price}</li>
            
            ))}
                <p>   {movies[0].name}</p>
        </div>
    
    )
}
