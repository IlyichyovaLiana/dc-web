import React from "react";
import { Collapse, Row, Col } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "This is panel header with arrow icon",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header with no arrow icon",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Another question with arrow icon",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Another question with no arrow icon",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Another question with no arrow icon",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Another question with no arrow icon",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Another question with no arrow icon",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Another question with no arrow icon",
    children: <p>{text}</p>,
  },
];

const PopularQuestions = () => {
  return (
    <>
      <section
        className="section clients"
        data-aos="fade-up"
        id="popular-questions"
      >
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>Popular Questions</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" data-aos="fade-up">
          <Row gutter={[16, 16]} justify="center">
            {items.map((item) => (
              <Col
                xs={24} // Full width on extra small screens (mobile)
                sm={24} // Full width on small screens (tablet)
                md={12} // Half width (2 items per row) on medium screens (small desktop)
                lg={12} // Half width (2 items per row) on large screens (desktop)
                key={item.key}
              >
                <Collapse
                  collapsible={item.showArrow === false ? "disabled" : "header"}
                  defaultActiveKey={["1"]}
                >
                  <Collapse.Panel header={item.label} key={item.key}>
                    {item.children}
                  </Collapse.Panel>
                </Collapse>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default PopularQuestions;
