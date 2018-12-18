import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import { Redirect }  from 'react-router-dom';
import Action from '../../constants/actions';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../form/custom-input';
import CustomTextarea from '../form/custom-textarea';
import FileUploadForm from './file-upload-form'
import FileInput from '../form/file-input';
import { required } from '../form/validations';

class AddSpeciesForm extends FileUploadForm {

  render() {
    const { handleSubmit, onSubmit, addSpeciesError, form } = this.props;
    if(form && form.submitSucceeded) {
      return <Redirect to="/admin"/>
    }
    return (
      <div className="add-species-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-group">
              <label>Name of the species</label>
              <Field
                name="name"
                type="text"
                validate={[required]}
                component={ CustomInput }
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <Field
                name="location"
                type="text"
                validate={[required]}
                component={ CustomInput }
              />
            </div>
            <div className="form-group">
              <label>Classification</label>
              <Field
                name="classification"
                validate={[required]}
                component={ CustomTextarea }
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <Field
                name="description"
                validate={[required]}
                component={ CustomTextarea }
              />
            </div>
            <div className="form-group">
              <label>Diet</label>
              <Field
                name="diet"
                validate={[required]}
                component={ CustomTextarea }
              />
            </div>
            <div className="form-group">
              <label>Appearance</label>
              <Field
                name="appearance"
                validate={[required]}
                component={ CustomTextarea }
              />
            </div>
            <div className="form-group">
              <label>Behavior</label>
              <Field
                name="behaviour"
                validate={[required]}
                component={ CustomTextarea }
              />
            </div>
            <div className="form-group">
              <label style={{ "marginRight": '20px' }}>Thumbnail</label>
              <input type="file" onChange={this.onFileChanged('thumbnail')}/>
              <Field
                name="thumbnail"
                component={FileInput}
                type="hidden"
                validate={[required]}
              />
            </div>
            <div className="form-group">
              <label style={{ "marginRight": '20px' }}>Detail</label>
              <input type="file" onChange={this.onFileChanged('detail')}/>
              <Field
                name="detail"
                component={FileInput}
                type="hidden"
                validate={[required]}
              />
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
  const data = state.user;
  return {
    addSpeciesError: data.get('addSpeciesError'),
    form: state.form.addSpecies
  };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({ type: Action.addSpecies, payload })
});

AddSpeciesForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpeciesForm);

export default reduxForm({
  form: 'addSpecies'
})(AddSpeciesForm)
