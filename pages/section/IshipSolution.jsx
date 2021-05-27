import React from "react";

const IshipSolution = () => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="des__iAPP iSHIP">
              <h4>
                iShip - An Intelligent Business Solution App for your business.
              </h4>
              <h4 className="pt-4 ship__custom__h4">
                It's main purpose to solve your business problems and give you a
                better solution.
              </h4>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet{" "}
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/voyage.svg" alt="" />
                    </div>
                    <div className="feature__right">
                      <p>Chartering Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/voyage.svg" alt="" />
                    </div>
                    <div className="feature__right">
                      <p className="pt-4">Voyage Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/voyage.svg" alt="" />
                    </div>
                    <div className="feature__right">
                      <p>Tariffs Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/voyage.svg" alt="" />
                    </div>
                    <div className="feature__right ">
                      <p className="pt-4">Certificate Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 ">
            <img
              src="/img/is-mock.png"
              alt=""
              className="iAPP__business iSHIP__business"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IshipSolution;
