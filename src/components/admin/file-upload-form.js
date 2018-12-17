import React, { Component }  from 'react';
import { connect }  from 'react-redux';
import Action from '../../constants/actions';
import { reduxForm, Field, C } from 'redux-form';
import CustomInput from '../form/custom-input';
import CustomTextarea from '../form/custom-textarea';

export default class FileUploadForm extends Component {
  onFileChanged = (name) => event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.props.change(name, reader.result);
    };
    reader.readAsBinaryString(file);
  };
}

