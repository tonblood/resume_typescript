import React from 'react'
import { Button,Form, Input,InputNumber } from 'antd';
import { post } from '../Asset/Workinterface';

interface PostType{
    handleSubmit:any
}

const CreatePost: React.FC<PostType> = ({handleSubmit}) => {
    // const [fillForm,setFillForm] = useState<boolean>(false);
    const onFinish = (values: post) => {
      console.log('Success:', values);
      handleSubmit(values)
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
        <div className='createpostbox'>
            <h3 style={{textAlign:'center'}}>Create New Post</h3>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="User Id"
          name="userId"
          rules={[{ required: true, message: 'Please Enter Your user Id(number)' }]}
        >
          <InputNumber  style={{width:'100%'}} min={1} max={100}   />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please Enter Your Title' }]}
        >
          <Input  placeholder='Enter Title of post'/>
        </Form.Item>
  
        <Form.Item
          label="Description"
          name="body"
        >
          <Input.TextArea rows={2}  placeholder='Descrip how you feel about it '/>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  };

export default CreatePost