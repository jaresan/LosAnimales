import React from 'react';
import { Link }from 'react-router-dom';
import User from '../user/user';

export default props => {
  return (
    <div>
      <div id="admin-header">
        <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top ">
          <img alt='logo' src="/img/home_logo.png" style={{width:'60px'}}/>
        </Link>
        <User/>
      </div>
      <h3>
          Administrator page
      </h3>
      <hr/>
    </div>
  )
}
