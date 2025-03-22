"use client";

import React, { useEffect } from "react";
import { Button, Form, Input, Flex } from "antd";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";
import Upload from "@/components/Upload";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const AdminTestimonials = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getTestimonialsEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, [form]);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getTestimonialsEndpoint(), {
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
        name={"title"}
        rules={[{ required: true, message: "Missing title" }]}
        label="Title"
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        name={"subTitle"}
        rules={[{ required: true, message: "Missing subtitle" }]}
        label="Subtitle"
      >
        <Input.TextArea placeholder="Subtitle" autoSize />
      </Form.Item>
      <Form.List name="items" marginTop="20px">
        {(fields,  { add, remove }) => (
          <Flex vertical gap="30px">
            {fields.map(({ key, name, ...restField }) => (
              <Flex key={key} vertical gap="10px">
                 <Form.Item
                  {...restField}
                  name={[name, `image`]}
                  valuePropName="fileList"
                  rules={[{ required: true, message: "Missing image" }]}
                  label="Image"
                  initialValue={[]}
                >
                  <Upload maxCount={1} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, `title`]}
                  rules={[{ required: true, message: `Missing title` }]}
                  label={`Title`}
                >
                  <Input placeholder={`Title`} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, `name`]}
                  rules={[{ required: true, message: `Missing name` }]}
                  label={`Name`}
                >
                  <Input placeholder={`Name`} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, `text`]}
                  rules={[
                    {
                      required: true,
                      message: `Missing Text`,
                    },
                  ]}
                  label={`Text`}
                >
                  <Input.TextArea placeholder={`Text`} autoSize />
                </Form.Item>
                <Button
                  type="dashed"
                  onClick={() => remove(name)}
                  block
                  icon={<MinusOutlined />}
                >
                  Remove field
                </Button>
              </Flex>
            ))}
              <Form.Item style={{ marginTop: 30 }}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
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

export default AdminTestimonials;
