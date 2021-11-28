import React from "react";
import { Link } from "react-router-dom";
import style from "../MovieList/MovieList.module.css"
import PropTypes from "prop-types"



const MovieList = ({movies}) => {
    return (
        <ul className={style.MovieList}>
        {movies.map(({title, id, poster_path}) => (
            <li className={style.listItem} key={id}>
                <Link className={style.link}  to={`/movies/${id}`}>
                <img className={style.img} alt={title} src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
                {title} 
                 </Link>
            </li>))}
        
    </ul>
    )
}
MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            id:PropTypes.number.isRequired,
            poster_path: PropTypes.string
        })
    )
}

export default MovieList