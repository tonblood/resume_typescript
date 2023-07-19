import React from 'react'
import { post } from '../Asset/Workinterface';
import { Card ,Button} from 'antd';

interface PostType {
    Post?: post
    editpost?:any
    deletepost?:any
}

const PostComponent = ({ Post,editpost,deletepost }: PostType) => {
    if (!Post) {
        return <p>No post</p>
    }

    return (
        <div>
            <Card size="small" style={{ backgroundColor: '#F0E9D2', margin: 10 }}>
                <p > <b>Post by UserId Number :</b>{Post.userId} </p>
                <p > <b>Title : </b>{Post.title} </p>
                <b>Description :</b>
                <p > {Post.body} </p>
                <Button style={{backgroundColor:'#678983',color:'white'}} onClick={()=>{editpost(true)}} >Edit Post</Button>
                <Button style={{backgroundColor:'#678983',color:'white'}} onClick={()=>{deletepost()}} >Delete Post</Button>
            </Card>
        </div>
    )
}

export default PostComponent