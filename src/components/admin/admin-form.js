import React from 'react';
import { Link }from 'react-router-dom';
import AddSpecies from './add-species-form';
import AddAnimal from './add-animal-form';

export const adminForms = {
  'add-species': <AddSpecies/>,
  'add-animal': <AddAnimal/>
};


export default props => {
  return (
    <div>
      <Link to="/admin">
        <button>Back</button>
      </Link>
      {adminForms[props.match.params.adminForm]}
    </div>
  )
}
