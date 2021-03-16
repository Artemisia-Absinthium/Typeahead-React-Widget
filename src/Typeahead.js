import React, { Component } from 'react';
import './Typeahead.css';
import TypeaheadSearchBar from "./TypeaheadSearchBar"
import TypeaheadResult from "./TypeaheadResult"
import fruits from "./Fruits"
import { findMatches } from './Utils.js';

class Typeahead extends Component {
    render() {
        return (
            <div>
                <TypeaheadSearchBar />
                {findMatches("fruit", fruits).map((fruit) => (
                    <TypeaheadResult firstPart={fruit.firstPart} matchedPart={fruit.matchedPart} lastPart={fruit.lastPart} />
                ))}

            </div>
        )
    };
}

export default Typeahead;
