import React from 'react';
import { Link }from 'react-router-dom';
import User from '../user/user';

export default props => {
  return (
    <div>
      <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top ">
        <img alt='logo' src="/img/home_logo.png"/>
      </Link>
      <User/>
      <h3>
          Administrator page
      </h3>
      <hr/>
    </div>
  )
}
