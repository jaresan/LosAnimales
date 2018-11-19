import React, { Component } from 'react';

export class Carousel extends Component {
  render() {
    return (
      <div className="row">
        <div id="carouselExampleSlidesOnly"
             className="animal-carousel carousel slide col-lg-12 col-md-12 col-sm-12 col-12"
             data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="img/zoo/zoo1.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/zoo/zoo2.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/zoo/zoo3.jpg" alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/zoo/zoo4.jpg" alt="Fourth slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/zoo/zoo5.jpg" alt="Fifth slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}