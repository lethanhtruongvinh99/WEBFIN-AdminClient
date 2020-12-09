import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Divider, Spin } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookFilled,
  GoogleCircleFilled,
} from "@ant-design/icons";
import callServer from "../../utils/NetworkUtils";
import showNotification from "../../utils/NotificationUtils";
import "./index.css";

const LoginForm = (props) => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Login Form");
  }, []);

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    setIsLoading(true);
    const data = {
      ...values,
    };

    const result = await callServer(
      process.env.REACT_APP_HOST_NAME + "/auth/login",
      "post",
      data
    );
    // console.log(result);
    if (result.auth) {
      setIsLoading(false);
      localStorage.setItem("token", result.accessToken);
      props.history.push("/home");
    } else {
      showNotification("error", result.message);
    }
  };

  const handleRegisterClick = () => {
    props.history.push("/register");
  };

  const handleFacebookLogin = () => {
    window.open(process.env.REACT_APP_HOST_NAME + '/auth/facebook', '_self');
  };

  const handleGoogleLogin = () => {
    window.open(process.env.REACT_APP_HOST_NAME + '/auth/google', '_self');
  };

  return (
    <div className="login-container">
      <h1 style={{ textAlign: "center", margin: "40px 0px", fontSize: "32px" }}>
        Login
      </h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        {isLoading ? (
          <div className="loading-spinner">
            <Spin size="large" />
          </div>
        ) : null}
        <Form.Item className="button-row">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
