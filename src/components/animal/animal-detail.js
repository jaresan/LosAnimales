import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import '../../styles/bootstrap.css';
import '../../styles/style.css';
import { AnimalNavBar } from "./animal-nav-bar";
import {Link} from "react-router-dom";

class AnimalDetail extends Component {
  renderAnimalInfo = info => {
    const keys = ['classification', 'diet', 'appearance', 'behaviour'];
    return keys.map(key => (
      <div key={key} className="col-md-3 col-sm-3 col-xs-6" style={{ color: '#6c757d' }}>
        <div className="info-table">
          <h4>{_.capitalize(key)}</h4>
          {
            info[key].split("\n").map(c => <li key={c}>{c}</li>)
          }
        </div>
      </div>
    ));
  };

  render() {
    if (this.props.loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    const { data, species, animals } = this.props;

    return (
      <div>
        <AnimalNavBar data-offset="50"/>
        <div className="row">

            <div className="container-fluid animal-detail-container">
                <img alt="Animal" src={data.detailImg}/>
                <div className="animal-detail-label">
                    <label>{species.toUpperCase()}</label>
                </div>
            </div>
          <section id="section1" className="container-fluid section">
            <h1>Facts</h1>
            <br/>
            {
              data.info.description
                .split("\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    style={{ textAlign: 'justify' }}
                  >
                    {paragraph}
                  </p>
                ))
            }
            <div className="row" style={{ marginRight: 100, marginLeft: 100 }}>
              {this.renderAnimalInfo(data.info)}
            </div>
          </section>
        </div>
        <div className="row">
          <section id="section2" className="container-fluid section">
            <h1>Places</h1>

            <div className="img-container">
              <img src="/img/maps/india.JPG" alt="India"/>
              <div className="content">
                <h3>Panda location</h3>
                <p>This is where they live.</p>
              </div>
            </div>

          </section>
        </div>
        {
          animals.length
          &&
          <div>
            <section id="section3" className="container-fluid section">
              <h1>Adopt!</h1>
              {
                animals.map(animal => (
                  <button>
                    <img src={animal.img} alt={animal.name}/>
                    <h5>{animal.name}</h5>
                  </button>
                ))
              }
            </section>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const species = props.species;
  const data = state.data.toJS();
  const animals = data.animals.filter(animal => animal.species === species);
  const speciesData = data.species.find(s => s.name === species);
  const loading = !speciesData;

  return {
    species,
    animals,
    data: speciesData,
    loading
  }
};

export default connect(mapStateToProps, null)(AnimalDetail);