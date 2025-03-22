import React from "react";

function About({ aboutData }) {
  return (
    <>
      <section className="section about" id="about" data-aos="fade-up">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="d-flex flex-column justify-content-center h-100">
                <h2 className="about-heading">{aboutData.title}</h2>
                <p className="about-sub-heading my-2">
                  {aboutData.description}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={aboutData.image}
                alt=""
                className="img-fluid about-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
