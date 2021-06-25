import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div style={{height:"10em"}, {width:"100vw"}, {backgroundColor:"blue"}}>
            <p>Lis of movies: {movies.length} </p>
        </div>
    )
}
