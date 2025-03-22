import React from "react";

const Features = ({ featuresData }) => {
  const { section1, section2, section3 } = featuresData;
  return (
    <>
      <section className="features" id="features">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont icofont-surgeon-alt"></i>
                  </div>
                  <span>{section1.text1}</span>
                  <h4 className="mb-3">{section1.title}</h4>
                  <p className="mb-4">{section1.text2}</p>
                  <a href="#contact-us" className="btn btn-main btn-round-full">
                    Make a appoinment
                  </a>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont icofont-ui-clock"></i>
                  </div>
                  <span>{section2.text1}</span>
                  <h4 className="mb-3">{section2.title}</h4>
                  <ul className="w-hours list-unstyled">
                    <li className="d-flex justify-content-between">
                      {section2.text2.title1}{" "}
                      <span>{section2.text2.text1}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      {section2.text2.title2}{" "}
                      <span>{section2.text2.text2}</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      {section2.text2.title3}{" "}
                      <span>{section2.text2.text3}</span>
                    </li>
                  </ul>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <i className="icofont icofont-support"></i>
                  </div>
                  <span>{section3.text1}</span>
                  <h4 className="mb-3">{section3.title}</h4>
                  <p>{section3.text2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
