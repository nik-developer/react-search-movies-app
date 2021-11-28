import axios from "axios";

const apiKey =  "98991c7aafc0aea2678240c8a4efd62b"


const fetchAllMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`).then(response => response.data.results)
}

 const  MovieDetails =  (id) => {
    return axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`).then(response => response.data)
}
const getMovieCast = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`,
      ).then(res => res.data.cast)
    }

const getMovieReviews = (id) => {
    return axios.get(`
    https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`).then(res => res.data.results)
}      

// eslint-disable-next-line
export default {fetchAllMovies, MovieDetails, getMovieCast, getMovieReviews};