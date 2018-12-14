import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

const RegistrationForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div id="registration-border">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div id="form-group">
                    <label>First Name</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
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

export default reduxForm({
  form: 'registration'
})(RegistrationForm)
