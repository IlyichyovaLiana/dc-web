"use client";

import { Button, Form, Input, InputNumber, Flex } from "antd";
import { useEffect } from "react";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";

const AdminCounter = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getCounterEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getCounterEndpoint(), {
      ...values,
    });
  };

  return (
    <Form
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      form={form}
      layout="vertical"
      initialValues={{ items: Array(4).fill({ title: "", number: null }) }}
    >
      <Form.List name="items">
        {(fields) => (
          <Flex vertical gap="30px">
            {fields.map(({ key, name, ...restField }) => (
              <Flex key={key} vertical gap="10px">
                <Form.Item
                  {...restField}
                  name={[name, "title"]}
                  rules={[{ required: true, message: "Missing title" }]}
                  label="Title"
                >
                  <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "number"]}
                  rules={[{ required: true, message: "Missing number" }]}
                  label="Number"
                >
                  <InputNumber placeholder="Number" />
                </Form.Item>
              </Flex>
            ))}
          </Flex>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminCounter;
