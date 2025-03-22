"use client";
import { useEffect } from "react";

import { Button, Form, Input } from "antd";
import { AsyncRequest } from "@/services";
import { ApiEndpoints } from "@/utils";
import Upload from "@/components/Upload";

const AdminGlobal = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getGlobalEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getGlobalEndpoint(), {
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
        name="name"
        rules={[{ required: true, message: "Missing name" }]}
        label="Name"
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="subName"
        rules={[{ required: true, message: "Missing SubName" }]}
        label="SubName"
      >
        <Input placeholder="SubName" />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{ required: true, message: "Missing phone" }]}
        label="Phone"
      >
        <Input placeholder="Phone" />
      </Form.Item>

      <Form.Item name="facebook" label="Facebook URL">
        <Input placeholder="Facebook URL" />
      </Form.Item>
      <Form.Item name="instagram" label="Instagram URL">
        <Input placeholder="Instagram URL" />
      </Form.Item>
      <Form.Item name="vk" label="VK URL">
        <Input placeholder="VK URL" />
      </Form.Item>
      <Form.Item name="contactUsText" label="Contact Us Text">
        <Input.TextArea placeholder="contact Us Text" autoSize />
      </Form.Item>
      <Form.Item
        name="metadata"
        rules={[{ required: true, message: "Missing metadata" }]}
        label="Metadata"
      >
        <Input.TextArea placeholder="Metadata" autoSize />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminGlobal;
