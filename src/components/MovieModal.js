import React from 'react';
import Modal from 'react-modal';

const MovieModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedMovie}
            onRequestClose={props.handleClearSelectedMovie}
            contentLabel="Filme selecionado"
            closeTimeoutMS={200}
            className="movie-modal"
        >
            <h3 className="movie-modal__Title">Selected Option</h3>
            {props.selectedMovie &&
            <p className="movie-modal__body">{props.selectedMovie}</p>
            }
            <button
                className="button"
                onClick={props.handleClearSelectedMovie}
            >OK
            </button>
        </Modal>
    </div>
);

export default MovieModal;