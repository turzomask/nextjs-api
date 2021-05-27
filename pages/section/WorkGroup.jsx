import React from "react";

const WorkGroup = () => {
  return (
    <>
      <div class="container workGroupSection">
        <div class="row">
          <div className="col-lg-12">
            <h4 className="section__title text-center pb-5">
              Platform we work with
            </h4>
          </div>
        </div>

        <div className="row platform justify-content-center">
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="15"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3 singlePlatform ">
              <img src="/img/micro.svg" alt="" />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3  singlePlatform ">
              <img src="/img/cloud.svg" alt="" />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3 singlePlatform ">
              <img src="/img/cisco.svg" alt="" />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3  singlePlatform ">
              <img src="/img/aws.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="row platform justify-content-center">
          {/* Row One  */}

          <div
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3  singlePlatform ">
              <img src="/img/vmw.svg" alt="" />
            </div>
          </div>

          <div
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3  singlePlatform ">
              <img src="/img/react.svg" alt="" />
            </div>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3  singlePlatform ">
              <img src="/img/palo.svg" alt="" />
            </div>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="col-lg-3  singlePlatform ">
              <img src="/img/kub.svg" alt="" />
            </div>
          </div>

          {/* Row Two */}
        </div>
      </div>
    </>
  );
};

export default WorkGroup;
