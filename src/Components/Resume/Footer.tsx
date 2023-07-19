import React, { useEffect,useState } from 'react'
import { Button,Modal,Image } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';



function Footer() {
    const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() =>{
        console.log("Modal : " +isModalVisible);
        
        
    },[isModalVisible])
     
  return (
    <div className='footer'>
        <Button className='btnfeed' onClick={(e) => {navigate('/resume/test')}} >Click Me</Button>
        <Modal style={{display:'flex',alignItems:'center' }} title="Hello"
          open={isModalVisible} onOk={()=>setIsModalVisible(false)} onCancel={()=>setIsModalVisible(false)}>
          <p style={{textAlign:'center'}}>Scan Here If you want to know me More</p>
          <Image className='qrcode' style={{height:'300px'}} alt='QRcode' src='https://firebasestorage.googleapis.com/v0/b/resume-6d200.appspot.com/o/Resume%2Fpicture%2Fqrcode.jpg?alt=media&token=1b2d4550-f59c-4b02-9c91-fc916d5bda5b' /> 
        </Modal> 
        {/* <Button href='/Addwork' type='primary'> Test</Button> */}
    </div>
  )
}

export default Footer