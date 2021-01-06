import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { callServer } from "../../utils/NetworkUtils";
import showNotification from "../../utils/NotificationUtils";
import "./index.css";

const LoginForm = (props) =>
{
  const [isLoading, setIsLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [recoveryPasswordUsername, setRecoveryPasswordUsername] = useState("");

  const handleOk = async () =>
  {
    const data = { username: recoveryPasswordUsername };
    const result = await callServer(
      process.env.REACT_APP_HOST_NAME + "/auth/recoveryrequest",
      "post",
      data
    );
    if (result.auth)
    {
      showNotification("error", result.message);
      setIsModalVisible(false);
    } else
    {
      showNotification("error", result.message);
    }
  };

  const handleCancel = () =>
  {
    setIsModalVisible(false);
  };

  const handleRecoveryUsername = (e) =>
  {
    setRecoveryPasswordUsername(e.target.value);
  };

  useEffect(() =>
  {
    console.log("Login Form");
  }, []);

  const onFinish = async (values) =>
  {
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
    if (result.auth)
    {
      setIsLoading(false);
      localStorage.setItem("token", result.accessToken);
      props.history.push("/games");
    } else
    {
      setIsLoading(false);
      showNotification("error", result.message);
    }
  };

  return (
    <div className="login-container">
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>Login</h1>
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
      <>
        <Modal
          title="Recovery Password"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={(e) => handleRecoveryUsername(e)}
          />
        </Modal>
      </>
    </div>
  );
};

export default LoginForm;
