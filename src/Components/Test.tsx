import { Select } from 'antd';
import React, { useState } from 'react'

const Test = () => {
    const [val, setVal] = useState<string[]>([])
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <div>
            <p>Hiii</p>
            <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
                {/* {children} */}
            </Select>
        </div>
    )
}

export default Test