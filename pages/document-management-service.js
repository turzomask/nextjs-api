import React from "react";
import MainLayout from "../components/content/MainLayout";
export default function DocumnetManagementService() {
  return (
    <div>
      <MainLayout pageTitle="Documnet Management Service">
        <>
          <div className="contact__center__overlay">
            <div className="contact__center__overlay__caption">
              <h4 className="text-center">
                Document Management
                <br />
                Services{" "}
              </h4>
            </div>
          </div>

          <div class="container it__manage  doc__flag">
            <div className="row pt-5">
              <div className="col-lg-6 col-12">
                <img className="card-img-top" src="img/ds1.jpg" alt="profile Blue Pill Ltd." />
              </div>

              <div className="col-lg-6 col-12">
                <div className="it__service">
                  <div className="service__details-2">
                    <h4>
                      Document <br /> Management​
                    </h4>

                    <p>
                      Document management plays a fundamental role in the
                      control of the information in your business. The
                      effectiveness of your document management system can
                      influence business processes and your overall bottom line.{" "}
                      <br /> ​In the modern business climate, the organization
                      of growing volumes of information and commitment to manage
                      it can be daunting. From reducing risk, improving employee
                      efficiencies to compliant protocols, outsourcing document
                      management to a professional record management provider
                      can address several business priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="document__row__custom">
            <div className="container">
              <div className="row pt-5 ">
                <div className="col-lg-6 col-12">
                  <img
                    className="card-img-top"
                    src="img/ds3.svg"
                    alt="profile Blue Pill Ltd."
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <div className="it__service">
                    <div className="service__details-2">
                      <h4>Outsourcing with a document management provider</h4>

                      <p>
                        Document management plays a fundamental role in the
                        control of the information in your business. The
                        effectiveness of your document management system can
                        influence business processes and your overall bottom
                        line. <br /> ​In the modern business climate, the
                        organization of growing volumes of information and
                        commitment to manage it can be daunting. From reducing
                        risk, improving employee efficiencies to compliant
                        protocols, outsourcing document management to a
                        professional record management provider can address
                        several business priorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container doc__flag">
            <div className="row pt-5">
              <div className="col-lg-6 col-12">
                <div className="it__service">
                  <div className="service__details-2">
                    <h4>Where you Win​</h4>

                    <p>
                      Document management plays a fundamental role in the
                      control of the information in your business. The
                      effectiveness of your document management system can
                      influence business processes and your overall bottom line.{" "}
                      <br /> ​In the modern business climate, the organization
                      of growing volumes of information and commitment to manage
                      it can be daunting. From reducing risk, improving employee
                      efficiencies to compliant protocols, outsourcing document
                      management to a professional record management provider
                      can address several business priorities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <img className="card-img-top" src="img/ds2.png" alt="profile Blue Pill Ltd." />
              </div>
            </div>
          </div>

          <div class="container star__img">
            <div class="row">
              <div className="col">
                <img src="/img/ds4.svg" alt="Blue Pill Ltd." />
              </div>
            </div>{" "}
          </div>
        </>
      </MainLayout>
    </div>
  );
}
