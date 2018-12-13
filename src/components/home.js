import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import '../styles/bootstrap.css';

const Home = props => {
  return (
    <div>
        <div className="container">
            <div>
                <img src="/img/logotipo.png" alt="Logo"/>
            </div>
            <h3>Welcome to Animal Adoptions</h3>
        <div className="animal-container">
          <div id="animal-selection" className="row">
            {
              props.data.get('species').map((animal, i) =>
                <div key={i} className="col-lg-2 col-md-2 col-sm-3 col-6">
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
};

const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch => ({
  doSmth: payload => dispatch({
    type: 'doSmth',
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);