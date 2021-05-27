import React from "react";
import MainLayout from "../components/content/MainLayout";
export default function Contact() {
  return (
    <div className="contact__nav">
      <MainLayout pageTitle="Contact">
        <>
          <div class="container contact__pb">
            <div className="row pl-5">
              <div className="col-lg-4 col-12">
                <div className="contact__box__single">
                  <img src="img/c1.svg" alt="blue pill" />
                  <h6>Chat with Sales</h6>
                  <p>Chat with our Sales Team to get the latest offers</p>
                </div>
                <div className="contact__box__link">
                  <p>
                    <i className="fas fa-envelope">
                      {" "}
                      <span className="font__left">
                        <p>info@bluepill.com.bd </p>
                      </span>{" "}
                    </i>
                  </p>
                  <p>
                    <i class="fab fa-facebook-messenger">
                      {" "}
                      <span className="font__left">
                      <p>@bluepillltd</p>
                      </span>{" "}
                    </i>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="contact__box__single">
                  <img src="img/c2.svg" alt="blue pill" />
                  <h6>Call us</h6>
                  <p>
                    Available Sunday-Thrusday <br /> 9 AM to 5 PM
                  </p>
                </div>

                <div className="contact__box__link">
                  <p>
                    <i class="fas fa-phone-volume">
                      {" "}
                      <span className="font__left">
                       
                         <p>  Hot Line:16609</p>
                      </span>{" "}
                    </i>
                  </p>
                  <p>
                    <i class="fas fa-phone-volume  ">
                      {" "}
                      <span className="toll__free">
                        {" "}
                        <p> Toll Free: 08000016609{" "}</p>
                      </span>{" "}
                    </i>
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt">
                      {" "}
                      <span>
                        {" "}
                        <p className="address__headoffice">
                          {" "}
                          Akij House, 198 Bir Uttam, Mir Shawkat Sarak, Gulshan
                          Link Road, Tejgaon, Dhaka-1208{" "}
                        </p>
                      </span>{" "}
                    </i>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="contact__box__single">
                  <img src="img/c3.svg" alt="blue pill" />
                  <h6>Connect with peers and experts</h6>
                  <p>Get our experts help to grow your business</p>
                </div>
                <div className="contact__box__link">
                  <p>
                    <i class="fab fa-facebook-messenger">
                      {" "}
                      <span className="font__left">
                        <p>Request a Trail</p>   
                      </span>{" "}
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div class="row map__img">
              <div className="col-12">
                <img src="/img/map.png" alt="blue pill" />
              </div>
            </div>
          </div>
        </>
      </MainLayout>
    </div>
  );
}
