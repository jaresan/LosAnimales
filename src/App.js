import React, { Component } from 'react';
import './App.css';
import './styles/bootstrap.css';
import './styles/style.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/home'
import { AnimalDetail } from './components/animal/animal-detail'
import { Footer } from "./components/footer";
import animalInfo from './components/animal/facts';

const getAnimalDetail = props => {
  const animalId = props.match.params.animal_id;
  return (
    <AnimalDetail
      {...props}
      animalId ={animalId}
      data={animalInfo[animalId] || animalInfo['panda']}
      imgPath={`/img/animals/detail/${animalId}.png`}
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
            <Route
              path="/animal/:animal_id"
              render={getAnimalDetail}
            />
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
