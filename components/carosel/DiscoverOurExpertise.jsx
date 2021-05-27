import React from "react";
import Slider from "react-slick";

export default function DiscoverOurExpertise() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
  };
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12"> */}
      <Slider {...settings}>
        <div className="expertise__image">
          <div class="service__card">
            <div class="step-parent image__position">
              <div class="step-child">
                <img src="/img/des1.png" className="services__img"  alt="Blue Pill Ltd"/>
                <div class="service__name"></div>
              </div>
            </div>
            <p class="service__title">Consulting</p>
            <p class="service__title-2">Service</p>
          </div>
        </div>
        <div className="expertise__image">
          <div class="service__card">
            <div class="step-parent image__position">
              <div class="step-child">
                <img src="/img/des2.png" className="services__img" />
                <div class="service__name"></div>
              </div>
            </div>
            <p class="service__title">Analysis &</p>
            <p class="service__title-2">Analytics</p>
          </div>
        </div>
        <div className="expertise__image">
          <div class="service__card">
            <div class="step-parent image__position">
              <div class="step-child">
                <img src="/img/des3.png" className="services__img" />
                <div class="service__name"></div>
              </div>
            </div>
            <p class="service__title">Enterprise</p>
            <p class="service__title-2">Application</p>
          </div>
        </div>
        <div className="expertise__image">
          <div class="service__card">
            <div class="step-parent image__position">
              <div class="step-child">
                <img src="/img/des4.png" className="services__img" />
                <div class="service__name"></div>
              </div>
            </div>
            <p class="service__title">Microsoft</p>
            <p class="service__title-2">Solution</p>
          </div>
        </div>
        <div className="expertise__image">
          <div class="service__card">
            <div class="step-parent image__position">
              <div class="step-child">
                <img src="/img/des1.png" className="services__img" />
                <div class="service__name"></div>
              </div>
            </div>
            <p class="service__title">Cognitive Business</p>
            <p class="service__title-2">Operation</p>
          </div>
        </div>
        <div className="expertise__image">
          <div class="service__card">
            <div class="step-parent image__position">
              <div class="step-child">
                <img src="/img/des2.png" className="services__img" />
                <div class="service__name"></div>
              </div>
            </div>
            <p class="service__title">Consulting</p>
            <p class="service__title-2">Service</p>
          </div>
        </div>
      </Slider>
      {/* </div>
        </div>
      </div> */}
    </>
  );
}
