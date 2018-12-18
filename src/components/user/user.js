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
      {props.loggedIn ?
        <img src="/img/account.png" alt="Account"/>
        :
        <button className="emptyButton" type="button" data-toggle="modal" data-target="#myModal">
          <img src="/img/account.png" alt="Account"/>
        </button>
      }
      {props.loggedIn ? <img alt='Messages' title="Messaging" src="/img/message.png"/> : <span/>}
      {props.data.isAdmin ? (<Link to="/admin"><img alt='Messages' title="Admin section" src="/img/admin.png"/></Link>) : <span/>}
      {props.data.email}
      {props.loggedIn ? <button className="emptyButton" onClick={props.logout}><img alt='Sign out' title="Sign out" src="/img/signout.png"/></button> : <span/>}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Log in</h4>
              <button type="button" className="cancel close" data-dismiss="modal">&times;</button>
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
