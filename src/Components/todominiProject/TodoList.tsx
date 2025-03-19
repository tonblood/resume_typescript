import React, { useState } from 'react'
import CreatePost from './Createtodo';
import List from './List';
import { Todocontext } from './TodolistContext';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export interface todoListType {
  index: number
  description: string
  status: boolean
}

const TodoList = () => {
  const [todo, setTodo] = useState<todoListType[]>([]);
  const navigate = useNavigate();


  return (
    <div className='App-light'>
      <div className='feed-nav'>
        <ArrowLeftOutlined onClick={() => { navigate('/') }} />
        <h4 style={{ fontFamily: 'roboto, sans-serif', color: '#F0E9D2', marginLeft: 10 }}>Note Todolist</h4>
      </div>
      <div >
        <Todocontext.Provider value={{ todo, setTodo }}>
          <CreatePost />
          <List />
        </Todocontext.Provider>
      </div>
    </div>
  );

}

export default TodoList