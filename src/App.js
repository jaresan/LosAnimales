import React, { Component } from 'react';
import './App.css';
import './styles/bootstrap.css';
import './styles/style.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/home'
import { AnimalDetail } from './components/animal/animal-detail'
import { Footer } from "./components/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/animal/:animal_id" component={AnimalDetail} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
