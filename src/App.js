import React, { Component } from 'react';
import './App.css';
import './styles/bootstrap.css';
import './styles/style.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home'
import AnimalDetail from './components/animal/animal-detail'
import Registration from "./components/user/registration";
import Admin from "./components/admin/admin";
import AddSpecies from "./components/admin/add-species";

const getAnimalDetail = props => {
  const species = props.match.params.species;
  return (
    <AnimalDetail
      {...props}
      species={species}
    />
  )
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/add-species" component={AddSpecies} />
            <Route
              path="/animal/:species"
              render={getAnimalDetail}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
