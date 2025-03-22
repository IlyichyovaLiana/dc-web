"use client";
import { useEffect } from "react";

import { Button, Form, Input } from "antd";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";

const AdminBMI = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getBMIEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getBMIEndpoint(), {
      ...values,
    });
  };
  return (
    <Form
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      form={form}
      layout="vertical"
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Missing title" }]}
        label="Title"
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[{ required: true, message: "Missing description" }]}
        label="Description"
      >
        <Input.TextArea placeholder="Description" autoSize maxLength={500} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminBMI;
