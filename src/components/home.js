import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import User from './user/user';

import '../styles/bootstrap.css';

const Home = props => {
  return (
    <div>
      <div className="container">
        <User/>
        <div>
          <img id="logo" src="/img/logotipo.png" alt="Logo"/>
        </div>
        <h3>Welcome to Animal Adoptions</h3>
          <hr/>
        <div className="animal-container">
          <div id="animal-selection" className="row">
            {
              props.species.map((species, i) =>
                <div key={i} className="col-lg-2 col-md-2 col-sm-3 col-6">
                  <Link key={species.name} to={'animal/' + species.name}>
                    <div className="animal-picture"
                         style={{ background: `url(${species.thumbnailImg}` }}>
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

const mapStateToProps = state => {
  const data = state.data;
  return {
    species: data.get('species').toJS()
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);