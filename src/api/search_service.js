import axios from "axios"

const getPopularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=77d0ea4c52d1c8e5ec9399c08f8bcb04&language=tr`
  )
}

const searchMovies = (query) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=77d0ea4c52d1c8e5ec9399c08f8bcb04&language=tr&query=${query}`
  )
}
const getMovieDetail = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=77d0ea4c52d1c8e5ec9399c08f8bcb04&language=tr`
  )
}
export { searchMovies, getPopularMovies, getMovieDetail }
