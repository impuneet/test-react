import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'semantic-ui-css/semantic.min.css'

const App = () =>(
    <BrowserRouter>
       <Routes />
       <GlobalStyle />
    </BrowserRouter>
)

export default App;