// React Import
import React, { useState, useEffect, useRef } from "react";

// Layout Import
import MainLayout from "../components/content/MainLayout";
import ValueableCustomer from "../components/carosel/ValueableCustomer";
import DiscoverOurExpertise from "../components/carosel/DiscoverOurExpertise";
import MyModal from "../components/modal/mymodal";
import ScrollToTop from "../components/footer/ScrollToTop";

// Third Party App
import Aos from "aos";
import CountUp from "react-countup";
import MessengerCustomerChat from "react-messenger-customer-chat";

  // Main function starts 
export default function Home() {

  // Reference for From
  const selectedOption = useRef();
  const emailInputRef = useRef();

  // State for Selected value
  const [value, setValue] = useState('');
  const handleSelect = (e) => {
  const selectedValue = e.target.value;
  console.log("Value Selected", selectedValue);
  setValue(selectedValue);
  }

  // FROM Handler
  function submitFromHandler(event) {
    event.preventDefault();
    const enteredEmail =  emailInputRef.current.value;
    const selectQuery = value;
    const reqBody = { email: enteredEmail, selectedValue : selectQuery } 

    fetch('/api/user', {
      method : 'POST',
      body :  JSON.stringify(reqBody),
      headers : {
        'Content-Type' : 'application/json'
      }

    })
    .then ( (res)  => res.json())
    .then ( (data) => console.log(data));
  }

  const [show, setShow] = useState(false);
  useEffect(() => {
    checkAndValidateModal();
    setShow(true);
    Aos.init({ duration: 8000 });
  }, []);

  const checkAndValidateModal = async () => {
    const isVideoSeen = JSON.parse(
      (await localStorage.getItem("initialVideo")) || null
    );

    if (isVideoSeen === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const closeModalHandler = () => {
    localStorage.setItem("initialVideo", true);
    setShow(false);
  };
  return (
    <div>
      <MainLayout pageTitle="Home">
        <>
          {typeof window !== "undefiend" && (
            <MessengerCustomerChat
              pageId="101746488431617"
              appId="3057143234551819"
              htmlRef=""
            />
          )}
          {/* Home Page Starts */}
          <div className="home__main">
            <div className="home__caption">
              <h2>
                Turning encounters into <br /> innovation
              </h2>
              <p>
                Blue Pill Limited is a leading information technology,
                consulting and business process services company in Bangladesh.{" "}
              </p>
              <a href="https://www.bluepill.com.bd/consulting">Our services</a>
            </div>
          </div>


          {/* Modal React Bootstrap  Start */}
          <div className="modal__cont">
            <div>
              {show ? (
                <div onClick={closeModalHandler} className="back-drop"></div>
              ) : null}
              {/* <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button> */}
              <MyModal show={show} close={closeModalHandler} />
            </div>
          </div>

          {/* Driving Result  Starts*/}
          <div className="container home__pb driving__result">
            <div className="row text-center">
              <div className="col-lg-12">
                <h4 className="">Driving Results</h4>
                <p>
                  Blue Pill Limited is a leading information technology,
                  consulting and business <br /> process services company in
                  Bangladesh.
                </p>
              </div>
            </div>
            <div className="row drlist__pb justify-content-around">
              <div className="col-lg-3 col-6">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <div className="dr__main test__me">
                    <div className="dr__left">
                      <img src="/img/dr-1.svg" alt="Blue Pill Ltd." />
                    </div>
                    <div className="dr__right">
                      <h4>
                        <CountUp end={100} duration={3} />+
                      </h4>
                      <p>Successful Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <div className="dr__main ">
                    <div className="dr__left">
                      <img src="/img/dr-1.svg" alt="blue pill" />
                    </div>
                    <div className="dr__right happy__clients">
                      <h4>
                        <CountUp end={25} duration={3} />
                      </h4>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 test__me">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <div className="dr__main">
                    <div className="dr__left">
                      <img src="/img/dr-3.svg" alt="blue pill" />
                    </div>
                    <div className="dr__right">
                      <h4>
                        <CountUp end={100} duration={3} />+
                      </h4>
                      <p>Consulting Service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1600"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <div className="dr__main">
                    <div className="dr__left">
                      <img src="/img/dr-4.svg" alt="blue pill" />
                    </div>
                    <div className="dr__right">
                      <h4>
                        <CountUp end={100} duration={3} />+
                      </h4>
                      <p>Successful Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Driving Result Ends */}

          {/* Driving Results starts */}
          <div className="container driving__result__img">
            <div className="row  justify-content-center">
              <div className="col-lg-3">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="20"
                  data-aos-duration="1300"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <div className="driving__list__text">
                    <div className="driving__list__inner">
                      <h4 className="">Driving Results</h4>
                      <p className="dr__text__left">
                        Blue Pill Limited is a leading information technology,
                        consulting and business process services company in
                        Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-6">
                <div className="img__box">
                  <img src="img/d1r.png" alt="blue pill" />
                </div>
              </div>
              <div className="col-lg-3  col-6">
                <div className="img__box">
                  <img src="img/d3r.png" alt="blue pill" />
                </div>
              </div>
            </div>
            <div className="row driving__result__img justify-content-center">
              <div className="col-lg-3  col-6">
                <div className="img__box">
                  <img src="img/d4r.png" alt="blue pill" />
                </div>
              </div>
              <div className="col-lg-3  col-6">
                <div className="img__box">
                  <img src="img/d2r.png" alt="Blue Pill Ltd" />
                </div>
              </div>
              <div className="col-lg-3  driving__res__last">
                <div className="img__box">
                  <img src="img/d5r.png" alt="blue pill" />
                </div>
              </div>
            </div>
          </div>
          {/* Driving Results Ends */}


          {/*  Industries  */}
          <div className="industries">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 industries__heading">
                  <p className="discover__p">Discover Our</p>
                  <h4>Industries</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-6">
                  <img src="img/ind1.png" alt="blue pill" />
                  <p className="industries__footer">
                    Consumer Goods & <br /> Distribution
                  </p>
                </div>
                <div className="col-lg-3 col-6">
                  <img src="img/ind2.png" alt="blue pill" />
                  <p className="industries__footer">Manufacturing</p>
                </div>
                <div className="col-lg-3 col-6">
                  <img src="img/ind3.png" alt="blue pill" />
                  <p className="industries__footer">Retail</p>
                </div>
                <div className="col-lg-3 col-6 ind__last__col">
                  <img src="img/ind4.png" alt="blue pill" />
                  <p className="industries__footer">
                    Travel, Transportation & <br className="ind__res" />{" "}
                    Hospitality
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Industries  Ends */}
          {/* Discover Our Expertise Starts */}
          <div className="container des__pb">
            <div className="row">
              <div className="col-lg-12 expertise">
                <p>Discover Our</p>
                <h4>Expertise</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <DiscoverOurExpertise />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 expertise__view__more">
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
          {/* Discover Our Expertise Ends */}

          {/* Our Valueable Customer */}
          <div className="container news__area">
            <div className="row valuable__customer">
              <div className="col-lg-12 news__top text-center">
                <p>Our Valuable</p>
                <h4>Customers</h4>
              </div>
            </div>
            <ValueableCustomer />
          </div>
          {/* News  Ends */}

          {/* Lets Build Together Starts */}
          <div className="lets__build__together">
            <div className="container">
              <div className="row justify-content-lg-center">

                <div className="col-lg-7 col-12 ">
                  <div className="build__something__design">
                    <h4>
                      Let's build something <br /> together.
                    </h4>
                    <p>To drive extraordinary results in your business?</p>

                    <form onSubmit={submitFromHandler}>
                      <div class="row">
                        <div class="col-lg-4 col-12">
                          <label for="exampleInputEmail1">
                            I want to talk to your experts in:
                          </label>

                          <select class="custom-select" value="Travel" onChange={handleSelect}>
                            <option selected>Select an Industry</option>
                            <option value="Consumer Goods & Distribution">
                              Consumer Goods & Distribution
                            </option>
                            <option value="Travel & Tourism">Travel & Tourism</option>
                            <option value="Retail">Retail</option>
                          </select>

                        </div>


                        <div class="col-lg-4 col-12">
                          <label htmlfor="email">Your Email</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Email"
                            id="email"
                            ref={emailInputRef}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <input
                            type="submit"
                            class="form-control"
                            placeholder="Send Enquiry"
                            value="Send Enquiry"
                          />
                        </div>
                      </div>
                    </form>


                  </div>
                </div>
                {/* <div className="col-lg-4 col-12">
                  <div className="character__img">
                    <img
                      src="/img/unclesam.png"
                      alt="blue pill"
                      className="contact__img"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Lets Build Together Ends */}



          <ScrollToTop />
        </>
      </MainLayout>
    </div>
  );
}
