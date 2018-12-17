import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../custom-input';
import Action from '../../constants/actions'

let RegistrationForm = props => {
    const { handleSubmit, pristine, reset, submitting, onSubmit, registerError, loggedIn } = props;
    if(loggedIn) {
        return <Redirect to="/"/>
    }
    return (
        <div id="registration-border">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="form-group">
                    <label>First Name</label>
                    <div>
                        <Field
                          name="firstName"
                          placeholder="First Name"
                          component={ CustomInput }
                        />
                    </div>
                </div>
                <div id="form-group">
                    <label>Last Name</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div id="form-group">
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
                <div id="form-group">
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
                  {registerError}
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                    <button style={{ marginLeft: "10px" }} type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        </div>
    );
  };

const mapStateToProps = state => {
  const data = state.user;
  return {
    loggedIn: data.get('loggedIn'),
    registerError: data.get('registerError')
  };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({type: Action.register, payload})
});

RegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);

export default reduxForm({
  form: 'registration'
})(RegistrationForm)
