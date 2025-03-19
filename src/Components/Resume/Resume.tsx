import HeadTitle from './HeadTitle';
import Workdetail from './Workdetail';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react'
import { Switch, Button } from 'antd';
import { useNavigate, redirect, Link } from 'react-router-dom';
import { message } from 'antd';


const Resume = () => {
  const navigate = useNavigate();
  const [darkmode, setDarkmode] = useState<boolean>(false);
  // const mode = ['App-light','App-dark'];
  const onchange = (event: any) => {
    setDarkmode(event)
  }

  if (!localStorage.getItem('user')) redirect('/')
  return (
    <div className={darkmode ? 'App-dark' : 'App-light'} >
      <div className='nav'>
        <div className='box'>
          <p>Dark mode : <Switch className='switch' onChange={onchange} /></p>
        </div>
      </div>
      <HeadTitle />
      <Workdetail />
      <div className='miniproject'>
        <h2>Mini Project</h2>
        <Link to={'/todolist'}>
          <Button type='primary' size='large'>Note TodoList</Button>
        </Link>
        <Link to={'/feedpost'}>
          <Button type='primary' size='large'>Cotton Book</Button>
        </Link>
        <Link to={'/flashcard'}>
          <Button type='primary' size='large'>Flash Card</Button>
        </Link>
        {/* <Link to={'/chart'}>
          <Button type='primary' size='large'>ChartJS</Button>
        </Link> */}

        {/* <Link type='primary' to='/feedpostaxios'> Test</Link> */}
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Resume