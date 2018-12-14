import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import '../../styles/bootstrap.css';
import '../../styles/style.css';
import { AnimalNavBar } from "./animal-nav-bar";

class AnimalDetail extends Component {
  componentDidMount() {
    this.props.loadAnimals({ species: this.props.animalId });
  }

  renderAnimalInfo = () => {
    const keys = ['classification', 'diet', 'appearance', 'behaviour'];
    return keys.map(key => (
      <div key={key} className="col-md-3 col-sm-3 col-xs-6" style={{ color: '#6c757d' }}>
        <div className="info-table">
          <h4>{_.capitalize(key)}</h4>
          {
            this.props.data[key].map(c => <li key={c}>{c}</li>)
          }
        </div>
      </div>
    ));
  };

  render() {
    const { data, imgPath } = this.props;
    return (
      <div>
        <AnimalNavBar data-offset="50"/>
        <div className="row">
          <div className="container-fluid animal-detail-container">
            <img alt="Animal picture" src={imgPath}/>
          </div>
          <section id="section0" className="container-fluid section">
              <h1 className="main-title">{this.props.animalId.toUpperCase()}</h1>
          </section>
          <section id="section1" className="container-fluid section">
            <h1>Facts</h1>
            <br/>
            {
              data.description.split("\n").map((paragraph, index) => <p key={index}
                                                                        style={{ textAlign: 'justify' }}>{paragraph}</p>)
            }
            <div className="row" style={{ marginRight: 100, marginLeft: 100 }}>
              {this.renderAnimalInfo()}
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
                <p>This is where pandas live.</p>
              </div>
            </div>

          </section>
        </div>
        <div>
            <section id="section3" className="container-fluid section">
                <h1>Adopt!</h1>
          <button>
              <img src="/img/pandas/chachi.jpg"></img>
              <h5>Chachi</h5>
          </button>
            <button>
                <img src="/img/pandas/kuku.jpg"></img>
                <h5>Kuku</h5>
            </button>
            <button>
                <img src="/img/pandas/lola.jpg"></img>
                <h5>Lola</h5>
            </button>
            <button>
                <img src="/img/pandas/pika.jpg"></img>
                <h5>Pika</h5>
            </button>
            </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ animals: state.animals });
const mapDispatchToProps = dispatch => ({
  loadAnimals: payload => dispatch({
    type: 'loadAnimals',
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetail);