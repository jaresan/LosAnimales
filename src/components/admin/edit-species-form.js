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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Select the species</label>
          <Field name="name" component="select" onChange={this.onSelectSpecies}>
            <option/>
            {
              this.props.species.map(({ name }) => <option key={name} value={name}>{name}</option>)
            }
          </Field>
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
