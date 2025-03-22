"use client";
import React, { useEffect } from "react";
import { Button, Form, Input, Flex } from "antd";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";

const AdminServices = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getServicesEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getServicesEndpoint(), {
      ...values,
    });
  };

  return (
    <Form
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      form={form}
      layout="vertical"
      initialValues={{ items: Array(2).fill({ title: "", description: null }) }}
    >
      <Form.Item
        name={"title"}
        rules={[{ required: true, message: "Missing title" }]}
        label="Title"
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name={"subTitle"}
        rules={[{ required: true, message: "Missing title2" }]}
        label="Title2"
      >
        <Input placeholder="Title2" />
      </Form.Item>
      <Form.List name="items" marginTop="20px">
        {(fields) => (
          <Flex vertical gap="30px">
            {fields.map(({ key, name, ...restField }, index) => (
              <Flex key={key} vertical gap="10px">
                <Form.Item
                  {...restField}
                  name={[name, `title${index + 1}`]}
                  rules={[
                    { required: true, message: `Missing title ${index + 1}` },
                  ]}
                  label={`Title ${index + 1}`}
                >
                  <Input placeholder={`Title ${index + 1}`} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, `description${index + 1}`]}
                  rules={[
                    {
                      required: true,
                      message: `Missing description ${index + 1}`,
                    },
                  ]}
                  label={`Description ${index + 1}`}
                >
                  <Input placeholder={`Description ${index + 1}`} />
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

export default AdminServices;
