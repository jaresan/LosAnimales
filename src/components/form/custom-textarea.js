import React, { Component } from 'react';

export default class extends Component {
  render(){
    const { input, placeholder, meta: { touched, error, warning } } = this.props;
    return (
      <div>
        <textarea
          placeholder={placeholder}
          className="form-control"
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