import React from 'react';

export default class Filter extends React.Component {
    state = {
        error: undefined
    }
    handleFilter = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const year = e.target.elements.year.value.trim();
        const error = this.props.handleFilter(name, year);
        e.target.elements.name.value = '';
        e.target.elements.year.value = '';
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && 
                <p key='error' className="filter-error">{this.state.error}</p>}
                <form className="form form-control" onSubmit={this.handleFilter}>
                    <span for="name">Nome: </span><input className="filter__input" name="name" type="text" />
                    <span for="year"> Ano:</span><input className="filter__input" name="year" type="text" />
                    <button className="button">Buscar</button>
                </form>
            </div>
        );
    }
}