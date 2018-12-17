import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './login-form';
import { Link } from 'react-router-dom';
import Action from '../../constants/actions';

export const closeModal = () => {
  window.$('#myModal').modal('toggle');
  window.$('.modal-backdrop').hide();
};

const User = props => {
  return (
    <div className="account">
      <button id="accountButton" type="button" data-toggle="modal" data-target="#myModal">
        <img src="/img/account.png" alt="Account"/>
      </button>
      {props.data.email}
      {props.loggedIn ? <button onClick={props.logout}>Sign out</button> : <span/>}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Log in</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
              <LoginForm closeModal={closeModal}/>
              Don't have an account? <Link to="/registration" onClick={closeModal}>Sign up</Link>!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  const data = state.user;
  return {
    data: data.get('data').toJS(),
    loggedIn: data.get('loggedIn')
  };
};
const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch({type: Action.closeModal}),
  logout: () => dispatch({type: Action.logout})
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
