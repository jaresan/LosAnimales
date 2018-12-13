import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSpeciesForm from './add-species-form';

class AddSpecies extends Component {
  render() {
    return (
      <div>
        <AddSpeciesForm
          onSubmit={console.log}
        />
      </div>
    );
  }
}
export default connect()(AddSpecies);