import React from 'react'
import { Card, Col, Row, Space } from 'antd';
import image_badminton from '../Asset/IMG_0194.png'

const { Meta } = Card;
interface workdata {
    title: string,
    link?: string,
    description: string,
    cover: string
}

function Workdetail() {
    // const [work, setWork] = useState<object>();
    const data: workdata[] = [
        // {
        //     title: "งานประจำรายวิชา Mobile & Application",
        //     link: "https://myproject-b371d.web.app/",
        //     description: "เป็นงานประจำวิชา Mobile & Application evelopment ซึ่งจะทำการ พัฒนา Web Application โดยใช้ Framwork และ Library ต่างๆ",
        //     cover: "https://firebasestorage.googleapis.com/v0/b/resume-6d200.appspot.com/o/Resume%2Fpicture%2Fcoverproject.jpg?alt=media&token=4a427357-bacc-4398-ba98-a1037bc7afe1"
        // },
        {
            title: "Application SaveThung",
            link: "https://resume-6d200.web.app/Mobile.html",
            description: "เป็น Application บันทึกรายรับรายจ่ายโดยมีจุดประสงค์ให้ผู้ใช้พิมพ์น้อยที่สุดเพื่อลดเวลาและความผิดพลาดในการพิมข้อมูล",
            cover: "https://firebasestorage.googleapis.com/v0/b/resume-6d200.appspot.com/o/Resume%2Fpicture%2Fcoverandroid.png?alt=media&token=f22d2c22-eece-4832-af69-acba53a596e0"
        },
        {
            title: "งาน Design Figma And Adobe Xd",
            link: "https://www.figma.com/file/lnUhoqnpiBCQkVnRr3D2DP/Resume?node-id=5%3A4",
            description: "เป็นงานที่เคย design ตัว Application และงาน design ต่างๆโดยทำงานรวบรวมเก็บไว้",
            cover: "https://firebasestorage.googleapis.com/v0/b/resume-6d200.appspot.com/o/Resume%2Fpicture%2Fcoverdesign.png?alt=media&token=229902d5-33c8-46e8-b911-6471f99fd518"
        },
        {
            title: "Web Application สำหรับจัดคิวในการตีแบด",
            link: "https://badminton-queue-gilt.vercel.app/",
            description: "เป็น web application ที่จัดทำขึ้นเพื่อจัดการกับคิวในการตีแบดมินตัน โดยใช้ Next js ร่วมกับ express",
            cover: image_badminton
        }
    ]
    return (
        <div className='Workdetail'>
            <h2>My Work</h2>
            <div className='CardContainer'>
                <Row>
                    {data.map((e, idx) => {
                        return <Col span={8} lg={8} sm={24} xs={24} style={{display: 'flex', justifyContent: 'center'}}>
                            <a href={e.link} target='_blank' rel="noreferrer" key={idx}> <Card
                                hoverable
                                style={{ width: 250, height: 400, margin: 15, backgroundColor: '#f2f2f0' }}
                                cover={<img alt={e.title} src={e.cover} width={'20%'} />}>
                                <Meta title={e.title} description={e.description} />
                            </Card> </a>
                        </Col>
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Workdetail
