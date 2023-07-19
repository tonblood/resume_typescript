import { Button} from 'antd';
import { useEffect, useState } from 'react';
export default function HeadTitle() {
  
  const Text = ["Apichat","Tonblood"]
  const [headText,setHeadText] = useState<boolean>(false);
  useEffect(()=>{
      console.log(headText);
      
  },[headText])
  return (
      <div>
        
      <div className='intro'>
        
        <span><Button className='btn' type='link'onClick={()=>setHeadText(!headText)}>
        
          <h1>Hello Welcome To {Text[Number(headText)]} Site</h1>
        </Button>
        </span>
        
            
        </div>
            </div>

  )
}
