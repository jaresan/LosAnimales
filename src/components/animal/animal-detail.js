import React, { Component } from 'react';
import { AnimalNavBar } from "./animal-nav-bar";

import '../../styles/bootstrap.css';
import '../../styles/style.css';

export class AnimalDetail extends Component {
  render() {
    return (
      <div>
        <AnimalNavBar/>
        <div className="row">
          <section id="section1" className="container-fluid section">
            <h1>Facts</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum pellentesque ornare. Donec
              neque
              augue, aliquet sit amet eros et, suscipit posuere diam. Donec efficitur efficitur tortor eu pharetra.
              Maecenas sit amet urna a enim sollicitudin sodales. Nam id porttitor dui. Donec cursus augue quam, eu
              dictum
              purus eleifend ac. </p>
            <div className="row" style={{marginRight: 100, marginLeft: 100}}>
              <div className="col-md-3 col-sm-3 col-xs-6" style={{color: '#6c757d'}}>
                <div className="info-table">
                  <h1>Heading</h1>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Consectetur adipiscing elit.</li>
                  <li>Proin vestibulum pellentesque ornare.</li>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="info-table">
                  <h1>Heading</h1>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Consectetur adipiscing elit.</li>
                  <li>Proin vestibulum pellentesque ornare.</li>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="info-table">
                  <h1>Heading</h1>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Consectetur adipiscing elit.</li>
                  <li>Proin vestibulum pellentesque ornare.</li>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <div className="info-table">
                  <h1>Heading</h1>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Consectetur adipiscing elit.</li>
                  <li>Proin vestibulum pellentesque ornare.</li>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <section id="section2" className="container-fluid section">
            <h1>Places</h1>

            <div className="img-container">
              <img src="/img/maps/india.JPG" alt="India" style={{width :'100%'}} />
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
            <h2>Become an ambassador for animal!</h2>

            <div className="form-container">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputFirstName">First name</label>
                  <input type="text" className="form-control" id="exampleInputFirstName" aria-describedby="firstNameHelp"
                         placeholder="Enter first name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputLastName">Last name</label>
                  <input type="text" className="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp"
                         placeholder="Enter last name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Lorem ipsum dolor sit amet.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="month">Date of birth</label>

                  <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                      <label htmlFor="month">Month</label>
                      <select defaultValue={null} className="form-control form-control-lg" id="month">
                        <option value={null}>Choose...</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                      </select>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                      <label htmlFor="day">Day</label>
                      <select className="form-control form-control-lg" id="day">
                        <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                      </select>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                      <label htmlFor="year">Year</label>
                      <select className="form-control form-control-lg" id="year">
                        <option>Choose...</option>
                        <option>2000</option>
                        <option>1999</option>
                        <option>1998</option>
                        <option>1997</option>
                        <option>1996</option>
                        <option>1995</option>
                        <option>1994</option>
                        <option>1993</option>
                        <option>1992</option>
                        <option>1991</option>
                        <option>1990</option>
                        <option>1989</option>
                        <option>1988</option>
                        <option>1987</option>
                        <option>1986</option>
                        <option>1985</option>
                        <option>1984</option>
                        <option>1983</option>
                        <option>1982</option>
                        <option>1981</option>
                        <option>1980</option>
                      </select>
                    </div>
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