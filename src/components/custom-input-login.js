import React, { Component } from 'react';

export default class extends Component {
    render() {
        const { input: { value, onChange }, placeholder, type} = this.props;
        return (
            <div>
                <div id="login-fields">
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