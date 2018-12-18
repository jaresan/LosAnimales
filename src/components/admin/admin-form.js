import React from 'react';
import { Link }from 'react-router-dom';
import AddSpecies from './add-species-form';
import AddAnimal from './add-animal-form';
import EditSpecies from './edit-species-form';

export const adminForms = {
  'add-species': <AddSpecies/>,
  'add-animal': <AddAnimal/>,
  'edit-species': <EditSpecies/>
};


export default props => {
  return (
    <div>
      <div id="backFromAdmin">
        <Link to="/admin">
          <button className="button neutral">Back</button>
        </Link>
      </div>
      {adminForms[props.match.params.adminForm]}
    </div>
  )
}
