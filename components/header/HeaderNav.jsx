import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { useRouter } from "next/router";
const HeaderNav = (props) => {
  const router = useRouter();
  const [navbar, setNavbar] = useState("");
  const [menuColor, SetMenuColor] = useState("");
  const clickNavMenu = (eventKey) => {
    router.push(eventKey);
  };
  
  useEffect(() => {
    //  if (router.pathname == "/") {
    //   SetMenuColor("homeColor");
    // } else {
    //     SetMenuColor("menuColor");
    // }
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      //  if (router.pathname == "/") {
      if (scrolled > 30) {
        setNavbar("scroll");
        SetMenuColor("menuColor");
      }
      //  }
    });
  }, []);

  return (
    <>
      <div className="container-fluid navbar__main">
        <div className="row">
          <div className="col-12">


            <Navbar expand="lg" className={navbar} fixed="top">
            
            
                <Navbar.Brand href="/">
                  <img
                    src={
                      router.pathname === "/"
                        ? "/img/blue-logo.svg"
                        : "/img/blue-logo.svg"
                    }
                    alt="Blue Pill Logo"
                  />
  
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="responsive-navbar-nav"
                  className={menuColor,'about'}
                  // className={router.pathname == "/" =="rootColor" }
                  // className={router.pathname == "/" ? "menuColor" : "menuColor2" }
                >
                  <Nav className="ml-auto" onSelect={clickNavMenu}>
                    <Nav.Link eventKey="about" className="custom__css"> About</Nav.Link>
                    {/*  Industries */}
                    <NavDropdown
                      title="Industries"
                      id="basic-nav-dropdown"
                      className="nav__1 nav__color"
                    >
                      <div className="row">
                        <div className="col-lg-12 col-6">
                          <p className="nav__p">Industries</p>
                          <ul className="nav__list nav__color">
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="consumer">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Consumer Goods & Distribution{" "}
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="manufacturing">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Manufacturing
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="retail">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Retail
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="travel-and-tour">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Travel, Transportation & Hospitality{" "}
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </NavDropdown>
                    {/*  Services */}
                    <NavDropdown
                      title="Services"
                      id="basic-nav-dropdown"
                      className="nav__2 nav__color"
                    >
                      <div class="row">
                        <div className="col-lg-6 col-4">
                          <p className="nav__p">Services</p>

                          <ul className="nav__list">
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="consulting">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Consulting
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="analysis-and-analytics">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Analysis & Analytics
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="cloud-ins">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Cloud Infrastructure
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="enterprise-application">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Enterprise Application
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="microsoft">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Microsoft
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="cognitive-business-operation">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Cognitive Business Operation
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="automation">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Automation & Industrial Engineering
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-4">
                          <p className="nav__p"></p>
                          <ul className="nav__list">
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="cloud-app-api">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Cloud app, Microservices, API
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="cyber-security">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Cyber Security
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="manage-it-services">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Manage IT Service
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="contact-center-service">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Contact Center Services
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="document-management-service">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Document Management Services
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="digital-marketing">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Digital Marketing
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="reference-verification">
                                <i class="fas fa-dot-circle">
                                  {" "}
                                  <span className="text-dark i__pl">
                                    {" "}
                                    Reference Varification
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </NavDropdown>

                    {/*  Products and Platforms */}
                    <NavDropdown
                      title="Products & Platforms"
                      id="basic-nav-dropdown"
                      className="nav__3 nav__color"
                    >
                      <div class="row">
                        <div className="col-6">
                          <p className="nav__p">Products</p>

                          <ul className="nav__list">
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="iapp">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl"> iAPP</span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              <NavDropdown.Item eventKey="iship">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    iSHIP
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="ilea">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl"> iLEA</span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <p className="nav__p">Platforms</p>

                          <ul className="nav__list">
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="erp-on-cloud">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    ERP on Cloud{" "}
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                            <li>
                              {" "}
                              <NavDropdown.Item eventKey="bp-platforms">
                                <i class="fas fa-dot-circle">
                                  <span className="text-dark i__pl">
                                    {" "}
                                    BP Platforms
                                  </span>
                                </i>
                              </NavDropdown.Item>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </NavDropdown>

                    {/* News  Contacts */}

                    <Nav.Link eventKey="news" className="nav__color">
                      News
                    </Nav.Link>
                    <Nav.Link eventKey="contact" className="nav__color">
                      Contact
                    </Nav.Link>
                    <Nav.Link eventKey="/contact">
                      <span className="call__us">
                        {" "}
                        <i class="fas fa-phone-volume"></i> Call us
                      </span>
                    </Nav.Link>
                    <Nav.Link eventKey="#">
                      <span className="nav__search">
                        {" "}
                        <i class="fas fa-search"></i>
                      </span>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              {/* </div> */}
            </Navbar>


          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderNav;
