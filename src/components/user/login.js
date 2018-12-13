import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './login-form';

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm
          onSubmit={console.log}
        />
      </div>
    );
  }
}
export default connect()(Login);