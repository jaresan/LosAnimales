import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import { Redirect }  from 'react-router-dom';
import Action from '../../constants/actions';
import { reduxForm, Field } from 'redux-form';
import CustomTextarea from '../form/custom-textarea';
import CustomInput from '../form/custom-input';
import FileUploadForm from './file-upload-form';
import { required } from '../form/validations';


class AddSpeciesForm extends FileUploadForm {

  onSelectSpecies = (e) => {
    const { value } = e.target;
    const data = this.props.species.find(s => s.name === value);
    if (!value) {
      this.props.change('name', '');
      return;
    }
    const keys = [
      'classification',
      'diet',
      'appearance',
      'behaviour',
      'description'
    ];

    const { info } = data;
    keys.forEach(key => {
      this.props.change(key, info[key]);
    });
    this.props.change('name', data.name);
  };


  render() {
    const { handleSubmit, onSubmit, addSpeciesError, form } = this.props;
    if(form && form.submitSucceeded) {
      return <Redirect to="/admin"/>
    }

    return (
      <div className="edit-species-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-group">
              <label style={{ "marginRight": '20px' }}>Select the species</label>
              <Field name="name" component="select" onChange={this.onSelectSpecies}>
                <option/>
                {
                  this.props.species.map(({ name }) => <option key={name} value={name}>{name}</option>)
                }
              </Field>
            </div>
            { (this.props.form && this.props.form.values && this.props.form.values.name) ?
              <span>
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
                  <Field name="thumbnail" component="input" type="hidden"/>
                </div>
                <div className="form-group">
              <label style={{ "marginRight": '20px' }}>Detail</label>
              <input type="file" onChange={this.onFileChanged('detail')}/>
              <Field name="detail" component="input" type="hidden"/>
            </div>
              </span>
              :
              <div/>
            }
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
    species: data.get('species').toJS(),
    form: state.form.editSpecies
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
  form: 'editSpecies'
})(AddSpeciesForm)
