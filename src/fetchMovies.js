import { fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError } from './actions/movieActions';

function fetchMovies() {
    return dispatch => {
        dispatch(fetchMoviesPending());
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d06d0504')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMoviesSuccess(res.movies));
            return res.movies;
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        });
    }
}

export default fetchMovies;