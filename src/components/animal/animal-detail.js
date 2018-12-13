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
          <h1>{_.capitalize(key)}</h1>
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
        <AnimalNavBar/>
        <div className="row">
          <div className="container-fluid animal-detail-container">
            <img alt="Animal picture" src={imgPath}/>
          </div>
          <section id="section1" className="container-fluid section">
            <h1 className="main-title">{this.props.animalId.toUpperCase()}</h1>

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
                <h1>Panda location</h1>
                <p>This is where pandas live.</p>
              </div>
            </div>

          </section>
        </div>
        <div>
          <table className="table table-bordered table-dark">
            <thead>
            </thead>
            <tbody>
            {
              (this.props.animals.get(this.props.animalId) || []).map((name, i) =>
                <tr key={i} className="col-lg-2 col-md-2 col-sm-3 col-6">
                  <td>{name}</td>
                  <td><button>Adopt!</button></td>
                </tr>
              )
            }
            </tbody>
          </table>
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