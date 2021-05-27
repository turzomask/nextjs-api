import React from "react";
import Aos from "aos";
import { useEffect } from "react";
const BlueSection = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <>
      <div className="blue__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="blue__left">
                  <h4 className="text-light">
                    Since our inception in the year 2014 we provide a full range
                    of Outsourcing Services, IT Services and Solutions to
                    businesses and industry leaders, both large and small.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="blue__right">
                  <p className="text-light">
                    We offer the best solutions across every department in your
                    organization. Our Business Process Outsourcing portfolio
                    includes end-to-end solutions. We have it all in our
                    portfolio, served in a customer friendly and customized
                    manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueSection;
