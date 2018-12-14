import React, { Component } from 'react';
import { Link }from 'react-router-dom';

export default props => {
  return<div>
    <Link to="/admin/add-species">Add animal species</Link>
    <Link to="/admin/add-animal">Add animal</Link>
  </div>
}
