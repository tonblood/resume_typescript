import HeadTitle from './HeadTitle';
import Workdetail from './Workdetail';
import Contact from './Contact';
import Footer from './Footer';
import { useState} from 'react'
import { Switch,Button} from 'antd';
import { useNavigate, redirect} from 'react-router-dom';
import { message } from 'antd';


const Resume = () => {
  const navigate = useNavigate();
  const [darkmode,setDarkmode] = useState<boolean>(false);
  // const mode = ['App-light','App-dark'];
  const onchange=(event :any)=>{
    setDarkmode(event)
  }
  const Logout=()=>{
    localStorage.removeItem('user')
    setTimeout(message.success("Logout success"),2000)
    navigate('/')
  }

  const handleclick=(value:string)=>{
        const nowpath = window.location.pathname
        navigate(`${nowpath}${value}`)
  }
  if(!localStorage.getItem('user')) redirect('/') 
  return (
    <div className={darkmode ? 'App-dark':'App-light'} >
      <div className='nav'>
        <div className='box'>
      <Button type='primary' onClick={Logout}> Logout</Button>
        <p>Dark mode : <Switch className='switch' onChange={onchange} /></p>
        </div>
        </div>
      <HeadTitle/>
      <Workdetail/>
      <div className='miniproject'>
        <h2>Mini Project</h2>
        
        <Button type='primary' size='large' onClick={()=>{handleclick('/todolist')}}>Note TodoList</Button>
        {/* <Link type='primary' to='/feedpostaxios'> Test</Link> */}
        <Button type='primary' size='large' onClick={()=>{handleclick('/feedpost')}}>Cotton Book</Button>
        <Button type='primary' size='large' onClick={()=>{handleclick('/flashcard')}}>Flash Card</Button>
        <Button type='primary' size='large' onClick={()=>{handleclick('/chart')}}>ChartJS</Button>
        
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Resume