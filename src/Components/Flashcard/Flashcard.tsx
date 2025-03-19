import React, { useState, useEffect } from 'react'
import CreateFlashcard from './CreateFlashcard'
import Cardlist from './Cardlist'
import { AutoComplete, Button, Select, Input } from 'antd'
import { flashcard } from '../Asset/Workinterface'
import axios from 'axios'
import cheerio from "cheerio";
import vocabList from '../Asset/oxford-3000.json'
import vocabDict from '../Asset/dicts.json'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

const { Search } = Input
const { Option } = Select
const Flashcard = () => {
  const [flipChecked, setFlipChecked] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0)
  const searchData: { label: string, value: string }[] = []
  const [selectedWord, setSelectedWord] = useState<dataDict>()
  const navigate = useNavigate();
  // @ts-ignore
  vocabDict.map((it) => { if (it.word.charAt(0) !== '-') searchData.push({ label: it.word.toLowerCase(), value: it.word.toLowerCase() }) })

  const handleChange = (value: any) => {
    console.log(value);
    // @ts-ignore
    const tempdata: dataDict = vocabDict.find((it: dataDict) => it.word.toLocaleLowerCase() === value)
    setSelectedWord(tempdata)
  }

  return (
    <div>
      <div className='feed-nav'>
        <ArrowLeftOutlined onClick={() => { navigate('/') }} />
        <h4> Flash Card</h4>
      </div>
      <div className='flashcardcontainer'>
        <Select
          showSearch
          showArrow={false}
          notFoundContent={null}
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          optionFilterProp="children"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={searchData}
          onChange={(value) => handleChange(value)}
          placeholder='search a word that you want to learn'
        >
        </Select>
        <CreateFlashcard />

        <Cardlist word={selectedWord} index={index} />

        {/* <div style={{ display: 'flex', flexDirection: 'row' }} >
          <Button block type='primary' disabled={index === 0} onClick={() => setIndex(index - 1)} > Previous card</Button>
          <Button block type='primary' disabled={index === vocabList.length} onClick={() => setIndex(index + 1)} > Next card</Button>
        </div> */}
      </div>
    </div>
  )
}

export default Flashcard