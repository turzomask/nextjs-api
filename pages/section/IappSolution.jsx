import React from "react";

const IappSolution = () => {
  return (
    <>
      <div className="container iappSolutionSection">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src="/img/int.png" alt="" className="iAPP__business" />
          </div>
          <div className="col-lg-6 col-12 section__padding">
            <div className="des__iAPP">
              <h4>
                iApp - An Intelligent Business Solution App for your business.
              </h4>
              <p className="pt-4">
                It's main purpose to solve your business problems and give you a
                better solution.
              </p>
              <p>iApp's Features:</p>

              <div className="row">
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/if-1.svg" alt="" />
                    </div>
                    <div className="feature__right">
                      <p>People Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/if-2.svg" alt="" />
                    </div>
                    <div className="feature__right">
                      <p className="pt-3">Distribution Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/if-3.svg" alt="" />
                    </div>
                    <div className="feature__right">
                      <p>Sales Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="iAPP__feature">
                    <div className="feature__left">
                      <img src="/img/if-4.svg" alt="" />
                    </div>
                    <div className="feature__right ">
                      <p className="pt-3">Fleet & Voyage Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IappSolution;
