"use client";

import React, { useEffect } from "react";
import { counterUp } from "@/utils";


const Counter = ({counterData}) => {
  
  useEffect(() => {
    counterUp();
  }, []);

  return (
    <>
      <section className="cta-section " data-aos="fade-up" id="counter">
        <div className="container" data-aos="fade-up">
          <div className="cta position-relative">
            <div className="row counter">
              {counterData.items.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                  <div className="counter-stat">
                    <i className="icofont icofont-doctor"></i>
                    <span className="h3" data-countup-number={item.number}>
                      {item.number}
                    </span>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
