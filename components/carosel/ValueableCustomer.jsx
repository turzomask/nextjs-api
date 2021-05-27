import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        initialSlide: 3
      }
    }
      ,
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      }
  
  ]

  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              <div className="customer__image">
                <img src="/img/c1.png" alt="Blue Pill Ltd." className="customer" />
              </div>
              <div className="customer__image">
                <img src="/img/c2.png" alt="Blue Pill Ltd." className="customer" />
              </div>
              <div className="customer__image">
                <img src="/img/c3.png" alt="Blue Pill Ltd." className="customer" />
              </div>
              <div className="customer__image">
                <img src="/img/c4.png" alt="Blue Pill Ltd." className="customer" />
              </div>
              <div className="customer__image">
                <img src="/img/c5.png" alt="Blue Pill Ltd." className="customer" />
              </div>
              <div className="customer__image">
                <img src="/img/c9.png" alt="Blue Pill Ltd." className="customer" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
