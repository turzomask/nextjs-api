import React from "react";

const FooterMain = (props) => {
  return (
    <>
      <div
        className={
          props.title === "Home" ? "footer__bg__black" : "footer__bg__white"
        }
        // className="footer__bg"
      >
        <div class="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6 footer__services ">
              <h6> INDUSTRIES </h6>
              <hr />
              <p>Consumer Goods & Distribution Retail</p>
              <p>Manufacturing</p>
              <p> Travel Transportation & Hospitality</p>
            </div>

            <div className="col-lg-3 col-md-4 col-6 footer__services">
              <h6> SERVICES </h6>
              <hr />
              <p> Consulting </p>
              <p> Analysis & Analytics</p>
              <p> Cloud Infrastructure </p>
              <p> Enterprise Application</p>
              <p> Microsoft </p>
              <p> Cognitive Business Operation</p>
              <p> Automation & Industrial Engineering</p>
              <p> Cloud app, Microservices, API</p>
              <p> Cyber Security</p>
              <p> Manage IT Services </p>
              <p> Contact Center Services</p>
              <p> Document Management Services</p>
              <p> Digital Marketing</p>
              <p> Reference Verification</p>
            </div>

            <div className="col-lg-3 col-md-4 col-6 footer__services">
              <h6> PRODUCT & PLATFORM </h6>
              <hr />

              <div className="row">
                <div className="col-lg-4">
                  {" "}
                  <p className="product__platform">PRODUCT</p>
                  <p>iAPP</p>
                  <p>iSHIP</p>
                  <p>iIEA</p>
                </div>
                <div className="col-lg-6">
                  <p className="product__platform">PLATFORM</p>

                  <p>ERP on Cloud</p>
                  <p>BP Platforms</p>
                </div>
              </div>

              <div className="row ohters footer__services">
                <div className="col-lg-12">
                  <h6> OTHERS </h6>
                  <hr />
                </div>

                <div className="col-lg-4">
                  {" "}
                  <p className="">Brochure</p>
                  {/* <p>
                    iAPP <br /> iSHIP <br /> iIEA
                  </p> */}
                </div>
                <div className="col-lg-6">
                  <p className="">Career</p>

                  {/* <p>
                    ERP on Cloud <br /> BP Platforms
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              {/* <img
                src="img/blue-logo.svg"
                alt=" Blue Pill Logo"
                className="footer__logo"
              /> */}

              <img src="/img/blue-logo.svg" alt="Blue Pill Logo" />

              <div className="bluepill__contact">
                <div className="row">
                  <div className="col-lg-1">
                    {" "}
                    <span className="bluepill__icon">
                      {" "}
                      <i class="fas fa-phone-volume"></i>
                    </span>{" "}
                  </div>
                  <div className="col-lg-10">
                    <p> +880 96131 16609 (Overseas)</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    {" "}
                    <span className="bluepill__icon">
                      <i class="far fa-envelope"></i>
                    </span>{" "}
                  </div>
                  <div className="col-lg-10">
                    <p className="pl-1"> info@bluepill.com.bd</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    {" "}
                    <span className="bluepill__icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>{" "}
                  </div>
                  <div className="col-lg-10">
                    <p>
                      {" "}
                      Akij House, 198 Bir Uttam Mir{" "}
                      <span className="shawkat">
                        Shawkat Sarak, Dhaka 1208
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="social__link">
                <a href="https://www.facebook.com/bluepillltd/" target="_blank">
                  {" "}
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/bluepilllimited" target="_blank">
                  {" "}
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/bluepillltd" target="_blank">
                  {" "}
                  <i class="fab fa-linkedin-in"></i>{" "}
                </a>
                <a href="https://www.instagram.com/bluepillltd/" target="_blank">
                  {" "}
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row sortFooter pt-2">
            <div className="col-lg-6 col-6">
              <p className="text-gray">
                Copyright ©2021 Blue Pill Limited. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-6">
              <p className="text-right text-gray ">
                <span className="hover__rotate"> Terms & Condition </span>{" "}
                <span className="pipe__footer">|</span>{" "}
                <span className="hover__rotate">Terms of Use</span>
                <span className="pipe__footer">|</span>
                <span className="hover__rotate">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMain;
