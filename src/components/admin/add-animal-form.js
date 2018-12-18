import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import { Redirect }  from 'react-router-dom';
import Action from '../../constants/actions';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../form/custom-input';
import FileUploadForm from './file-upload-form';
import { required } from '../form/validations';

class AddAnimalForm extends FileUploadForm {

  render() {
    const { handleSubmit, onSubmit, form } = this.props;
    if(form && form.submitSucceeded) {
      return <Redirect to="/admin"/>
    }
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
            validate={[required]}
            component={ CustomInput }
          />
            </div>
            <div className="form-group">
          <label style={{"marginRight":'20px'}}>Species</label>
          <Field name="species" component="select" validate={[required]}>
            <option />
            {
              this.props.species.map(name => <option key={name} value={name}>{name}</option>)
            }
          </Field>
            </div>
            <div className="form-group">
          <Field name="img" component="input" type="hidden" validate={[required]}/>
          <label style={{"marginRight":'20px'}}>Image</label>
          <input type="file" onChange={this.onFileChanged('img')}/>
            </div>
            <div className="form-group">
                <button type="submit" className="button" disabled={form && form.syncErrors}>
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
    species: data.get('species').toJS().map(s => s.name),
    form: state.form.addAnimal
  };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({type: Action.addAnimal, payload})
});

AddAnimalForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAnimalForm);

export default reduxForm({
  form: 'addAnimal'
})(AddAnimalForm)
