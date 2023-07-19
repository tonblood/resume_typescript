import React from 'react'
import { Form, Radio, Button, Select, Row, Col, Input } from 'antd';
import { useState } from 'react';
import { useForm } from 'antd/es/form/Form';

const GroupData = ['Group', 'Assignee','Piority'];
const SubGroupData = {
  Group: ['Group1', 'Group2', 'Group3'],
  Assignee: ['Assignee1', 'Assignee2', 'Assignee3'],
  Piority:['Piority1','Piority2','Piority3']
};

type GroupName = keyof typeof SubGroupData;

const SLATarget: React.FC = () => {
  const [groupData, setGroupData] = useState<any>(SubGroupData[GroupData[0] as GroupName]);
  const [subGroupData, setSubGroupData] = useState<any>(SubGroupData[GroupData[0] as GroupName][0]);

  const handleProvinceChange = (value: GroupName) => {
    setGroupData(SubGroupData[value]);
    setSubGroupData(SubGroupData[value][0]);
  };

  const onSecondCityChange = (value: GroupName) => {
    setSubGroupData(value);
  };


  const onFinishCriteria = () => {
    console.log(groupData);
    console.log('Success:', subGroupData);
  };

  return (
    <div className='slacontainner'>
        <Row gutter={[8,8]}>
          <Col span={12} >
            <Row>
              <p>Criteria</p>
            </Row>
            <Row>
              <Form.Item label="When a new required arrives :"
                name='newRequired'
                rules={[{ required: true, message: 'Please Choose 1 of this' }]}
              >
                <Radio.Group>
                  <Radio type='primary' value="and"> Match all of the following (AND) </Radio>
                  <Radio value="or"> Match any of the following (OR) </Radio>
                </Radio.Group>
              </Form.Item>
            </Row>
            <Row>
              <Col span={6}>
                <Form.Item label="Criteria"
                  name='criteria'
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Select
                    placeholder='Select a Criteria'
                    onChange={handleProvinceChange}
                    options={GroupData.map((data:any) => ({ label: data, value: data }))}
                  />
                </Form.Item>
              </Col>
              <Col span={1}
                style={{
                  textAlign: 'center',
                  marginTop: '20px'
                }}
              >
                <p>is</p>
              </Col>
              
              <Col span={11}>
                <Form.Item
                  label=' '
                  name="criteria2"
                >
                  <Select
                    placeholder='Select option'
                    value={subGroupData}
                    onChange={onSecondCityChange}
                    options={groupData.map((subdata:any) => ({ label: subdata, value: subdata }))}
                  />


                </Form.Item>
              </Col>
              
            </Row>
            
            <Row>
              
            <Form.Item wrapperCol={{ offset: -1 }} >
            <Button type="default" htmlType='button' onClick={onFinishCriteria}>
              Add to rules
            </Button>
          </Form.Item>
            </Row>
            
          </Col>
          <Col>
              <span className={'verticalLine'}/>
              </Col>
          <Col span={11}>
          
            <p>Rules Set</p>

          </Col>
          
        </Row>
    </div>
  )
}
export default SLATarget;