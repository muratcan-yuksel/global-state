import React, {useState, createContext} from 'react'
//do not "export default" in this one



//I'll use import this one whenever I want to use the movieprovider state
export const MovieContext= createContext()


export const MovieProvider=(props)=>{

    const [movies, setMovies] = useState([
        {name: "harry potter", price: "$10", id:12873512631},
        {name: "silence of the lambs", price:"$10", id:89638725472834},
        {name:"inception", price:"10", id:12736124351623}
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )

}

