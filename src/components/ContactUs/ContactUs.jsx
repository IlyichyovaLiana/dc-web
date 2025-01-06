import React from "react";

const Appointment = () => {
  return (
    <>
      <section
        className="section appointment"
        id="contact-us"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="appoinment-content">
                <img
                  src="/images/about/profile-1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="emergency">
                  <h2 className="text-lg">
                    <i className="icofont icofont-phone-circle text-lg"></i>
                    +2-990-770-55
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 ">
              <div className="appoinment-wrap mt-5 mt-lg-0">
                <h2 className="mb-2 title-color">Book appoinment</h2>
                <p className="mb-4">
                  The process of booking an appointment is simple. Just fill out
                  the form below, and we'll get back to you shortly.
                </p>
                <form
                  id="#"
                  className="appoinment-form"
                  method="post"
                  action="#"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <a className="btn btn-main btn-round-full" href="#contact-us">
                    Make Appoinment{" "}
                    <i className="icofont icofont-simple-right ml-2  "></i>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
