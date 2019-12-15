import React from "react";
import { Dropdown} from 'semantic-ui-react'
import {genre, sort, species, status} from "./DropdownOptions";
import FilterDropDown from './style';
const DropDown = props => {
    return(
            <Dropdown
            placeholder="filter by species"
            selection clearable
            options={species}
            filter={`species`}
          />
    );
}
const DropDownFilter = props => {
  return(
      <Dropdown
            placeholder="sort by name"
            selection clearable
            options={sort}
    />
  );
}

export default (DropDown,DropDownFilter);