"use client";

import React, { useState } from "react";
import { useGlobalContext } from "@/contexts";
import { ApiEndpoints } from "@/utils";
import { Alert, message as notification } from "antd";
import { Form } from "antd";

const Appointment = () => {
  const data = useGlobalContext() || {};
  const [form] = Form.useForm();

  const sendToTelegramBot = async (values) => {
    const message = `${values.message}`;

    const userMessage = `📩 *New Message*\n\n👤 *Name:* ${values.name}\n📞 *Phone:* ${values.phone}\n💬 *Message:* ${message}`;

    const telegramAPI = ApiEndpoints.getTelegramEndpoint();

    try {
      const response = await fetch(telegramAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
          text: userMessage,
          parse_mode: "Markdown",
        }),
      });

      const result = await response.json();
      if (result.ok) {
        notification.success("Message sent to private channel of doctor!");
        setForm({ name: "", phone: "", message: "" }); // Clear form after success
      } else {
        console.error("Telegram API Error:", result);
        notification.error("Error sending message");
      }
    } catch (error) {
      notification.error("Error connecting to Telegram.");
    }
  };

  return (
    <section className="section appointment" id="contact-us" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="appoinment-content">
              <img
                src="/images/about/profile-1.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="emergency">
                <h2 className="text-lg">
                  <i className="icofont icofont-phone-circle text-lg"></i>
                  {data?.phone}
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="appoinment-wrap mt-5 mt-lg-0">
              <h2 className="mb-2 title-color">Book Appointment</h2>
              <p className="mb-4">{data.contactUsText}</p>
              <Form
                className="appoinment-form"
                form={form}
                onFinish={sendToTelegramBot}
              >
                <div className="row mb-4">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
                          },
                        ]}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number!",
                          },
                        ]}
                      >
                        <input
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="form-group-2 mb-4">
                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please input your message!" },
                    ]}
                  >
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                    />
                  </Form.Item>
                </div>

                <button
                  type="submit"
                  className="btn btn-main btn-round-full mt-4"
                >
                  Send via Telegram{" "}
                  <i className="icofont icofont-telegram ml-2"></i>
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
