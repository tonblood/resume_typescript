import React, { useEffect, useState } from 'react'
import { Button, Empty } from 'antd';
import axios from 'axios';

interface Param {
    word?: dataDict,
    index: number
}

const Cardlist = (props: Param) => {
    const [tf, setTf] = useState<boolean>(true);
    console.log(tf);



    return (props.word ? <div style={{ margin: '10px' }}>

        <div className='cardbox eng'>
            <h1>{props.word.word}</h1>
            <p> <b> Description : </b>  {props.word.definition} </p>
            <Button size='large' onClick={() => { setTf(!tf) }}> Flip Card</Button>
        </div>

    </div> : <Empty />)
}

export default Cardlist