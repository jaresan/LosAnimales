import React, { Component } from 'react';

export  default class extends Component {
  render(){
    const { input, placeholder, type, meta: { touched, error, warning }} = this.props;
    return (
      <div>
        <input
          placeholder={placeholder}
          className="form-control"
          type={type}
          {...input}
        />
        <div className="error-message">
          {touched &&
          ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  }
}