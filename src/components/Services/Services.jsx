import React from "react";

const Services = () => {
  return (
    <>
      <section className="section service gray-bg" id="services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Services</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  Comprehensive Healthcare Services at Dr. Emily Sanchez's
                  Clinic
                </p>
              </div>
            </div>
          </div>

          <div className="row" style={{justifyContent: 'center'}}>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont icofont-laboratory text-lg"></i>
                  <h4 className="mt-3 mb-3">Physical Examination</h4>
                </div>

                <div className="content">
                  <p className="mb-4">
                    Health assessments tailored to individual needs, including
                    vital signs monitoring
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont icofont-heart-beat-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">Care and Wellness</h4>
                </div>
                <div className="content">
                  <p className="mb-4">
                    {" "}
                    Preventive care plans to promote overall health and
                    well-being, including vaccinations
                  </p>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
