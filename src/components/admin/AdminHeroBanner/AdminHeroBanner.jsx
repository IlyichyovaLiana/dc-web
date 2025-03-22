"use client";
import { useEffect } from "react";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex } from "antd";
import Upload from "@/components/Upload";
import {AsyncRequest} from "@/services";
import { ApiEndpoints } from "@/utils";

const AdminHeroBanner = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchItems = async () => {
      AsyncRequest.get(ApiEndpoints.getHeroBannerEndpoint(), (data) => {
        form.setFieldsValue(data);
      });
    };
    fetchItems();
  }, []);

  const onFinish = async (values) => {
    await AsyncRequest.put(ApiEndpoints.getHeroBannerEndpoint(), {
      items: values.items,
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
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <Flex vertical gap="30px">
            {fields.map(({ key, name, ...restField }) => (
              <Flex key={key} vertical gap="10px">
                <Form.Item
                  {...restField}
                  name={[name, "image"]}
                  valuePropName="fileList"
                  rules={[{ required: true, message: "Missing image" }]}
                  label="Image"
                  initialValue={[]}
                >
                  <Upload maxCount={1} />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "title1"]}
                  rules={[{ required: true, message: "Missing title" }]}
                  label="Title1"
                >
                  <Input placeholder="Title1" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "title2"]}
                  rules={[{ required: true, message: "Missing subTitle" }]}
                  label="Title2"
                >
                  <Input placeholder="Title2" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "description"]}
                  rules={[{ required: true, message: "Missing description" }]}
                  label="Description"
                >
                  <Input.TextArea placeholder="Description" autoSize />
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

export default AdminHeroBanner;
