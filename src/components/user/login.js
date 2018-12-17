import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './login-form';

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.props.neco}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const data = state.user;
  return {
    species: data.get('species').toJS()
  };
};
const mapDispatchToProps = dispatch => ({
  neco: payload => dispatch({type: 'aa', payload})
});

export default connect()(Login);