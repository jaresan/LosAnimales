import React, { Component } from 'react';

export  default class extends Component {
  render(){
    const { input, placeholder, type} = this.props;
    return (
        <div>
        <div id="form-fields">
        <input
          placeholder={placeholder}
          className="form-control"
          type={type}
          {...input}
        />
        </div>
        <div className="error-message">
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
  }
}