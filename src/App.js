import React, { Component } from 'react';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { getMovies } from './actions/movieActions';
import Api from './Api';
import Header from './components/Header';
import Filter from './components/Filter';
import Movies from './components/Movies';
import MovieModal from './components/MovieModal';
import './styles/styles.scss';
import fetchMoviesAction from './fetchMovies';
import { getMoviesError, getMoviesPending } from './reducers/movieReducers';
  
const mapStateToProps = state => ({
    movies: getMovies(state),
    error: getMoviesError(state),
    pending: getMoviesPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchMovies: fetchMoviesAction
}, dispatch);

class App extends Component {

  // state = {
  //   movies: [],
  //   movieChoose: undefined
  // }

  handleFilter = (name, year) => {
      if (!name) {
          return 'O campo "Nome" é obrigatório!';
      }

      //this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };
  handleClearSelectedMovie = () => {
      this.setState (() => ({ movieChoose: undefined }));
  }

  async componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      // more tests
      return true;
  }

  render() {
    const {movies, error, pending} = this.props;
    return (
      <div>
        {
          <Header />
        }
        <div  className="container">
          {
            <Filter handleFilter={this.handleFilter} />
          }
          <div className="widget">
            { <Movies movies={movies} /> }
          </div>
        </div>
          {
            <MovieModal
                selectedMovie={this.props.movieChoose}
                handleClearSelectedMovie={this.handleClearSelectedMovie}
            />
          }
      </div>
    );
  };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
