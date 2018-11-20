import React, {Component} from 'react';
import DatePicker from '../date-picker';
import moment from 'moment';
import _ from 'lodash';

import '../../styles/bootstrap.css';
import '../../styles/style.css';
import {AnimalNavBar} from "./animal-nav-bar";

const isBirthdayValid = birthday => moment([birthday.year, birthday.month, birthday.day]).isValid();

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class AnimalDetail extends Component {
  state = {
    formData: {
      birthday: {},
      first: '',
      last: '',
      email: ''
    },
    error: {
      email: null,
      first: null,
      last: null
    }
  };

  handleSubmit = e => {
    const {
      formData: {
        birthday,
        first,
        last,
        email
      }
    } = this.state;

    if (!first || !last || !email || !isBirthdayValid(birthday)) {
      alert('All fields are required. Please fill in the form correctly before submitting.');
    } else {
      alert('Thank you for becoming an ambassador!')
    }

    e.preventDefault();
    e.stopPropagation();
  };

  setFormData(field, value) {
    const { formData } = this.state;
    formData[field] = value;

    this.setState({
      formData
    });
  }

  onDateSelect = date => {
    this.setFormData('birthday', {
      ...date
    })
  };

  validateEmail() {
    if (!emailRegex.test(this.state.formData.email)) {
      return this.setState({ error: { email: 'Email must be in a valid format' } })
    }
    return this.setState({ error: { email: null } })
  }

  validateLength(field) {
    if (this.state.formData[field].length > 20) {
      return this.setState({ error: { [field]: 'Cannot be longer than 20 characters' } })
    }
    return this.setState({ error: { [field]: null } })
  }

  renderAnimalInfo = () => {
    const keys = ['classification', 'diet', 'appearance', 'behaviour'];
    return keys.map(key => (
      <div  key={key} className="col-md-3 col-sm-3 col-xs-6" style={{color: '#6c757d'}}>
        <div className="info-table">
          <h1>{_.capitalize(key)}</h1>
          {
            this.props.data[key].map(c => <li key={c}>{c}</li>)
          }
        </div>
      </div>
    ));
  };

  render() {
    const { data, imgPath } = this.props;

    return (
      <div>
        <AnimalNavBar/>
        <div className="row">
            <div className="container-fluid animal-detail-container">
                <img alt="Animal picture" src={imgPath}/>
            </div>
          <section id="section1" className="container-fluid section">

            <h1>Facts</h1>
            <br/>
            {
              data.description.split("\n").map((paragraph, index) => <p key={index} style={{textAlign: 'justify'}}>{paragraph}</p>)
            }
            <div className="row" style={{marginRight: 100, marginLeft: 100}}>
              {this.renderAnimalInfo()}
            </div>
          </section>
        </div>
        <div className="row">
          <section id="section2" className="container-fluid section">
            <h1>Places</h1>

            <div className="img-container">
              <img src="/img/maps/india.JPG" alt="India"/>
              <div className="content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos.</p>
              </div>
            </div>

          </section>
        </div>
        <div className="row">
          <section id="section3" className="container-fluid section">
            <h1>Support</h1>
            <h2>Become an ambassador for this animal!</h2>

            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputFirstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFirstName"
                    aria-describedby="firstNameHelp"
                    placeholder="Enter first name"
                    onChange={e => {
                      this.setFormData('first', e.target.value);
                      this.validateLength('first');
                    }}
                  />
                  <small className="form-text text-danger">{this.state.error.first}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputLastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputLastName"
                    aria-describedby="lastNameHelp"
                    placeholder="Enter last name"
                    onChange={e => {
                      this.setFormData('last', e.target.value);
                      this.validateLength('last');
                    }}
                  />
                  <small className="form-text text-danger">{this.state.error.last}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                    onChange={e => {
                      this.setFormData('email', e.target.value);
                      this.validateEmail();
                    }}
                  />
                  <small className="form-text text-danger">{this.state.error.email}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="month">Date of birth</label>
                  <div className="row">
                    <DatePicker
                      selectClassName='col-md-4 col-sm-12 col-xs-12'
                      onChange={this.onDateSelect}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}