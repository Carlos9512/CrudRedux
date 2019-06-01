import React from 'react';
import store from "./store"
import { Provider } from "react-redux"
import Productos from "./components/Productos"
import Router from './components/Router';
import { Container } from 'react-bootstrap';



class App extends React.Component {
  render() {
    return (
      <Provider store={store}>      
        <Container>
          <br></br>
          <Router/>
        </Container>
      </Provider>
    );
  }
}

export default App;
