import { Carousel } from "antd";
import React from "react";

const bannersData = [
  {
    title: "Professional Care For Your Health",
    subTitle: "Good Health Moves Us Forward",
    description:
      "Humanity stands as a cornerstone of professionalism for any doctor. Here at our clinic, we prioritize your holistic well-being, nurturing both your mental and physical health with meticulous care.",
    image: "/images/bg/slider-bg-1.jpg",
  },
  {
    title: "Professional Care For Your Health",
    subTitle: "Good Health Moves Us Forward",
    description:
      "Humanity stands as a cornerstone of professionalism for any doctor. Here at our clinic, we prioritize your holistic well-being, nurturing both your mental and physical health with meticulous care.",
    image: "/images/bg/slider-bg-1.jpg",
  },
  {
    title: "Professional Care For Your Health",
    subTitle: "Good Health Moves Us Forward",
    description:
      "Humanity stands as a cornerstone of professionalism for any doctor. Here at our clinic, we prioritize your holistic well-being, nurturing both your mental and physical health with meticulous care.",
    image: "/images/bg/slider-bg-1.jpg",
  },
];

const HeroBanner = () => {
  return (
    <section id="heroBanner" className="container" data-aos="fade-up">
      <Carousel
        arrows
        dotPosition="right"
        autoplay
        infinite={true}
        autoplaySpeed={5000}
        dots={{ className: "carousel-dots" }}
      >
        {bannersData.map((banner, index) => (
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
                      {banner.subTitle}
                    </span>
                    {banner.subTitle && (
                      <h1 className="mb-3 mt-3">{banner.title}</h1>
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
};

export default HeroBanner;
