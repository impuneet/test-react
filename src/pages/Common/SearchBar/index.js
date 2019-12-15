import React from "react";
import {Wrap,Search} from './style';

const SearchBar = props => {
    return (
        <Wrap>
        <input
            type="text"
            placeholder="Search By Name..."
            id="searchTerm"
            name="searchTerm"
            onChange={props.handleChange}
        />
        </Wrap>
    )
}

export default SearchBar;