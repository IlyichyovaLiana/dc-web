"use client";
import { useEffect } from "react";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";

const AdminPopularQuestions = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getPopularQuestionsEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getPopularQuestionsEndpoint(), {
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
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <Flex vertical gap="30px">
            {fields.map(({ key, name, ...restField }, index) => (
              <Flex key={key} vertical gap="10px">
                <Form.Item
                  {...restField}
                  name={[name, `question`]}
                  rules={[
                    {
                      required: true,
                      message: `Missing question ${index + 1}`,
                    },
                  ]}
                  label={`Question ${index + 1}`}
                >
                  <Input.TextArea
                    placeholder={`Question ${index + 1}`}
                    autoSize
                    maxLength={100}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, `answer`]}
                  rules={[
                    { required: true, message: `Missing answer ${index + 1}` },
                  ]}
                  label={`Answer ${index + 1}`}
                >
                  <Input.TextArea
                    placeholder={`Answer ${index + 1}`}
                    autoSize
                    maxLength={200}
                  />
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

export default AdminPopularQuestions;
