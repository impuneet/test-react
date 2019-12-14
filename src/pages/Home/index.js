import React, { PropTypes } from 'react';
import { CardGrid, Card , Header } from './styles';
import { Headers } from '../Common/header';
import api from '../../services/api';
import axios from 'axios';
import DisplayCharacter from '../Common/CharacterGrid';

export class Home extends  React.Component {

    constructor() {
        super();
        this.state = {
            characters: [],
            selectedCharacter: [],
            next: "",
            prev: "",
            searchTerm: ""
          };
    }

    componentDidMount(){
        axios.get("https://rickandmortyapi.com/api/character").then(res => {
            this.setState({
                characters: res.data.results,
                selectedCharacter: res.data.results[0],
                location: res.data.results.location,
                next: res.data.info.next,
                prev: res.data.info.prev
            });
            console.log('init state',this.state);
    });
    }

    updateUrl(){
        this.setState({
            currentUrl: this.state.searchTerm
        });
        let searchTermInput = this.state.searchTerm;
        axios
        .get(`https://rickandmortyapi.com/api/character/?name=${searchTermInput}`)
        .then(res => {
        this.setState({
          characters: res.data.results,
          next: res.data.info.next,
          prev: res.data.info.prev,
          searchTerm: searchTerm
        });
      });
    }


    refresh() {
        this.setState({ refreshing: true });
    }

    onComponentRefresh() {
        this.setState({ refreshing: false });
    }

    render(){
        const { refreshing } = this.state;
        return (
            <div>
                <Header>
                    <header>
                        <h1>Rick & Morty</h1>
                    </header>
                </Header>
                <DisplayCharacter character={this.state.characters} />
            </div>
        );
    }
}

export default Home;
