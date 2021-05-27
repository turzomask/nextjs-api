import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeSlider() {
  return (
    <div className="carousel__container">
      <Carousel>
        <Carousel.Item>
          <div class="slide__one">
            <div class="container">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="carousel__img img__left ">
                    <img src="/img/" alt="Blue Pill Ltd." />
                  </div>
                  <div className="carousel__text">
                    <p>
                      Fly Ash free Akij Cement gives assurance of more than 100
                      years of durability to the building structure. Instead of
                      fly ash, it composed of blast furnace iron slag, which
                      provides durable cement to build strong structure that
                      stay build for over a hundred years.{" "}
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="carousel__img">
                    <img src="/img/" alt="Blue Pill Ltd." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Carousel.Caption> </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container carousel__height">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="carousel__img">
                  <img src="/img/" alt="Blue Pill Ltd." />
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="carousel__text slide__two__pd">
                  <h2>15% More Strength in 91 Days</h2>
                  <p>
                    Fly Ash free Akij Cement gives assurance of more than 100
                    years of durability to the building structure. Instead of
                    fly ash, it composed of blast furnace iron slag, which
                    provides durable cement to build strong structure that stay
                    build for over a hundred years.{" "}
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <Carousel.Caption> </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container carousel__height">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="carousel__text slide__two__pd">
                  <h2>
                    Every Bag of Akij Cement Makes the World a Greener Place
                  </h2>
                  <p>
                    " By using state-of-the-art technology, we emit 41% less
                    Carbon Dioxide (CO2) and save 20,000 megawatts electricity."
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="car__third__img">
                  <img src="/img/" alt="Blue Pill Ltd." />
                </div>
              </div>
            </div>
          </div>
          <Carousel.Caption> </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeSlider;
