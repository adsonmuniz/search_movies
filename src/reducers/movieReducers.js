import { FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/movieActions';

const initialState = { 
    movies:[],
    pending: false,
    error: null,
    movieChoose: undefined
}

const moviesReducers = (state=initialState,action) => {
    switch (action.type){
        case 'GET_MOVIES':
            return {...state,movies:action.movies}
        break;
        case FETCH_MOVIES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                movies: action.movies
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: return {...state}

    }

}

export const getMovies = state => state.movies;
export const getMoviesPending = state => state.pending;
export const getMoviesError = state => state.error;

export default moviesReducers