import { Button } from 'antd';
import { useEffect, useState } from 'react';
export default function HeadTitle() {

  const Text = ["Apichat", "Tonblood"]
  const [headText, setHeadText] = useState<boolean>(false);
  useEffect(() => {
    console.log(headText);

  }, [headText])
  return (
    <div className='intro'>
        <h1 className='hover-text' onClick={() => setHeadText(!headText)}>Hello Welcome To {Text[Number(headText)]} Site</h1>
    </div>
  )
}
