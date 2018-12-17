import React, { Component } from 'react';

export default class extends Component {
  render(){
    const { input, placeholder } = this.props;
    return (
        <textarea
          placeholder={placeholder}
          className="form-control"
          {...input}
        />
    )
  }
}