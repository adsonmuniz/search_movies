import React from 'react';
import MovieModal from './MovieModal';

const Movie = ({ title = "", urlImage = "", ratings = [] }) => {
    let rating = 0;
    let countRating = 0;
    ratings.forEach(element => {
        let value = 0;
        if(element.Value.indexOf('/') !== -1) {
            let val = element.Value.Split('/');
            value = val[0]/val[1];
        } else if (element.Value.indexOf('%') !== -1) {
            let val = element.Value.Replace('%','');
            value = val/100;
        } else {
            value = element.Value;
        }
        rating += value;
    });
    if (countRating > 0) {
        rating = rating / countRating;
    }
    return (
        <div className="movie">
        <a href={<MovieModal />}>
            <img src={ urlImage } alt={ title } className="image"/>
            <h3>Nome: { title }</h3>
        </a>
        <h3>Média de ratings: { rating }</h3>
        </div>
    );
};

export default Movie;