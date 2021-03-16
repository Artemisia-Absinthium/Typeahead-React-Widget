import React, { Component } from 'react';
import './Typeahead.css';
import TypeaheadSearchBar from "./TypeaheadSearchBar"
import TypeaheadResult from "./TypeaheadResult"
import fruits from "./Fruits"
import { findMatches } from './Utils.js';

class Typeahead extends Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };

        this.ChangeSearch = this.ChangeSearch.bind(this);
    }

    ChangeSearch(newValue) {
        this.setState({ search: newValue });
    }

    render() {
        return (
            <div>
                <TypeaheadSearchBar
                    value={this.state.search}
                    ChangeSearch={this.ChangeSearch} />

                {findMatches(this.state.search, [...new Set(fruits)]).map((fruit) => (
                    <TypeaheadResult key={fruit.firstPart + fruit.matchedPart + fruit.lastPart}
                        firstPart={fruit.firstPart}
                        matchedPart={fruit.matchedPart}
                        lastPart={fruit.lastPart} />
                ))}

            </div>
        )
    };
}

export default Typeahead;
