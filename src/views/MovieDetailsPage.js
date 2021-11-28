import React, {Component} from "react";

import style from "./MovieDetailsPage.module.css"
import {  Route, Switch, Link } from 'react-router-dom';
import routes from "../routes"
import Cast from "../components/Cast/Cast"
import Reviews from "../components/Reviews/Reviews"
import Api from "../services/Api";
import PropTypes from "prop-types"

class MovieDetailsPage extends Component {
    state = {
        id: null,
        title: null,
        overview: null,
        genres: " ",
        popularity: null,
        poster_path: null,
        vote_average: null
    }

  async  componentDidMount() {
        const {movieId} = this.props.match.params;
const response = await Api.MovieDetails(movieId).catch(error => console.log(error))
this.setState({...response})

}
handleGoBack = () => {
const {history} = this.props;

history.push(routes.home)
}
render() {
    const {id, title, overview, genres, vote_average, poster_path} = this.state;
    const {match} = this.props;
  

    return  ( 
        id &&
             <>
      <div className={style.container}>
        <button onClick={this.handleGoBack} className={style.button} type="button">Go back</button> 
          <div  className={style.wrapper}>
             <img  src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
             
          <div className={style.descr}>
           <h1>{title}</h1>
             <h2>Overview: </h2>
              <p>{overview}</p>
               <h3>Genre: </h3>
               <p>{genres.map(({name}) => <li key={name}>{name}</li>)}</p>
                <h4>User score: </h4>
                 <p>{vote_average}</p>
          </div>
          </div>
             <div>
          <span>Additional information:</span>
          <ul  className={style.informationList}>
            <li>
              <Link className={style.Link}  to={{ pathname: `${match.url}${routes.cast}` }}>Cast</Link>
            </li>
            <li>
              <Link className={style.Link} to={{ pathname: `${match.url}${routes.reviews}` }}>Reviews</Link>
            </li>
          </ul>          
          <Switch>
                 <Route path={`${match.path}${routes.cast}`} component={Cast}   />
                 <Route path={`${match.path}${routes.reviews}`} component={Reviews}   />
             </Switch>
        </div>
      </div>
             </>
         );
    }
    }
MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}


export default  MovieDetailsPage;