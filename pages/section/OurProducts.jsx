import React from "react";

const OurProduct = () => {
  return (
    <>
      <div class="container product__pb">
        <div class="row pb-4">
          <div className="col-lg-12">
            <h4 className="section__title text-center">Our Products</h4>
          </div>
        </div>

        <div class="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="product__card bos">
                    <img src="/img/iapp.svg" alt="Products" />
                    <h4>iAPP</h4>
                    <p>lorem ipsum dolar sit ammet. Que de venjo lorem ipsum</p>
                  </div>
                </div>
                <div class="flip-card-back">
                  <img src="/img/iapp.svg" alt="Products" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="product__card bos">
                    <img src="/img/ibos.svg" alt="Products" />
                    <h4>iBOS</h4>
                    <p>lorem ipsum dolar sit ammet. Que de venjo lorem ipsum</p>
                  </div>
                </div>
                <div class="flip-card-back">
                  <img src="/img/ibos.svg" alt="Products" />
                </div>
              </div>
            </div>

            {/* Flip Card */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="product__card bos">
                    <img
                      src="/img/iship.svg"
                      alt="Products"
                      className=""
                    />
                    <h4>iSHIP</h4>
                    <p>lorem ipsum dolar sit ammet. Que de venjo lorem ipsum</p>
                  </div>
                </div>
                <div class="flip-card-back">
                  <img
                    src="/img/iship.svg"
                    alt="Products"
                    className="marine"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="product__card bos">
                    <img src="/img/ilea.svg" alt="Products" />
                    <h4>iIEA</h4>
                    <p>lorem ipsum dolar sit ammet. Que de venjo lorem ipsum</p>
                  </div>
                </div>
                <div class="flip-card-back">
                  <img src="/img/ilea.svg" alt="Products" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
