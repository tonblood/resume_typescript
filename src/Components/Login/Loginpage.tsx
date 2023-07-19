import React from 'react'

import { Button, Form, Input,message } from 'antd';
import { useNavigate } from 'react-router-dom';


const Loginpage= () => {
    const navigate = useNavigate();
    const onFinish = (values:any) => {
    if (values.username ==="ton" && values.password ==="hihi"){
      setTimeout(message.success("Login Success"),2000)
      navigate("/resume");
      localStorage.setItem('user',values.username)
    }
    else if(values.username ==="admin" && values.password ==="eiei"){
      setTimeout(message.success("Login Success"),2000)
      navigate("/goserviceform");
      localStorage.setItem('user',values.username)
    }
    else{
      setTimeout(message.error("Your Username or Password incorrect"),2000)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div className='Login'>
        <div>
        <h1>Please Login your Account</h1>
        </div>
        
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      {process.env.NODE_ENV}
    </div>
  );
};

export default Loginpage