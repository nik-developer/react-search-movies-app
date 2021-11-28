import React, {Component} from "react";
import Api from "../services/Api"
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";
import style from "../views/MoviesPage.module.css"
import MovieList from "../components/MovieList/MovieList";



const apiKey =  "98991c7aafc0aea2678240c8a4efd62b"


class MoviesPage extends Component {
    state = {
        searchQuery: "",
        movies: []
    }

    componentDidMount() {
Api.fetchAllMovies().then(movies => this.setState({
        movies:[...movies] 
    })
)};
      onChangeQuery = query => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`).then(response => {
            this.setState({
                movies: response.data.results
            })
            console.log(response.data.results);
        })
        this.setState({ searchQuery: query,  movies: [] })
      }
    render() {

        const {movies, searchQuery} = this.state;
        return ( 
            <>
           <SearchBar onSubmit={this.onChangeQuery}  /> 
            {searchQuery.length > 0  &&
            <div className={style.container}>
              <MovieList movies={movies}/>
            </div>
    }
            </>
        )}
    };


export  default MoviesPage;
