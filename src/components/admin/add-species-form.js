import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import Action from '../../constants/actions';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../custom-input-login';
import CustomTextarea from '../form/custom-textarea';
import FileUploadForm from './file-upload-form'
import FileInput from '../form/file-input';

class AddSpeciesForm extends FileUploadForm {

  render() {
    const { handleSubmit, onSubmit, addSpeciesError } = this.props;
    return (
      <div className="add-species-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div id="form-group">
          <label>Name of the species</label>
          <Field
            name="name"
            type="text"
            component={ CustomInput }
          />
            </div>
            <div id="form-group">
          <label>Classification</label>
          <Field
            name="classification"
            component={ CustomTextarea }
          />
            </div>
            <div id="form-group">
          <label>Description</label>
          <Field
            name="description"
            component={ CustomTextarea }
          />
            </div>
            <div id="form-group">
          <label>Diet</label>
          <Field
            name="diet"
            component={ CustomTextarea }
          />
            </div>
            <div id="form-group">
          <label>Appearance</label>
          <Field
            name="appearance"
            component={ CustomTextarea }
          />
            </div>
            <div id="form-group">
          <label>Behavior</label>
          <Field
            name="behaviour"
            component={ CustomTextarea }
          />
            </div>
            <div id="form-group">
          <label style={{"margin-right":'20px'}}>Thumbnail</label>
          <input type="file" onChange={this.onFileChanged('thumbnail')}/>
          <Field
              name="thumbnail"
              component={FileInput}
              type="hidden"
          />
            </div>
            <div id="form-group">
                <label style={{"margin-right":'20px'}}>Detail</label>
                <input type="file" onChange={this.onFileChanged('detail')}/>
          <Field
              name="detail"
              component={FileInput}
              type="hidden"
          />
            </div>
            <div id="form-group">
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
