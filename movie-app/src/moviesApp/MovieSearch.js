import { useState } from "react";






const MovieSearch = ({searchMovies}) =>{

    const [value,setValue] = useState("")

    const onChangeText =(e)=>{
        setValue(e.target.value)
    }
    const onEnter =(e)=>{
        const title = value.trim();
        if(e.key==="Enter"){
            searchMovies(title);//its a function from moviesApp
            setValue("") 

        }
    }

    return (
        <div className="search-container">
            <input className="input"
                placeholder="Search movies by title..."
                onKeyUp={onEnter}
                value={value }
                onChange={onChangeText}
            />
        </div>
    );
}

export default MovieSearch;