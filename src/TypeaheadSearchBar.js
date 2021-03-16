import React, { Component } from 'react';
import './TypeaheadSearchBar.css';

class TypeaheadSearchBar extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        var newValue = evt.target.value;
        this.props.ChangeSearch(newValue)
    }

    handleSubmit(evt) {
        evt.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="SearchBar"> Search </label>
                    <input
                        type="text"
                        name="SearchBar"
                        value={this.props.search}
                        placeholder={"Search a fruit"}
                        onChange={this.handleChange}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    };
}

export default TypeaheadSearchBar;
