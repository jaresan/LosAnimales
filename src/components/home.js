import React, { Component } from 'react';

import { NavBar } from './nav-bar'
import { Link } from 'react-router-dom'

import '../styles/bootstrap.css';
import { Carousel } from "./carousel";

const animals = [
  'panda',
  'tiger',
  'lion',
  'parrot',
  'zebra',
  'tarantula',
  'giraffe',
  'gorilla',
  'redPanda',
  'crocodile',
  'ape',
  'elephant'
];

export class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Carousel/>
        <div className="container">
          <div className="animal-container">
            <div id="animal-selection" className="row">
              {
                animals.map(animal =>
                  <div className="col-lg-2 col-md-2 col-sm-3 col-6">
                    <Link key={animal} to={'animal/' + animal}>
                      <div className="animal-picture"
                           style={{ background: `url("img/animals/${animal}.png")` }}>
                      </div>
                    </Link>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}