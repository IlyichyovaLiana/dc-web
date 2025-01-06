"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import firebaseApp from "../../../firebase/clientApp";

import { Form, notification } from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUserData, RouterPaths } from "@/utils";

import {
  LoginContainer,
  StyledForm,
  CustomPasswordInput,
} from "./Login.styles";

const Login = () => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const onFinish = async (values) => {
    const auth = getAuth(firebaseApp);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.username,
        values.password
      );
      setUserData(userCredential.user);
      notification.success({
        placement: "bottomRight",
        message: "Success",
        description: "Login successful",
      });
      router.push(RouterPaths.ADMIN_HERO_BANNER);
    } catch (error) {
      notification.error({
        placement: "bottomRight",
        message: "Error",
        description: "Invalid username or password",
      });
    }
  };
  return (
    <section className="section" id="contact-us" data-aos="fade-up">
      <LoginContainer className="container">
        <h1>Login</h1>

        <StyledForm form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            rules={[{ required: true }]}
            name="username"
            style={{ width: "100%" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name="password"
            style={{ width: "100%" }}
          >
            <CustomPasswordInput>
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                style={{ width: "100%" }}
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "👁️" : "🙈"}
              </span>
            </CustomPasswordInput>
          </Form.Item>
          <button className="btn btn-main btn-round-full mt-2" type="submit">
            Login
          </button>
        </StyledForm>
      </LoginContainer>
    </section>
  );
};

export default Login;
