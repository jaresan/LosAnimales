import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Action from '../../constants/actions';

let LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting, onSubmit, closeModal, loginError } = props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="error-message">
          {loginError}
        </div>
        <div>
          <button type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  };

const mapStateToProps = state => {
  const data = state.user;
  return {
    loginError: data.get('loginError')
  };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({type: Action.login, payload})
});

LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);


export default reduxForm({
  form: 'login'
})(LoginForm)
