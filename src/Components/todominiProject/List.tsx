import React,{useContext,useState} from 'react'
import { Todocontext } from './TodolistContext'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Checkbox,Button, message,Typography } from 'antd';
import { todoListType } from './TodoList';
import { render } from '@testing-library/react';


const List = () => {
    const {Text} = Typography
    const {todo,setTodo}:any = useContext(Todocontext);
    const onChange = (e:CheckboxChangeEvent,status:boolean) => {
        console.log(`checked = ${e.target.checked}`);
        status = e.target.checked
        console.log('status :',status);
        
      };
    const onDelete=(item:number,text:string)=>{
          const ItemLists = todo.filter((element:todoListType)=>element.index !== item)
          message.success(`Delete tasks : ${text} Complete`)
          setTodo(ItemLists)
          
    }
    
    
  return (
    <div className='postContainer'>
        {todo?.map((e:todoListType)=>{ 
          if(e.status){
            return( <div key={e.index} className='todo' >
           <Checkbox onChange={(a)=>{onChange(a,e.status)}} id={e.index.toString()} /> 
           <Text delete={true} id={e.index.toString()} >  {e.description}  </Text> 
           <Button type='primary' style={{margin:'0px 10px 0px auto',backgroundColor:'#1677FF'}} onClick={()=>{onDelete(e.index,e.description)}} > delete</Button>

          </div>);
          }
          else {
            return( <div key={e.index} className='todo' >
           <Checkbox onChange={(a)=>{onChange(a,e.status)}} id={e.index.toString()} /> 
           <Text  id={e.index.toString()} >  {e.description}  </Text> 
           <Button type='primary' style={{margin:'0px 10px 0px auto',backgroundColor:'#1677FF'}} onClick={()=>{onDelete(e.index,e.description)}} > delete</Button>
          </div>
          );
        }
        })}
        
    </div>
    
  )
}

export default List