import React, { useState } from 'react'
import CreatePost from './Createtodo';
import List from './List';
import { Todocontext } from './TodolistContext';

export interface todoListType{
  index:number
  description:string
  status:boolean
}

const TodoList = () => {
  const [todo,setTodo] = useState<todoListType[]>([]);
  const [test,setTest] = useState<todoListType[]>([]);

  const TestFuntion = () => {
    if (test.length === 0) {
      console.log(test);
      return <h3> me tonblood</h3>
      
    }
    return <p>Hello eiei</p>
  }


  return (
    <div className='App-light'>
      <div className='feed-nav'>
      <h4 style={{fontFamily:'roboto, sans-serif',color:'#F0E9D2'}}>Note Todolist</h4>
      </div>
      <div >
        <Todocontext.Provider value={{todo,setTodo}}>
        <CreatePost/>
        <List/>
        </Todocontext.Provider>
        <TestFuntion/>
      </div>
    </div>
  );

}

export default TodoList