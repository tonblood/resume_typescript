import React, { useState } from 'react'
import { post } from '../Asset/Workinterface'
import { Input,Button, message } from 'antd'

interface EditType{
    post?:post
    handleEdit?:any
}

const EditPostComponent = ({post,handleEdit}:EditType) => {
    const {TextArea} = Input
    const userId = post?.userId
    const [title,setTitle] = useState<string>(post ? post.title:'');
    const [body,setBody] = useState<string>(post ? post.body:'');

    const handletitle=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    const handlebody=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setBody(e.target.value)
    }
    const handleSubmit=(e:React.MouseEvent<HTMLButtonElement>)=>{
        if(title && body){
            const editpost = {userId,title,body}
            handleEdit(editpost)
        }
        else message.error('please input data')
    }
  return (
    <div>
        <div className='editform' >
        <p> <b>User Id : </b> {userId}</p>
        <b>Title</b>
        <Input style={{margin: '10px 0px'}} value={title} onChange={handletitle} />   
        <b>Description</b>
        <TextArea style={{margin: '10px 0px'}} rows={4} value={body} onChange={handlebody}  />

        <Button style={{backgroundColor:'#678983',color:'white'}} onClick={handleSubmit}> Update</Button>
        </div>
        </div>
  )
}

export default EditPostComponent