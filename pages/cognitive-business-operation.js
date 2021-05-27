import React from "react";
import MainLayout from "../components/content/MainLayout";
import UnderConstruction from "../components/underconstruction/under-construction";
export default function CognitiveBusinessOperation() {
  return (
    <div>
      <MainLayout pageTitle="Cognitive Business Operation">
        <>
          <div className="cognitive__business__overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center text__heading">
                  <h3>
                    {" "}
                    Cognitive Business <br /> Operation
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 cog__list">
                <img src="/img/cog-list.png" alt="blue pill" />
              </div>
              <div className="col-lg-6 col-12 cog__text">
                <h4>
                  The Automated Natural <br /> processing journey
                </h4>
                <p>
                  The ability to successfully maintain momentum in any economy
                  requires processes that can sustain growth at scale. To
                  achieve such status, supporting technology and IT
                  administration must be evaluated in the context of present and
                  future states.{" "}
                </p>

                <p>
                  how business processes manage complex activities, while also
                  supporting continuous awareness of situations and real-time
                  decisions, requires a seamless partnership between humans and
                  the machine environments in which they operate.
                </p>
              </div>
            </div>
          </div>
          {/*  Second Section  */}
          <div className="second__section">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ss__text">
                    <p>
                      Cognitive technologies make automation possible across all
                      enterprise domains. The organizations that adopt these
                      technologies today will have a distinct competitive
                      advantage once the cognitive BPM revolution spreads.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 bg-white ">
                  <img src="/img/cog2.png" alt="Blue Pill" />
                </div>
              </div>
            </div>
          </div>

          {/* Third Section */}

          <div className="third__section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 third__left">
                  <div className="third__left__box">
                    <img src="/img/cog3.png" alt="blue Pill" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="third__right__box">
                    <h4>
                      Benefit from cognitive <br /> operation
                    </h4>
                    <p>
                      Businesses need to innovate while also maintaining their
                      existing systems. This hybrid model is ideal for process
                      and decision management. Companies can deliver excellent
                      service through efficiency, effectiveness and visibility.
                      What if you added the ability to sense new, unstructured
                      events in real time? What if you could correlate across
                      time, space and individual customer? Your engagement could
                      leap ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third Section  */}
          {/*  Fourth Section */}

          <div className="second__section mb-5">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-lg-6">
                  <img src="/img/cog4.png" alt="Blue Pill" />
                </div>
                <div className="col-lg-6 bg-white ">
                  <div className="ss__text">
                    <p>
                      Transition from traditional business processing to
                      cognitive business processing requires systematic
                      execution and adoption.
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
