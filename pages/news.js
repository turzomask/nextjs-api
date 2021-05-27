import React from "react";
import MainLayout from "../components/content/MainLayout";
import { Card, Button } from "react-bootstrap";
export default function News() {
  return (
    <div>
      <MainLayout>
        <>
          <div class="container news__padding">
            <div class="row pb-4">
              <div className="col-lg-12">
                <h4 className="section__title text-center pt-5">
                  News & Events
                </h4>
              </div>
            </div>
          </div>
          <div class="container mb-5 pb-5 news__card">
            <div class="row">
              <div className="col-lg-9 col-12">
                
                <div className="row mb-4 row__card">
                  <div className="col-lg-4 col-12">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-1.png" alt="blue pill" />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>

                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 col-12">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-2.png"  alt="blue pill"  />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 col-12">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-3.png"  alt="blue pill"  />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>

                {/* Card 2 */}

                {/* <div className="row mb-4">
                  <div className="col-lg-4 col-10">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-4.png" />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>

                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 col-10">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-1.png" />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 col-10">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-2.png" />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div> */}

                {/* <div className="row">
                  <div className="col-lg-4 col-10">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-3.png" />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>

                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 col-10">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-4.png" />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-4 col-10">
                    <Card style={{ width: "16rem" }}>
                      <Card.Img variant="top" src="img/ne-1.png" />
                      <Card.Body>
                        <p>10 DEC 2020</p>
                        <Card.Title>
                          We ensure you best the quality services
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div> */}

                {/* Card 2 */}
              </div>
              <div className="col-lg-3 col-12 p-0">
                <div className="events__box pl-2 pr-2">
                  <h6 className="section__title pt-3 pl-1">Events</h6>
                  <hr />
                  <div className="events__card mb-3">
                    <div className="single__events">
                      <div className="single__events__left">
                        <img src="img/ne-1.png" alt="blue pill" />
                      </div>
                      <div className="single__events__right">
                        <p>15th Jan</p>
                        <h6>iMARINE App Launch</h6>
                      </div>
                    </div>
                  </div>
                  <div className="events__card mb-3">
                    <div className="single__events">
                      <div className="single__events__left">
                        <img src="img/ne-2.png" alt="blue pill" />
                      </div>
                      <div className="single__events__right">
                        <p>15th Jan</p>
                        <h6>iMARINE App Launch</h6>
                      </div>
                    </div>
                  </div>
                  <div className="events__card pb-2">
                    <div className="single__events">
                      <div className="single__events__left">
                        <img src="img/ne-4.png" alt="blue pill" />
                      </div>
                      <div className="single__events__right">
                        <p>15th Jan</p>
                        <h6>iMARINE App Launch</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h6 className="read__more pb-1 text-center"> Read More</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      </MainLayout>
    </div>
  );
}
