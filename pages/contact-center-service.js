import React from "react";
import MainLayout from "../components/content/MainLayout";
export default function ContactCenterService() {
  return (
    <div>
      <MainLayout pageTitle="Contact Center Service">
        <>
          <div className="contact__center__overlay">
          
              <h4 className="text-center">Contact Center Services</h4>
         
          </div>

          <div class="container">
            <div class="row mb-5 pb-5 responsive__padding">
              <div className="col-lg-6 col-12 pt-5">
                <div className="contact__center__middle">
                  <div className="middle__content">
                    <h2>Call Center</h2>
                    <p>
                      Acquiring a call center outsourcing service is a common
                      business option; the business industry has acknowledged
                      that companies who outsource gain much in terms of reduced
                      costs and a larger workforce. Some reasons why businesses
                      outsource include achieving flexibility, capacity to run
                      their company’s operations, including entering into a new
                      market or increasing reach.{" "}
                    </p>

                    <p className="pt-3">
                      Other reasons are to acquire additional skills and extend
                      business multilingual proficiency. For all that, making
                      informed business decisions regarding call center is
                      essential to fully understand the concept, processes and
                      risks implicated with it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 contact__center__right pt-5">
                <img src="/img/contact-center.svg" alt="blue pill" />
              </div>
            </div>

            <div class="row contact__center  mb-5 pb-5">
              <div className="col-lg-6 col-12">
                <img src="/img/call-center.jpg" alt="blue pill" />
              </div>
              <div className="col-lg-6 col-12 contact__center__middle">
                <div className="">
                  <div className="middle__content  middle__content__responsive">
                    <p>
                      The alternative is to handle multiple customer
                      communication channels–calls, emails, web chats, and text
                      messages–in-house. But establishing a multi-channel
                      contact center is an expensive proposition. It requires a
                      major investment in facilities, equipment and
                      technology–not to mention the cost, time and energy needed
                      for staff training and ongoing operations.
                    </p>
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
