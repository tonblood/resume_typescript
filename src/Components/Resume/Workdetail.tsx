import React from 'react'
import { Card,Space} from 'antd';

const { Meta } = Card;
interface workdata{
    title:string,
    link?:string, 
    description:string,
    cover:string
}

function Workdetail() {
    // const [work, setWork] = useState<object>();
    const data:workdata[]=[
        {
            title:"งานประจำรายวิชา Mobile & Application",
            link:"https://myproject-b371d.web.app/",
            description: "เป็นงานประจำวิชา Mobile & Application evelopment ซึ่งจะทำการ พัฒนา Web Application โดยใช้ Framwork และ Library ต่างๆ",
            cover: "https://firebasestorage.googleapis.com/v0/b/resume-6d200.appspot.com/o/Resume%2Fpicture%2Fcoverproject.jpg?alt=media&token=4a427357-bacc-4398-ba98-a1037bc7afe1"
        },
        {
            title:"Application SaveThung",
            link:"https://resume-6d200.web.app/Mobile.html",
            description: "เป็น Application บันทึกรายรับรายจ่ายโดยมีจุดประสงค์ให้ผู้ใช้พิมพ์น้อยที่สุดเพื่อลดเวลาและความผิดพลาดในการพิมข้อมูล",
            cover: "https://firebasestorage.googleapis.com/v0/b/resume-6d200.appspot.com/o/Resume%2Fpicture%2Fcoverandroid.png?alt=media&token=f22d2c22-eece-4832-af69-acba53a596e0"
        },
        {
            title:"งาน Design Figma And Adobe Xd",
            link:"https://www.figma.com/file/lnUhoqnpiBCQkVnRr3D2DP/Resume?node-id=5%3A4",
            description: "เป็นงานที่เคย design ตัว Application และงาน design ต่างๆโดยทำงานรวบรวมเก็บไว้",
            cover: "https://firebasestorage.googleapis.com/v0/b/resume-6d200.appspot.com/o/Resume%2Fpicture%2Fcoverdesign.png?alt=media&token=229902d5-33c8-46e8-b911-6471f99fd518"
        }
    ]
    return (
        <div className='Workdetail'>
            <h2>My Work</h2>
                <div className='CardContainer'>
                {data.map((e,idx)=>{
                    return <a href={e.link} target='_blank' rel="noreferrer" key={idx}> <Card
                    hoverable
                    style={{ width: 250,height:400,margin:15,backgroundColor: '#f2f2f0' }}
                    cover={<img alt={e.title} src={e.cover} /> }>
                    <Meta title={e.title} description={e.description} />
                </Card> </a>  
                })}
                </div>
        </div>
    )
}

export default Workdetail
