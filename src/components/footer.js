import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        ©{(new Date()).getFullYear()} Los Animales
      </div>
    );
  }
}
