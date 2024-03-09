



import React,{useState} from "react";
import MovieSearch from "./MovieSearch";
import MovieCard from "./MovieCard";
import {movies as movieList} from "./moviesData"
import "./Movie.css"


export const MoviesApp = () =>{
    const [movies, setMovies] = useState(movieList)

    const searchMovies =(searchValue)=>{  //search value is cominng from movieSearch.js as title
        //filter movies which are a match of searchValue
       const filterdMovies = movieList.filter((movie) =>{
            return movie.Title.toLowerCase().includes(searchValue.toLowerCase())
        })
        
            setMovies(filterdMovies)
        
            
    }
    return (
        <>
            <MovieSearch searchMovies={searchMovies}/>  
            <div className="movie-cards">

                {
                    movies.length===0 ? <p style={{textAlign: "center", color:"red"}}>No Movies Found </p> : 
                    movies.map(movie => <MovieCard movieInfo = {movie} key={movie.imdbID}/>)
                }

            </div>
        </>
    )
}