import React, { Component } from 'react';
import './Typeahead.css';
import TypeaheadSearchBar from "./TypeaheadSearchBar"
import TypeaheadResult from "./TypeaheadResult"
import fruits from "./Fruits"
import { FindMatches, MergeResult } from './Utils.js';

class Typeahead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            search: "",
            searchResult: [],
            savedResult: [],
            cursorPos: -1
        };

        this.ChangeSearch = this.ChangeSearch.bind(this);
        this.ChangeDisplayedResult = this.ChangeDisplayedResult.bind(this);
        this.SearchBarFocus = this.SearchBarFocus.bind(this);
        this.SearchBarBlur = this.SearchBarBlur.bind(this);
        this.HandleKeyDown = this.HandleKeyDown.bind(this)
        this.SearchBarKeyboardEnter = this.SearchBarKeyboardEnter.bind(this)
    }

    ChangeSearch(newValue) {
        var matches = FindMatches(newValue, [...new Set(fruits)]);
        this.setState(prevState => ({
            search: newValue,
            searchResult: matches,
            cursorPos: -1,
            isFocused: true
        }))
    }

    ChangeDisplayedResult() {
        this.setState(prevState => ({
            savedResult: prevState.searchResult,
            cursorPos: -1
        }));
    }

    SearchBarFocus() {
        this.setState({
            isFocused: true,
            cursorPos: -1
        });
    }

    SearchBarBlur() {
        this.setState({
            isFocused: false,
            cursorPos: -1
        });
    }

    HandleKeyDown(evt) {
        var cursorPos = this.state.cursorPos;
        var searchResult = this.state.searchResult;

        if (evt.keyCode === 38 && cursorPos > 0) {
            this.setState(prevState => ({
                cursorPos: prevState.cursorPos - 1
            }));
        } else if (evt.keyCode === 40 && cursorPos < searchResult.length - 1) {
            this.setState(prevState => ({
                cursorPos: prevState.cursorPos + 1
            }));
        }
    }

    SearchBarKeyboardEnter() {
        var cursorPos = this.state.cursorPos;
        var searchResult = this.state.searchResult;

        if (cursorPos > -1 && cursorPos < searchResult.length) {
            var newValue = searchResult[cursorPos];
            this.ChangeSearch(MergeResult(newValue));
        }

        this.ChangeDisplayedResult();
        this.SearchBarBlur();
    }

    render() {
        return (
            <div>
                <div className="Typeahead" onKeyDown={this.HandleKeyDown}>
                    <TypeaheadSearchBar
                        search={this.state.search}
                        ChangeSearch={this.ChangeSearch}
                        ChangeDisplayedResult={this.ChangeDisplayedResult}
                        SearchBarFocus={this.SearchBarFocus}
                        SearchBarBlur={this.SearchBarBlur}
                        SearchBarKeyboardEnter={this.SearchBarKeyboardEnter} />
                    {this.state.isFocused &&
                        <div className="Typeahead-Results">
                            {this.state.searchResult.map((fruit, index) => (
                                <TypeaheadResult key={MergeResult(fruit)}
                                    firstPart={fruit.firstPart}
                                    matchedPart={fruit.matchedPart}
                                    lastPart={fruit.lastPart}
                                    ChangeSearch={this.ChangeSearch}
                                    ChangeDisplayedResult={this.ChangeDisplayedResult}
                                    isHoveredByKeyboard={this.state.cursorPos === index} />
                            ))}
                        </div>
                    }

                </div>
                <h1>Your last search results:</h1>
                {this.state.savedResult.map((fruit) => (
                    <p key={"Display" + MergeResult(fruit)} > {MergeResult(fruit)}</p>
                ))
                }
            </div>
        )
    };
}

export default Typeahead;
