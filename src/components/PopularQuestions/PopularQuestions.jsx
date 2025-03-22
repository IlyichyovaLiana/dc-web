"use client";

import React from "react";
import { Collapse, Row, Col } from "antd";

const PopularQuestions = ({ popularQuestionsData }) => {
  const items =
    popularQuestionsData.items?.map((item, index) => ({
      key: index.toString(), // Ensure each key is a string
      label: item.question,
      children: <p>{item.answer}</p>, // Wrap answer in a paragraph for styling consistency
      disabled: item.showArrow === false, // Disable if showArrow is false
    })) || [];

  return (
    <section
      className="section clients"
      data-aos="fade-up"
      id="popular-questions"
    >
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2>{popularQuestionsData.title}</h2>
              <div className="divider mx-auto my-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        <Row gutter={[16, 16]} justify="center">
          {items.map((_, index) => (
            <Col xs={24} sm={24} md={12} lg={12} key={index}>
              <Collapse
                defaultActiveKey={["0"]}
                items={[items[index]]}
                className="custom-collapse" // Keep your custom styles
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PopularQuestions;
