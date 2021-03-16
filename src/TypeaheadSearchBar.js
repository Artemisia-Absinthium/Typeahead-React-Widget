import React, { Component } from 'react';
import './TypeaheadSearchBar.css';

class TypeaheadSearchBar extends Component {
    static defaultProps = {
        search: "",
        ChangeSearch: () => { },
        ChangeDisplayedResult: () => { },
        SearchBarFocus: () => { },
        SearchBarBlur: () => { },
        SearchBarKeyboardEnter: () => { }
    }

    constructor(props) {
        super(props);

        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleFocus = this.HandleFocus.bind(this);
        this.HandleBlur = this.HandleBlur.bind(this);
        this.HandleKeyDown = this.HandleKeyDown.bind(this);
    }

    HandleChange(evt) {
        this.props.ChangeSearch(evt.target.value);
    }

    HandleSubmit(evt) {
        evt.preventDefault();
        this.props.ChangeDisplayedResult();
    }

    HandleFocus(evt) {
        this.props.SearchBarFocus();
    }

    HandleBlur(evt) {
        this.props.SearchBarBlur();
    }

    HandleKeyDown(evt) {
        if (evt.keyCode === 40 || evt.keyCode === 38) {
            evt.preventDefault();
        }

        if (evt.keyCode === 13) {
            this.props.SearchBarKeyboardEnter();
            evt.preventDefault();
        }
    }

    render() {
        return (
            <div className="TypeaheadSearchBar">
                <form className="TypeaheadSearchBar-Form"
                    onSubmit={this.HandleSubmit}>
                    <button className="TypeaheadSearchBar-Button"><i className="fas fa-search"></i></button>
                    <input
                        className="TypeaheadSearchBar-Bar"
                        type="text"
                        name="SearchBar"
                        value={this.props.search}
                        placeholder={"Search a fruit"}
                        onChange={this.HandleChange}
                        onFocus={this.HandleFocus}
                        onBlur={this.HandleBlur}
                        onKeyDown={this.HandleKeyDown}
                        aria-label="Search"
                    />
                </form>
            </div>
        )
    };
}

export default TypeaheadSearchBar;
