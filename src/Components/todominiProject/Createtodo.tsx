import React,{useContext, useState} from 'react'
import {Input,Button,Space} from 'antd';
import { Todocontext } from './TodolistContext';
import { todoListType } from './TodoList';

const CreatePost = () => {
    const {setTodo} = useContext<any>(Todocontext);
    const [text,setText] = useState<string>("");
    const [index,setIndex] = useState<number>(0);
    const [disbtn,setDisbtn] = useState<boolean>(true);
    
    const handleInput=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setText(e.target.value)
        if(e.target.value !== ' ') setDisbtn(false)
        else {
          setDisbtn(true)
        }
    }
    const handleSubmit=(e:React.MouseEvent<HTMLButtonElement>)=>{
      if(text){
      const Todo:todoListType = {index,description:text,status:false}
      setTodo((prev:todoListType[])=>{return [Todo,...prev]})
      setIndex(index+1)
      }
      setText("")
    }
      return (
        <div >
           <Space direction="vertical" size="middle" style={{ display: 'flex' ,margin: '10px 20%' }}>
          <h3 style={{fontFamily:'roboto, sans-serif'}} >Add Todolist</h3>
        
          <Input.TextArea rows={3} placeholder="Enter what you want to do and remind" value={text} onChange={handleInput} />
    
            <Button disabled={disbtn}  type="primary" htmlType='submit' onClick={handleSubmit}>
              Submit
            </Button>
        </Space>
        </div>
      );
    };

export default CreatePost;