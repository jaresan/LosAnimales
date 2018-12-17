import React  from 'react';
import { Field, reduxForm } from 'redux-form'

const AddSpeciesForm = props => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of the species</label>
          <div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Species' name"
            />
          </div>
        </div>
      </form>
    );
  };

export default reduxForm({
  form: 'addSpecies'
})(AddSpeciesForm)
