import React, { Component } from 'react';
import './TypeaheadResult.css';

class TypeaheadResult extends Component {
    static defaultProps = {
        firstPart: "",
        matchedPart: "",
        lastPart: "",
        isHoveredByKeyboard: false,
        ChangeSearch: () => { },
        ChangeDisplayedResult: () => { }
    }

    constructor(props) {
        super(props);

        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick(evt) {
        var props = this.props;
        var firstPart = props.firstPart;
        var matchedPart = props.matchedPart;
        var lastPart = props.lastPart;

        this.props.ChangeSearch(firstPart + matchedPart + lastPart);
        this.props.ChangeDisplayedResult();
    }

    render() {
        var props = this.props;
        var firstPart = props.firstPart;
        var matchedPart = props.matchedPart;
        var lastPart = props.lastPart;
        var isHoveredByKeyboard = props.isHoveredByKeyboard;

        return (
            <div className={`TypeaheadResult ${isHoveredByKeyboard ? "TypeaheadResultKeyboardHover" : ""}`} onMouseDown={this.HandleClick}>
                <p className="TypeaheadResult-text">{firstPart}<span className="TypeaheadResult-MatchedPart">{matchedPart}</span>{lastPart}</p>
            </div>
        )
    };
}

export default TypeaheadResult;
