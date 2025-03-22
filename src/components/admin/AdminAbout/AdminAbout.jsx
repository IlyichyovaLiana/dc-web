"use client";
import { useEffect } from "react";

import { Button, Form, Input } from "antd";
import Upload from "@/components/Upload";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";

const AdminAbout = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getAboutEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getAboutEndpoint(), {
      ...values,
    });
  };

  return (
    <Form
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      form={form}
      layout="vertical"
    >
      <Form.Item
        name="image"
        valuePropName="fileList"
        rules={[{ required: true, message: "Missing image" }]}
        label="Image"
      >
        <Upload maxCount={1} />
      </Form.Item>
      <Form.Item
        name={"title"}
        rules={[{ required: true, message: "Missing title" }]}
        label="Title1"
      >
        <Input placeholder="Title1" />
      </Form.Item>
      <Form.Item
        name={"description"}
        rules={[{ required: true, message: "Missing description" }]}
        label="Description"
      >
        <Input.TextArea placeholder="Description" autoSize />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminAbout;
