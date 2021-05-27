import React from "react";

const Services = () => {
  return (
    <>
      <div class="container homeService our__service__title">
        <div class="row pb-4">
          <div className="col-lg-12">
            <h4 className="section__title text-center">Our Services</h4>
          </div>
        </div>
          
        <div className="row services pb-2">

          <div className="col-lg-3 col-md-4 col-12">
          <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-1.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title">Consulting</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-12">

            <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-2.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title">Analysis & Analytics</p>
            </div>



          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-3.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title">Cloud Infrastructure</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-4.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title">Enterprise Application</p>
            </div>
          </div>
        {/* </div> */}

        {/* Service Row */}

        {/* <div className="row services pt-3"> */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-5.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title">Microsoft</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-6.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title">Cognitive Business Operation</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-7.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title t__7">
                Automation & Industrial Engineering
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <div className="service__card">
              <div className="step-parent image__position">
                <div className="step-child">
                  <img src="/img/ser-8.png" alt="" />
                  <div class="service__name"></div>
                </div>
              </div>

              <p class="service__title">Cloud app, Microservices, API</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
