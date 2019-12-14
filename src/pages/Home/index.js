import React, { PropTypes } from 'react';
import { CardGrid, Card , Header } from './styles';
import { Headers } from '../Common/header';

export class Home extends  React.Component {

    constructor(props) {
        super(props);
        this.state = { refreshing: false };
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
            <Header>
                <header>
                    <h1>Rick & Morty</h1>
                </header>
            </Header>
        );
    }
}

export default Home;
