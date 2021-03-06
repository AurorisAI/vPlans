import React from "react";
import "./layout.css";
import bookImg from "../images/slikaKnjige.png";

const Subscribe = () => (
  <div className="container-fluid pozadina"
       data-sal="slide-down"
       data-sal-delay="300"
       data-sal-easing="ease">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <br></br>
          <h3 className="subscribe">
            Subscribe to get our digital transformation<br></br>E-book.<br></br>
            <br></br>
          </h3>
          <div className="subscribeText">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis quam <br></br>fermentum, rutrum sem quis, vulputate nisl. Aenean nec est enim. Donec<br></br> velit quam, sodales in nulla facili
            </p>
          </div>

          <div className="container mt-5">
            <div className="d-flex justify-content-center row">
              <div className="col-md-9">
                <div className="">
                  <div className="d-flex mt-3 mb-3">
                    <div className="input-group mb-5">
                      <div className="input-group-prepend"></div>
                      <input
                        className="form-control email-input"
                        type="text"
                        placeholder="Enter your email to download"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary d-flex align-items-center"
                          className="email"
                          type="button" style={{border:"1px solid transparent",borderRadius:"5px"}}>
                          Get it FREE<i class="fa fa-long-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <br></br>
          <div>
            <img src={bookImg} className="slikaKnjige" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Subscribe;
