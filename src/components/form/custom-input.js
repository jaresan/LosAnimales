import React, { Component } from 'react';

export  default class extends Component {
  render(){
    const { input, placeholder, type} = this.props;
    return (
        <input
          placeholder={placeholder}
          className="form-control"
          type={type}
          {...input}
        />
    )
  }
}