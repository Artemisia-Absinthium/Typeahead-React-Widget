import React, { Component } from 'react';
import './TypeaheadResult.css';

class TypeaheadResult extends Component {
    static defaultProps = {
        firstPart: "",
        matchedPart: "",
        lastPart: "",
    }

    render() {
        var props = this.props;
        var firstPart = props.firstPart;
        var matchedPart = props.matchedPart;
        var lastPart = props.lastPart;

        return (
            <div>
                <p>{firstPart}<span>{matchedPart}</span>{lastPart}</p>
            </div>
        )
    };
}

export default TypeaheadResult;
