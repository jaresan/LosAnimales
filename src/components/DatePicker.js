import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const getDaysInMonth = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    const date = new Date();
    this.state = {
      date: {
        day: 'invalid',
        month: 'invalid',
        year: 'invalid'
      },
      daysInMonth: getDaysInMonth(date)
    }
  }

  onDateChange(part, value) {
    const date = this.state.date;
    date[part] = value;

    this.setState({ date });
    this.props.onChange(date);
  }

  getMonthSelect() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return (
      <div className={this.props.selectClassName}>
        <label htmlFor="month">Month</label>
        <select
          className="form-control form-control-lg"
          id="month"
          onChange={e => this.onDateChange('month', e.target.value)}
          value={this.state.date.month}
        >
          <option value='invalid' disabled>Choose...</option>
          { months.map((month, monthIndex) => <option key={monthIndex} value={monthIndex}>{month}</option>) }
        </select>
      </div>
    );
  }

  getDaySelect() {
    const { daysInMonth } = this.state;
    return (
      <div className={this.props.selectClassName}>
        <label htmlFor="day">Day</label>
        <select
          className="form-control form-control-lg"
          id="day"
          onChange={e => this.onDateChange('day', e.target.value)}
          value={this.state.date.day}
        >
          <option value='invalid' disabled>Choose...</option>
          {
            _.range(0, daysInMonth).map((_, dayNumber) => <option key={dayNumber} value={dayNumber}>{dayNumber + 1}</option>)
          }
        </select>
      </div>
    );
  }

  getYearSelect() {
    return (
      <div className={this.props.selectClassName}>
        <label htmlFor="year">Year</label>
        <select
          className="form-control form-control-lg"
          id="year"
          onChange={e => this.onDateChange('year', e.target.value)}
          value={this.state.date.year}
        >
          <option value='invalid' disabled>Choose...</option>
          {
            _.range(1901, new Date().getFullYear()).map(year =>
              <option key={year} value={year}>{year}</option>
            )
          }
        </select>
      </div>
    );
  }


  render() {
    return (
      <>
        {this.getDaySelect()}
        {this.getMonthSelect()}
        {this.getYearSelect()}
      </>
    )
  }

  static propTypes = {
    selectClassName: PropTypes.string
  };

  static defaultPropTypes = {
    selectClassName: 'col-md-4 col-sm-12 col-xs-12'
  };
}