import React, { Component } from 'react';

export  default class extends Component {
  render() {
    const { input: { value, onChange }, placeholder, type = 'text' } = this.props;
    return (
      <div>
        <label htmlFor="formContactName" className="col-sm-2 control-label">Name:</label>
        <div>
          <input
            id="formContactName"
            placeholder={placeholder}
            className="form-control"
            type={type}
          />
        </div>
      </div>
    )
  }
}