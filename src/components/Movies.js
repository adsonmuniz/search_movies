import React from 'react';
import Movie from './Movie';
 
const Movies = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Filmes encontrados</h3>
        </div>
        <div>
            {props.movies.length === 0 &&
            <p className="widget-movie">Por favor realize uma busca para iniciar!</p>}
        </div>
        <div>
            <ol>
                {
                    // props.movies.map(opt => (
                    //     <li>
                    //         <Movie 
                    //             title={opt.Title}
                    //             ratings={opt.Ratings}
                    //             urlImage={opt.Poster}
                    //         />
                    //     </li>
                    // ))
                }
            </ol>
        </div>
    </div>
);
export default Movies;