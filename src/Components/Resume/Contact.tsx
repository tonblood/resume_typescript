import React from 'react'
import { Row, Col,Image,Button} from 'antd';
import Profile from '../Asset/Profilepicture.jpg'

export default function Contact() {
    return (
        <div className='Contact'>
            <h2>My Information</h2>

            <Row gutter={[16, 8]}>
                <Col span={8} >
                    <Image  src={Profile} alt="Profile picture" /></Col>

                <Col span={16} >
                <div className="information">
                <p ><b>Name(Eng) : </b> Apichat Moolwandee</p>
                <p><b>Name(Tha) : </b> อภิชาติ มูลวันดี</p>
                <p><b>Telephone No. : </b>090-672-1452</p>
                <p><b>Email : </b>tonapichat@kkumail.com</p>
                <b>Github : </b>
                <Button type='link' href="https://github.com/tonblood" target="_blank">tonblood</Button>
                <br/>
                <p><b>Education</b></p>
                <p>Bachelor degree at Khonkaen university </p>
                <p>College of Computing Computer Science</p>
              <h4>Introduction</h4>
              <div className="information">
                <p >Hello My name is Apichat Moolwandee
                  Now I’m a Bachelor degree. I like to do many things. little by little because I want to find my self
                  and what I really want to do but My weakness Is Bored with the same job. I’m Interested about Web
                  Design especially Web develope , UX/UI Design And QA Test. I Believe It's nothing that humans can't do
                  if we don't try.</p>
              </div>
              </div>
            </Col>
            </Row>
        </div>
    )
}
