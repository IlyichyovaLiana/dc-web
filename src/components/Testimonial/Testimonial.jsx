import React from "react";

function Testimonial({ testimonialsData }) {
  const items = testimonialsData.items || [];

  return (
    <>
      <section
        className="section testimonial-2 gray-bg"
        data-aos="fade-up"
        id="testimonial"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>{testimonialsData.title}</h2>
                <div className="divider mx-auto my-4"></div>
                <p>{testimonialsData.subTitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 testimonial-wrap-2">
              {items.map((item, index) => (
                <div className="testimonial-block style-2  gray-bg" key={index}>
                  <i className="icofont icofont-quote-right"></i>

                  <div className="testimonial-thumb">
                    <img src={item.image} alt="" className="img-fluid" />
                  </div>

                  <div className="client-info ">
                    <h4>{item.title}</h4>
                    <span>{item.name}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
