"use client";

import { useEffect } from "react";
import { Form, Button, Input } from "antd";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";

const AdminFeatures = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getFeaturesEndpoint(), {
      ...values,
    });
  };

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getFeaturesEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      autoComplete="off"
      style={{ maxWidth: 600 }}
      layout="vertical"
    >
      <div>
        <h5>Section 1</h5>
        <Form.Item
          name={["section1", "text1"]}
          rules={[{ required: true, message: "Missing text1" }]}
          label="Text 1"
        >
          <Input placeholder="Text 1" />
        </Form.Item>
        <Form.Item
          name={["section1", "title"]}
          rules={[{ required: true, message: "Missing title" }]}
          label="Title"
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name={["section1", "text2"]}
          rules={[{ required: true, message: "Missing text2" }]}
          label="Text 2"
        >
          <Input.TextArea placeholder="Text 2" autoSize />
        </Form.Item>
      </div>

      <div>
        <h5>Section 2</h5>
        <Form.Item
          name={["section2", "text1"]}
          rules={[{ required: true, message: "Missing text1" }]}
          label="Text 1"
        >
          <Input placeholder="Text 1" />
        </Form.Item>
        <Form.Item
          name={["section2", "title"]}
          rules={[{ required: true, message: "Missing title" }]}
          label="Title"
        >
          <Input placeholder="Title" />
        </Form.Item>
        <div>
          <div>
            <Form.Item
              name={["section2", "text2", "title1"]}
              rules={[{ required: true, message: "Missing text2" }]}
              label="Schedule Title 1"
            >
              <Input placeholder=" Schedule Title 1" />
            </Form.Item>
            <Form.Item
              name={["section2", "text2", "text1"]}
              rules={[{ required: true, message: "Missing text2" }]}
              label="Schedule Text 1"
            >
              <Input placeholder="Schedule Text 1" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name={["section2", "text2", "title2"]}
              rules={[{ required: true, message: "Missing title1" }]}
              label="Schedule Title 1"
            >
              <Input placeholder="Schedule Title 2" />
            </Form.Item>
            <Form.Item
              name={["section2", "text2", "text2"]}
              rules={[{ required: true, message: "Missing text1" }]}
              label="Schedule Text 1"
            >
              <Input placeholder="Schedule Text 2" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name={["section2", "text2", "title3"]}
              rules={[{ required: true, message: "Missing title3" }]}
              label="Schedule Title 3"
            >
              <Input placeholder="Schedule Title 3" />
            </Form.Item>
            <Form.Item
              name={["section2", "text2", "text3"]}
              rules={[{ required: true, message: "Missing text3" }]}
              label="Schedule Text 3"
            >
              <Input placeholder="Schedule Text 3" />
            </Form.Item>
          </div>
        </div>
      </div>

      <div>
        <h5>Section 3</h5>
        <Form.Item
          name={["section3", "text1"]}
          rules={[{ required: true, message: "Missing text1" }]}
          label="Text 1"
        >
          <Input placeholder="Text 1" />
        </Form.Item>
        <Form.Item
          name={["section3", "title"]}
          rules={[{ required: true, message: "Missing title" }]}
          label="Title"
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name={["section3", "text2"]}
          rules={[{ required: true, message: "Missing text2" }]}
          label="Text 2"
        >
          <Input.TextArea placeholder="Text 2" autoSize />
        </Form.Item>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminFeatures;
