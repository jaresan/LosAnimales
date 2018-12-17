import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Action from '../../constants/actions';

let LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting, onSubmit, closeModal } = props;
    return (
      <form onSubmit={async (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeModal();
        await handleSubmit(onSubmit)();
      }}>
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
