function Services({ servicesData }) {
  const items = servicesData.items || [];

  return (
    <>
      <section className="section service gray-bg" id="services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>{servicesData.title}</h2>
                <div className="divider mx-auto my-4"></div>
                <p>{servicesData.subTitle}</p>
              </div>
            </div>
          </div>

          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont icofont-laboratory text-lg"></i>
                  <h4 className="mt-3 mb-3">{items[0].title1}</h4>
                </div>

                <div className="content">
                  <p className="mb-4">{items[0].description1}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont icofont-heart-beat-alt text-lg"></i>
                  <h4 className="mt-3 mb-3">{items[1].title2}</h4>
                </div>
                <div className="content">
                  <p className="mb-4">{items[1].description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
