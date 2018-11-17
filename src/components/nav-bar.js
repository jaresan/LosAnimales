import React, { Component } from 'react';

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo navbar-brand"></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                About us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">News</a>
                <a className="dropdown-item" href="#">Our animals</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Contact</a>
                <a className="dropdown-item" href="#">Our staff</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}