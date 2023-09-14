'use client';
import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { RULES } from '../../utils/rules';

const { Title } = Typography;

const SignInForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Row justify='center' align='middle' style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Sign In
        </Title>
        <Form
          name='signin'
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label='Username'
            name='username'
            rules={RULES.username}
          >
            <Input placeholder='Enter Username' size='large' />
          </Form.Item>

          {/* Password field */}
          <Form.Item label='Password' name='password' rules={RULES.password}>
            <Input.Password placeholder='Enter Password' size='large' />
          </Form.Item>

          <Form.Item>
            <Button
              className='flex items-center bg-blueSelected px-16 py-4 font-inter font-semibold text-white'
              htmlType='submit'
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignInForm;
