import React from "react";

const Steps = () => {
  return (
    <>
      <div class="container pt-5 steps">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="step__card">
                <div className="card__head">
                  <div className="step-parent">
                    <div className="step-child">
                      <img src="/img/step-1.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="card__footer">
                  <h4>Step #1</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos
                  </p>
                  <p className="date"> 10 Dec 2020</p>
                </div>
              </div>
            </div>

            {/*  Step 1 */}

            

            <div className="step__card">
              <div className="card__head">
                <div className="step-parent">
                  <div className="step-child">
                    <img src="/img/step-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="card__footer">
                <h4>Step #2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos
                </p>
                <p className="date"> 10 Dec 2020</p>
              </div>
            </div>

          
         

            {/* Step 2 */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="step__card">
              <div className="card__head">
                <div className="step-parent">
                  <div className="step-child">
                    <img
                      src="/img/step-middle.jpg"
                      alt=""
                      className="middle-img"
                    />
                  </div>
                </div>
              </div>
              <div className="card__footer">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos
                </p>
                <p className="date"> 10 Dec 2020</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div
           
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="step__card">
                <div className="card__head">
                  <div className="step-parent">
                    <div className="step-child">
                      <img src="/img/step-3.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card__footer">
                  <h4>Step #3</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos
                  </p>
                  <p className="date"> 10 Dec 2020</p>
                </div>
              </div>
            </div>

            {/* Step */}

            <div className="step__card lastsingleStep">
              <div className="card__head">
                <div className="step-parent">
                  <div className="step-child">
                    <img src="/img/step-4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="card__footer ">
                <h4>Step #4</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos
                </p>
                <p className="date"> 10 Dec 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row stepViewButton">
          <div className="col-lg-12 text-center">
            <a href="#" className="view__more">
              View More     
            </a>
          </div>
        </div>


      </div>
    </>
  );
};

export default Steps;
