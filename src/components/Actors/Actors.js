import React from "react";
import defaultImg from "../Actors/default-img.jpg"
import style from "../Actors/Actors.module.css"
import PropTypes from "prop-types"

const Actors = ({photo, name, character}) => {
          const photoUrl = photo
      ? `https://image.tmdb.org/t/p/w300${photo}`
      : defaultImg;

      return (
          <>
                  <img className={style.images}   src={photoUrl}   alt={name}  />                              
                <h1 className={style.title}>{name}</h1>
                <p className={style.title}>Character: {character}</p>
                </>
      )
}

Actors.defaultProps = {
    photo: defaultImg,
  };
  
  Actors.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  };


export default Actors;