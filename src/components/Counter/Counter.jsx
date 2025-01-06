"use client";

import React, { useEffect } from "react";
import { counterUp } from "@/utils";

const Counter = () => {
  useEffect(() => {
    counterUp();
  }, []);
  return (
    <>
      <section className="cta-section " data-aos="fade-up" id="counter">
        <div className="container" data-aos="fade-up">
          <div className="cta position-relative">
            <div className="row counter">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont icofont-doctor"></i>
                  <span className="h3" data-countup-number={20}>
                    20
                  </span>
                  k<p>Happy People</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont icofont-flag"></i>
                  <span className="h3" data-countup-number={100}>
                    100
                  </span>
                  +<p>Surgery Comepleted</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont icofont-badge"></i>
                  <span className="h3" data-countup-number={50}>
                    50
                  </span>
                  +<p>Achievements</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont icofont-globe"></i>
                  <span className="h3" data-countup-number={30}>
                    30
                  </span>
                  <p>Worldwide Branch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
