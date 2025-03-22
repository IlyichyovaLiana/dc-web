"use client";

import { Carousel } from "antd";

function HeroBanner({ heroBannerData }) {
  return (
    <section
      id="heroBanner"
      className="container"
      data-aos="fade-up"
      style={{ maxHeight: "630px", marginTop: "70px" }}
    >
      <Carousel
        arrows
        dotPosition="right"
        autoplay
        infinite
        autoplaySpeed={5000}
        dots={{ className: "carousel-dots" }}
      >
        {heroBannerData.items.map((banner, index) => (
          <div key={index}>
            <div
              className="banner"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="row align-items-center h-100 container ml-1">
                <div className="col-lg-6 col-md-12 col-xl-7">
                  <div className="block">
                    <div className="divider mb-3"></div>
                    <span className="text-uppercase text-sm letter-spacing">
                      {banner.title2}
                    </span>
                    {banner.title1 && (
                      <h1 className="mb-3 mt-3">{banner.title1}</h1>
                    )}
                    <p className="mb-4 pr-5">{banner.description}</p>
                    <div className="btn-container">
                      <a
                        href="#contact-us"
                        className="btn btn-main-2 btn-icon btn-round-full"
                      >
                        Make appointment
                        <i className="icofont icofont-simple-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroBanner;
