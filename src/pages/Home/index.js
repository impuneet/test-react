import React, { PropTypes } from 'react';
import { CardGrid, Card, Header } from './styles';
import { Headers } from '../Common/header';
import api from '../../services/api';
import axios from 'axios';
import _ from "lodash";
import DisplayCharacter from '../Common/CharacterGrid';
import SearchBar from '../Common/SearchBar';
import { Grid ,Dropdown } from 'semantic-ui-react'
import { genre, sort, species, status } from "../Common/DropDown/DropdownOptions";
export class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            characters: [],
            selectedCharacter: [],
            next: "",
            prev: "",
            searchTerm: "",
            speciesFilter : "",
            sorting: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.onChangeDropdown = this.onChangeDropdown.bind(this);
        // Debounce 500ms
        this.updateUrl = _.debounce(this.updateUrl, 500);
    }

    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character").then(res => {
            this.setState({
                characters: res.data.results,
                selectedCharacter: res.data.results[0],
                location: res.data.results.location,
                next: res.data.info.next,
                prev: res.data.info.prev
            });
            console.log('init state', this.state);
        });
    }

    onChangeDropdown(e,data){
        e.target.value = data.value
        console.log(e.target.value);
        this.setState({
            speciesFilter : e.target.value
        })
        this.updateUrl();
    }


    handleChange(e) {
        this.setState({
            searchTerm: e.target.value,
        });
        this.updateUrl();
    }

    updateUrl() {
        this.setState({
            currentUrl: this.state.searchTerm
        });
        let searchTermInput = this.state.searchTerm;
        let species = this.state.speciesFilter;
        axios
            .get(`https://rickandmortyapi.com/api/character/?name=${searchTermInput}&species=${species}`)
            .then(res => {
                console.log('res', res);
                this.setState({
                    characters: res.data.results,
                    next: res.data.info.next,
                    prev: res.data.info.prev,
                    searchTerm: searchTerm
                });
            }).catch(error => {
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    this.setState({
                        characters: []
                    });
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
            })
    }


    refresh() {
        this.setState({ refreshing: true });
    }

    onComponentRefresh() {
        this.setState({ refreshing: false });
    }

    render() {
        const { refreshing } = this.state;
        return (
            <div>
                <Header>
                    <header>
                        <h1>Rick & Morty</h1>
                    </header>
                </Header>

                <Grid container columns={2} divided relaxed stackable>
                    <Grid.Column>
                        <SearchBar handleChange={this.handleChange} />
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder="filter by species"
                            selection clearable
                            options={species}
                            filter={`species`}
                            onChange={this.onChangeDropdown}
                        />
                        <Dropdown
                            placeholder="sort by id"
                            selection clearable
                            options={sort}
                            onChange={(e, data) =>  this.setState({sorting: data.value} )}
                        />
                    </Grid.Column>
                </Grid>
                <DisplayCharacter sorting={this.state.sorting} character={this.state.characters} />
            </div>
        );
    }
}

export default Home;
