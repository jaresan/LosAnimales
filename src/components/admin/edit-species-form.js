import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import Action from '../../constants/actions';
import { reduxForm, Field } from 'redux-form';
import CustomInput from '../form/custom-input';
import CustomTextarea from '../form/custom-textarea';
import FileUploadForm from './file-upload-form'

class AddSpeciesForm extends FileUploadForm {

  onSelectSpecies = (e) => {
    console.log(e);
    const { value } = e.target;
    const data = this.props.species.find(s => s.name === value);
    console.log(data);
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
      console.log(key, info[key]);
    });
    this.props.change('name', data.name);
  };


  render() {
    const { handleSubmit, onSubmit, addSpeciesError } = this.props;
    return (
        <div className="edit-species-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div className="form-group">
          <label style={{"margin-right":'20px'}}>Select the species</label>
          <Field name="name" component="select" onChange={this.onSelectSpecies}>
            <option/>
            {
              this.props.species.map(({ name }) => <option key={name} value={name}>{name}</option>)
            }
          </Field>
            </div>
            <div className="form-group">
          <label>Classification</label>
          <Field
            name="classification"
            component={ CustomTextarea }
          />
            </div>
            <div className="form-group">
          <label>Description</label>
          <Field
            name="description"
            component={ CustomTextarea }
          />
            </div>
            <div className="form-group">
          <label>Diet</label>
          <Field
            name="diet"
            component={ CustomTextarea }
          />
            </div>
            <div className="form-group">
          <label>Appearance</label>
          <Field
            name="appearance"
            component={ CustomTextarea }
          />
            </div>
            <div className="form-group">
          <label>Behavior</label>
          <Field
            name="behaviour"
            component={ CustomTextarea }
          />
            </div>
            <div className="form-group">
                <label style={{"margin-right":'20px'}}>Thumbnail</label>
                <input type="file" onChange={this.onFileChanged('thumbnail')}/>
                <Field name="thumbnail" component="input" type="hidden"/>
            </div>
            <div className="form-group">
            <label style={{"margin-right":'20px'}}>Detail</label>
            <input type="file" onChange={this.onFileChanged('detail')}/>
          <Field name="detail" component="input" type="hidden"/>
            </div>
            <div className="form-group">
            <button type="submit" className="button">
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
    species: data.get('species').toJS()
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
