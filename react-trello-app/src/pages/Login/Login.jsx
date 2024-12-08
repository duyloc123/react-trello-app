import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const bodyData = {
      data: {
        "email": values.email,
        "password": values.password
      }
    }

    try {
      const response = await fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      const json = await response.json();
      if(json.isSucess) {
        toast.success("Logined successfully!");
        const access_token = json.data.access_token;
        window.sessionStorage.setItem('access_token', access_token);
        navigate('/');
      } else {
        toast.error("Logined Failure!");
      }
    } catch (err) {
      console.log('error: ', err)
      toast.error("Logined Failure!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: '20px auto',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Login</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
    
        <Form.Item label={null} style={{
          display: 'flex',
          justifyContent: 'end'
        }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Login;