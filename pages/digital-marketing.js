import React from "react";
import MainLayout from "../components/content/MainLayout";
export default function DigitalMarketing() {
  return (
    <div>
      <MainLayout pageTitle="Digital Marketing">
        <>
          <div className="contact__center__overlay">
            <div className="contact__center__overlay__caption">
              <h4 className="text-center">Digital Marketing</h4>
            </div>
          </div>
          <div className="digital__marketing">
            <div class="container">
              <div class="row pb-4">
                <div className="col-lg-12">
                  <h4 className="section__title text-center pt-5 pb-5">
                    DIGITAL MARKETING PROCESS
                  </h4>
                </div>
              </div>
              <div class="row text-center pb-5">
                <div className="col-lg-4 col-12">
                  <img src="/img/dm1.svg" alt="blue pill" />
                  <p>
                    Develop A Strategy For <br /> Succeeding Online
                  </p>
                </div>
                <div className="col-lg-4 col-12">
                  <img src="/img/dm2.svg" alt="blue pill" />
                  <p>
                    Drive High Quality TraffiC For <br /> Your Business
                  </p>
                </div>
                <div className="col-lg-4 col-12">
                  <img src="/img/dm3.svg" alt="blue pill" />
                  <p>
                    Increase Conversions & <br /> Customer Retention
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="our__services">
            <div class="container">
              <div class="row pb-4">
                <div className="col-lg-12">
                  <h4 className="section__title text-center pt-5 pb-5">
                    Our Services
                  </h4>
                </div>
              </div>
              <div class="row mb-5 pb-5">
                <div className="col-lg-4">
                  <div className="service__single">
                    <img src="/img/seo.png" alt=" blue pill Service" />
                    <h4 className="text-center">SEO SERVICE</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__single">
                    <img src="/img/se-2.jpg" alt="blue pill Service" />
                    <h4 className="text-center">PAID SOCIAL SERVICE</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__single">
                    <img src="/img/loc.png" alt="blue pill Service" />
                    <h4 className="text-center">LOCAL SEO SERVICE</h4>
                  </div>
                </div>
              </div>
              {/* Service second */}
              <div class="row mb-5 pb-5">
                <div className="col-lg-4">
                  <div className="service__single">
                    <img src="/img/ecom.png" alt=" blue pill Service" />
                    <h4 className="text-center"> E-COMMERCE SEO SERVICE</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__single">
                    <img
                      src="/img/sm.png"
                      alt="Service blue pill"
                      className="social__media"
                    />
                    <h4 className="text-center">SOCIAL MEDIA MARKETING</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__single">
                    <img
                      src="/img/cs.png"
                      alt=" blue pill Service"
                      className="social__media"
                    />
                    <h4 className="text-center">CONTENT STRATEGY</h4>
                  </div>
                </div>
              </div>
              {/* Service third */}
              <div class="row pb-5 mb-2">
                <div className="col-lg-4">
                  <div className="service__single">
                    <img src="/img/dh.png" alt="Service blue pill" />
                    <h4 className="text-center">DOMAIN AND HOSTING</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__single">
                    <img src="/img/wb.png" alt="Service blue pill" />
                    <h4 className="text-center">WEB DEVELOPMENT</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service__single">
                    <img src="/img/ad1.png" alt="Service blue pill" />
                    <h4 className="text-center">APP DEVELOPMENT</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </MainLayout>
    </div>
  );
}
