"use client";

import { Form } from "antd";
import React, { useState } from "react";

const BMI = ({ bmiData }) => {
  const [form] = Form.useForm();

  const [result, setResult] = useState("");

  const calculateBMI = (weightKg, heightM) => {
    return weightKg / (heightM / 100) ** 2;
  };

  const evaluate = () => {
    const { weight, height } = form.getFieldsValue();
    const bmi = calculateBMI(weight, height);

    let category = "";

    switch (true) {
      case bmi < 18.5:
        category = "Underweight";
        break;
      case bmi >= 18.5 && bmi < 24.9:
        category = "Normal";
        break;
      case bmi >= 25 && bmi < 29.9:
        category = "Overweight";
        break;
      default:
        category = "Obese";
        break;
    }

    setResult({ bmi: bmi.toFixed(2), category });
    form.resetFields();
  };

  return (
    <section className="section" id="contact-us" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-2 title-color">{bmiData.title}</h2>
        <div className="row align-items-center mt-3">
          <div className="col-lg-6 ">
            <div>
              <p className="mb-4">{bmiData.description}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="mt-lg-0 ml-3">
              <h4 className="mb-3">BMI Calculator</h4>
              <Form
                form={form}
                layout="vertical"
                onFinish={evaluate}
                className="appoinment-form"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <Form.Item rules={[{ required: true }]} name="height">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Height (cm)"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-lg-6">
                    <Form.Item rules={[{ required: true }]} name="weight">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Weight (kg)"
                      />
                    </Form.Item>
                  </div>
                </div>
                <button
                  className="btn btn-main btn-round-full mt-2"
                  type="submit"
                >
                  Calculate
                </button>
              </Form>

              <div className=" ml mt-4 index-container">
                {result && (
                  <>
                    <p className="index"> Index: {result.bmi}</p>
                    <p className="index"> Category: {result.category}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMI;
