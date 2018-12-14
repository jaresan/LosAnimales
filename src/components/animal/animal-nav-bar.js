import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AnimalNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-text" id="mainNav">

        <div className="container" >
          <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top ">
              <img src="/img/home_logo.png"></img>
          </Link>
          <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top ">
              <img src="/img/account2.png" style={{width : '25px'}}></img>
          </Link>
          <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top ">
              <img src="/img/message.png" style={{width : '25px'}}></img>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#section1">Facts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#section2">Places</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#section3">Adopt!</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}