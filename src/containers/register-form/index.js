import React from 'react';
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';

const registerForm = (props) =>
{
    const onFinish = (values) =>
    {
        console.log('Received values of form: ', values);
    };

    const handleLoginClick = () =>
    {
        props.history.push('/login');
    }

    return (
        <div className="register-container">
            <h1 style={{ textAlign: 'center', margin: '40px 0px', fontSize: '32px' }}>Register</h1>
            <Form
                name="normal_register"
                className="register-form"
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
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full name" />
                </Form.Item>
                <Form.Item
                    name="dob"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your DOB!',
                        },
                    ]}
                >
                    <DatePicker placeholder="Date of birth" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="passwordConfirm"
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>
                <Form.Item className="button-row">
                    <Button type="primary" htmlType="submit" className="register-form-button">Register</Button>
                    <div style={{ margin: '15px 0px', textAlign: 'center' }}>Or</div>
                    <Button type="dashed" onClick={handleLoginClick}>Log in</Button>
                </Form.Item>
            </Form>
        </div>

    );

}


export default registerForm;