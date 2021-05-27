import React from "react";
import MainLayout from "../components/content/MainLayout";
import ValuableCustomer from "../components/carosel/ValueableCustomer";
export default function About() {
  return (
    <div className="page-about">
      <MainLayout pageCss="about" pageTitle="About">
        <div>
          <div className="about__overlay">
            <div class="container">
              <div className="row">
                <div className="col-12">
                  <div className="about__text">
                    <h4>About us</h4>
                    <p>
                      At BLUE PILL LIMITED, we offer information Technology
                      Services, Business Process Outsourcing Solutions,
                      Consultancy Services and Customer Service & Support, along
                      with other mainstream Services. Our highly competent
                      industry expertise and well cultivated offshore liaison(s)
                      allow us to remain committed to Providing maximum value,
                      high quality and low-cost Business Processing and IT
                      services to our prospective clients Since our inception in
                      the year 2014 we provide a full range of Outsourcing
                      Services, IT Services and Solutions to businesses and
                      industry leaders, both large and small. We offer the best
                      solutions across every department in your organization.
                      Our Business Process Outsourcing portfolio includes
                      end-to-end solutions. We have it all in our portfolio,
                      served in a customer friendly and customized manner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hand__overlay">
            <div class="container">
              <div className="row">
                <div className="col-12">
                  <div className="hand__text">
                    <p>
                      Whatever a client's customer relations goals are:
                      quantifying sales leads, taking orders, responding to ad
                      inquiries, market research, or general information
                      requests, AKIJ Group has the people with the expertise to
                      professionally service those needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="offering">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-12 p-0">
                  <img src="/img/offering.png" alt="blue pill" className="offering" />
                </div>
                <div className="col-lg-6 col-12 offering__text">
                  <div className="text__offering">
                    <h4>Our Offerings</h4>
                    <p>
                      At BLUE PILL LIMITED, we offer information Technology
                      Services, Business Process Outsourcing Solutions,
                      Consultancy Services and Customer Service & Support, along
                      with other mainstream Services. Our highly competent
                      industry expertise and well cultivated offshore liaison(s)
                      allow us to remain committed to Providing maximum value,
                      high quality and low-cost Business Processing and IT
                      services to our prospective clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="akij__building">
            <div className="container-fluid">
              <div class="row">
                <div className="col-lg-6 p-0">
                  <div className="exec__text">
                    <div className="text__exec">
                      <h4 className="pb-3">
                        Executive Summary : Akij <br /> Group
                      </h4>
                      <p>
                        The legacy of AKIJ GROUP is over half a century old and
                        over the years Akij has established itself as the most
                        confident and revered industrial family in Bangladesh.
                      </p>

                      <ul>
                        {" "}
                        <li>
                          {" "}
                          <span className="list__exec">
                            One of the biggest conglomerates in Bangladesh.
                          </span>{" "}
                        </li>
                        <li>
                          {" "}
                          <span className="list__exec">
                            27 renowned local & multinational concerns with
                            diversified activities & different products.
                          </span>
                        </li>
                        <li>
                          <span className="list__exec">
                            {" "}
                            It has been progressing with tremendous pace in the
                            industrial area of Bangladesh.
                          </span>
                        </li>
                        <li>
                          <span className="list__exec">
                            {" "}
                            30000+ families are directly or indirectly engaged
                            with this concern.{" "}
                          </span>
                        </li>
                        <li>
                          <span className="list__exec">
                            Several non-profitable concerns are involved to
                            sustain development of the country & for social
                            welfare.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>

          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-12">
                <ValuableCustomer />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
