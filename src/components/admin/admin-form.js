import React from 'react';
import { Link }from 'react-router-dom';
import AdminHeader from '../user/user';
import AddSpecies from './add-species-form';

export const adminForms = {
  'add-species': <AddSpecies/>
};


export default props => {
  console.log(props);
  return (
    <div>
      <Link to="/admin">
        <button>Back</button>
      </Link>
      {adminForms[props.match.params.adminForm]}
    </div>
  )
}
