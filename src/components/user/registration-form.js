import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../form/custom-input';
import Action from '../../constants/actions'
import { required, nameChars, email, passwordsMatch } from "../form/validations";

let RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting, onSubmit, registerError, loggedIn } = props;
  if (loggedIn) {
    return <Redirect to="/"/>
  }
  return (
    <div id="reg-page">
      <div className="registration-page">
        <div id="registration-border">
          <h1>Registration</h1>
          <form onSubmit={handleSubmit(onSubmit)} style={{ margin: '10%' }}>
            <div className="form-group">
              <label>First Name</label>
              <div>
                <Field
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  validate={[required, nameChars]}
                  component={ CustomInput }
                />
              </div>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <div>
                <Field
                  name="lastName"
                  component={ CustomInput }
                  type="text"
                  validate={[required, nameChars]}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <div>
                <Field
                  name="email"
                  component={ CustomInput }
                  type="email"
                  validate={[required, email]}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div>
                <Field
                  name="password"
                  component={ CustomInput }
                  type="password"
                  validate={[required]}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Repeat password</label>
              <div>
                <Field
                  name="repeatPassword"
                  component={ CustomInput }
                  type="password"
                  validate={[passwordsMatch]}
                  placeholder="Repeat password"
                />
              </div>
              <div className="error-message">
                {registerError}
              </div>
            </div>
            <div>
                <button type="submit" className="button">
                Submit
              </button>
              <Link to="/">
                  <button type="submit" className="button cancel">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
    ;
};

const mapStateToProps = state => {
  const data = state.user;
  return {
    loggedIn: data.get('loggedIn'),
    registerError: data.get('registerError')
  };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({ type: Action.register, payload })
});

RegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);

export default reduxForm({
  form: 'registration'
})(RegistrationForm)
