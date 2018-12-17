import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './registration-form';

class Registration extends Component {
  render() {
    return (
      <div>
        <RegistrationForm/>
      </div>
    );
  }
}
export default connect()(Registration);