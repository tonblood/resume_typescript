import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { post } from '../Asset/Workinterface';
import { Button, message } from 'antd';
import PostComponent from './PostComponent';
import CreatePost from '../Postaxios/CreatePost';
import EditPostComponent from './EditPostComponent';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Feedpost = () => {
    const posturl = "https://jsonplaceholder.typicode.com/posts"
    const [postidx, setPostIdx] = useState<number>(1);
    const [post, setPost] = useState<post>();
    const [editchecked, setEditChecked] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${posturl}/${postidx}`)
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => {
                console.log("can't get post because : ", err.message);
            })

    }, [postidx]);

    const createnewpost = (newpost: post) => {
        axios.post(posturl, newpost).then((res) => {
            setPost(res.data)
            console.log(res.data);
        })
    }
    const handleEdit = (editpost: post) => {
        console.log(editpost);

        axios.put(`${posturl}/${postidx}`, editpost)
            .then((res) => {
                setPost(res.data)
                console.log(res.data);
            })
        setEditChecked(false)
    }
    const handleDelete = () => {
        axios.delete(`${posturl}/${postidx}`).then(() => {
            message.success(`delete Post Id: ${postidx} success`)
        })
        if (postidx <= 1) {
            setPostIdx(postidx + 1)
        }
        else setPostIdx(postidx - 1)


    }
    return (
        <div className='feed'>
            <div className='feed-nav'>
            <ArrowLeftOutlined onClick={() => { navigate('/') }} />
                <p>CottonBook</p>
            </div>
            <div style={{ margin: '10px 20%' }}>
                <CreatePost handleSubmit={createnewpost} />
            </div>
            <div className='postContainer'>
                {editchecked ? <EditPostComponent post={post} handleEdit={handleEdit} /> : <PostComponent Post={post} editpost={setEditChecked} deletepost={handleDelete} />}

                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <Button block type='primary' onClick={() => { setPostIdx(postidx - 1) }} disabled={postidx <= 1 ? true : false || editchecked} > Previous Post</Button>
                    <Button block type='primary' onClick={() => { setPostIdx(postidx + 1) }} disabled={postidx >= 100 ? true : false || editchecked} > Next Post</Button>
                </div>
            </div>
        </div>
    )
}

export default Feedpost