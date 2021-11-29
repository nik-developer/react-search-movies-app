import React, {Component} from "react";
import Api from "../services/Api"
import style from "./HomePage.module.css"
import MovieList from "../components/MovieList/MovieList"
import routes from "./routes"



class HomePage extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
Api.fetchAllMovies().then(movies => this.setState({
        movies:[...movies] 
    })
).catch(error => console.log(error))
};
    render() {
        const domenUrl = "https://nik-developer.github.io/react-search-movies-app";
        domenUrl === routes.home
        const {movies} = this.state
        return (
        <div className={style.container}>
          <h1>Trending for today</h1>
           <MovieList movies={movies} />
       </div>
        )
    
    }
}


export default HomePage;
