import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext'

export default function AddMovie() {
    const [name, setName]= useState("")
    const [price, setPrice]= useState("")

const updateName=e=>{
    setName(e.target.value)
}
const updatePrice=e=>{
    setPrice(e.target.value)
}
const [movies, setMovies] = useContext(MovieContext)

const addMovie = e=>{
    e.preventDefault();
    // to get the latest info
  setMovies(prevMovies=> [...prevMovies, {name:name, price:55}] )
}
    return (
        <div>
            <form onSubmit={addMovie} >
                <input type="text" name ="name" value={name} onChange={updateName} />
                <input type="text" name ="price" value={price} onChange={setPrice} />
                <button>Submit</button>

            </form>
        </div>
    )
}
