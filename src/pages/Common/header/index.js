import React, { Component } from "react";
import {Header} from './styles';
class Headers extends Component {
  render() {
    return (
      <Header>
        <header>
          <h1>
            Rick & Morty <span>React</span> App
          </h1>
        </header>
      </Header>
    );
  }
}

export default Headers;
