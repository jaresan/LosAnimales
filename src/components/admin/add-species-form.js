import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import Action from '../../constants/actions';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../form/custom-input';
import CustomTextarea from '../form/custom-textarea';
import FileUploadForm from './file-upload-form'

class AddSpeciesForm extends FileUploadForm {

  render() {
    const { handleSubmit, onSubmit, addSpeciesError } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name of the species</label>
          <Field
            name="name"
            type="text"
            placeholder="Species' name"
            component={ CustomInput }
          />
          <label>Classification</label>
          <Field
            name="classification"
            component={ CustomTextarea }
          />
          <label>Description</label>
          <Field
            name="description"
            component={ CustomTextarea }
          />
          <label>Diet</label>
          <Field
            name="diet"
            component={ CustomTextarea }
          />
          <label>Appearance</label>
          <Field
            name="appearance"
            component={ CustomTextarea }
          />
          <label>Behavior</label>
          <Field
            name="behaviour"
            component={ CustomTextarea }
          />
          <Field name="thumbnail" component="input" type="hidden"/>
          <Field name="detail" component="input" type="hidden"/>
          <label>Thumbnail</label>
          <input type="file" onChange={this.onFileChanged('thumbnail')}/>
          <label>Detail</label>
          <input type="file" onChange={this.onFileChanged('detail')}/>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}



const mapStateToProps = state => {
  const data = state.user;
  return {
    addSpeciesError: data.get('addSpeciesError')
  };
};
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({type: Action.addSpecies, payload})
});

AddSpeciesForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpeciesForm);

export default reduxForm({
  form: 'addSpecies'
})(AddSpeciesForm)
