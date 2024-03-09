import { memo } from "react";




const MovieCard = ({movieInfo}) =>{

    const colorRating = Number(movieInfo.imdbRating) >= 8 ? "green" : 
                        Number(movieInfo.imdbRating) < 5 ? "red" : "orange";
                        
    let writer = movieInfo.Writer;
    writer = writer.length>=40 ? `${writer.slice(0, 40)}...` : writer

    const randomImg = Math.floor(Math.random() * 5);  //random index from 0 to 4

    


    return (
        <div className="movie-card">
            <img src={movieInfo.Images[randomImg]}/>

            <div className="title-release fr-aic jc-sb">
                <h3 className="title">{movieInfo.Title}</h3>
                <span className="releaseDate">{movieInfo.Released}</span>
            </div>

            <div className="rating fr-aic" style={{gap :5}}>
                <span className="material-icons" style={{color:colorRating}}>star</span>
                <b>{`${movieInfo.imdbRating} / 10`}</b>
            </div>
            <div className="fr-aic" style={{gap :5}}>
                <b>Genre :</b>
                <span>{movieInfo.Genre}</span>
            </div>
            <div className="fr-aic" style={{gap :5}}>
                <b>Director :</b>
                <span>{movieInfo.Director}</span>
            </div>
            <div className="fr-aic" style={{gap :5}}>
                <b>Writer :</b>
                <span>{writer}</span>
            </div>

        </div>
    );
}

export default memo (MovieCard);