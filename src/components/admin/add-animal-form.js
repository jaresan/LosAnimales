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
      <div className="add-animal-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div className="form-group">
          <label>Name of the animal</label>
          <Field
            name="name"
            type="text"
            placeholder="Animal name"
            component={ CustomInput }
          />
            </div>
            <div className="form-group">
          <label style={{"margin-right":'20px'}}>Species</label>
          <Field name="species" component="select">
            <option />
            {
              this.props.species.map(name => <option value={name}>{name}</option>)
            }
          </Field>
            </div>
            <div className="form-group">
          <Field name="img" component="input" type="hidden"/>
          <label style={{"margin-right":'20px'}}>Image</label>
          <input type="file" onChange={this.onFileChanged('img')}/>
            </div>
            <div className="form-group">
                <button type="submit">
                    Submit
                </button>
            </div>
        </div>
      </form>
      </div>
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
