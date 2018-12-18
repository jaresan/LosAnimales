import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Action from '../../constants/actions';
import CustomInput from '../form/custom-input';

let LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting, onSubmit, closeModal, loginError } = props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>E-mail</label>
            <Field
              name="email"
              component={CustomInput}
              type="email"
              placeholder="Email"
            />
          </div>
        <div style={{margin: '20px 0px 0px 0px'}}>
            <label>Password</label>
            <Field
              name="password"
              component={CustomInput}
              type="password"
              placeholder="Password"
            />
          </div>
        <div className="error-message">
          {loginError}
        </div>
        <div>
            <button type="submit" className="button" >
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
