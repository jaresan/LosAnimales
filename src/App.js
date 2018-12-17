import React, { Component } from 'react';
import './App.css';
import './styles/bootstrap.css';
import './styles/style.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home'
import AnimalDetail from './components/animal/animal-detail'
import Registration from "./components/user/registration";
import Admin from './components/admin/admin';
import AdminForm from './components/admin/admin-form';
import AdminHeader from './components/admin/admin-header';

const getAnimalDetail = props => {
  const species = props.match.params.species;
  return (
    <AnimalDetail
      {...props}
      species={species}
    />
  )
};

const AdminPages = ({ match }) => {
  return (
    <div>
      {/*<h2>Topics</h2>*/}
      {/*<ul>*/}
        {/*<li>*/}
          {/*<Link to={`${match.url}/rendering`}>Rendering with React</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
          {/*<Link to={`${match.url}/components`}>Components</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
          {/*<Link to={`${match.url}/props-v-state`}>Props v. State</Link>*/}
        {/*</li>*/}
      {/*</ul>*/}
      <AdminHeader/>
      <Route path={`${match.path}/:adminForm`} component={AdminForm} />
      <Route
        exact
        path={match.path}
        component={Admin}
      />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/registration" component={Registration} />
            {/*<Route exact path="/admin" component={Admin} />*/}
            <Route path="/admin" component={AdminPages} />
            {/*<Route exact path="/admin/add-species" component={AddSpecies} />*/}
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
