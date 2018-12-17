import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import Action from '../../constants/actions';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../form/custom-input';
import FileUploadForm from './file-upload-form'

class AddSpeciesForm extends FileUploadForm {

  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name of the species</label>
          <Field
            name="name"
            type="text"
            placeholder="Animal name"
            component={ CustomInput }
          />
          <label>Species</label>
          <Field name="species" component="select">
            <option/>
            {
              this.props.species.map(name => <option value={name}>{name}</option>)
            }
          </Field>
          <Field name="img" component="input" type="hidden"/>
          <label>Image</label>
          <input type="file" onChange={this.onFileChanged('img')}/>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}



const mapStateToProps = state => {
  const data = state.data;
  return {
    species: data.get('species').toJS().map(s => s.name)
  };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({type: Action.addAnimal, payload})
});

AddSpeciesForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpeciesForm);

export default reduxForm({
  form: 'addSpecies'
})(AddSpeciesForm)
