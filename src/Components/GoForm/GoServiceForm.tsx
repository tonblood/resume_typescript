import React, { useState, useRef } from 'react'
import SLATarget from './SLATarget'
import { Button, Empty, Form, Input, Select, InputNumber, Row, Col, Radio, Table, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import type { SelectProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { criteriaType } from './FormInterface';
import { type } from '@testing-library/user-event/dist/type';

const GroupData = ['Group', 'Assignee', 'Piority'];
const SubGroupData = {
    Group: ['Group1', 'Group2', 'Group3'],
    Assignee: ['Assignee1', 'Assignee2', 'Assignee3'],
    Piority: ['Piority1', 'Piority2', 'Piority3']
};

type GroupName = keyof typeof SubGroupData;

type DataIndex = keyof criteriaType

const statusType = ['New', 'Assigned', 'InProgress', 'Pending', 'Resolved', 'Closed', 'Cancelled']
const GoServiceForm: React.FC = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [goalvalue, setGoalvalue] = useState<string[]>([])
    const [targetChecked, setTargetChecked] = useState<boolean>(false);

    const [ruleChecked, setruleChecked] = useState<boolean>(false)
    const [rule, setRule] = useState<criteriaType[]>([])

    const [groupData, setGroupData] = useState<any>(SubGroupData[GroupData[0] as GroupName]);
    const [subGroupData, setSubGroupData] = useState<any>(SubGroupData[GroupData[0] as GroupName][0]);

    const handleProvinceChange = (value: GroupName) => {
        setGroupData(SubGroupData[value]);
        setSubGroupData(SubGroupData[value][0]);
    };

    const onSecondCityChange = (value: GroupName) => {
        setSubGroupData(value);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const options: SelectProps['options'] = [];
    options.push({
        label: 'Response',
        value: 'Response'
    });
    options.push({
        label: 'Resolution',
        value: 'Resolution'
    });
    const handleChange = (value: string[]) => {
        if (value.length) {
            setTargetChecked(true)
        }
        else {
            setTargetChecked(false)
        }
        setGoalvalue(value)
    };
    const handlecancle = () => {
        navigate('/')
        localStorage.removeItem('user')
    }

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<criteriaType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    
    const columns: ColumnsType<criteriaType> = [
        {
          title: 'Rule',
          dataIndex: 'criteria',
          key: 'criteria',
          width: '30%',
          ...getColumnSearchProps('criteria'),
        },
        {
          title: 'Value',
          dataIndex: 'optionCriteria',
          key: 'optionCriteria',
          width: '20%',
          ...getColumnSearchProps('optionCriteria'),
        },
      ];


    const Targettime = () => {
        return <div>
            {goalvalue.map((e: string) => {
                return (<div><Row gutter={[8, 8]}> <Col span={7}> <p style={{ paddingTop: '20px' }}><span style={{ color: 'red' }}>*</span> Any request matching the rules should be {e} within</p></Col>

                    <Col><Form.Item name={`${e}days`} label="Days" rules={[{ required: true, message: 'Please input data' }]}>
                        <InputNumber />
                    </Form.Item></Col>
                    <Col><Form.Item name={`${e}hours`} label="Hours" rules={[{ required: true, message: 'Please input data' }]}>
                        <InputNumber />
                    </Form.Item></Col>
                    <Col><Form.Item name={`${e}minute`} label="Minute" rules={[{ required: true, message: 'Please input data' }]}>
                        <InputNumber />
                    </Form.Item> </Col>
                    <Col span={12}></Col>
                </Row>
                </div>
                );
            })}
        </div>
    }
    const MeasureMent = () => {
        return <div>
            {goalvalue.map((e: string, idx: number) => {
                return (<div key={idx} ><Row gutter={[8, 8]}> <Col span={4}> <p>{e} <span style={{ float: 'right' }}>:</span></p></Col>

                    <Col span={2}><p><span style={{ color: 'red' }}>*</span> Start </p></Col>
                    <Col span={1}><p >When</p>
                    </Col>
                    <Col span={4}><Form.Item name={`${e}startstatus`} style={{ marginTop: '10px' }} >
                        <Input disabled placeholder='status' />
                    </Form.Item> </Col>
                    <Col><p> is </p> </Col>
                    <Col span={8}><Form.Item
                        name={`${e}startstatustype`}
                        style={{ marginTop: '10px' }}
                        rules={[{ required: true, message: 'Please input data' }]}
                    >
                        <Select placeholder='Select a status'>
                            {statusType.map((e: string, idx: number) => {
                                return (<Select.Option key={idx} value={e} >{e}</Select.Option>);
                            })}
                        </Select></Form.Item> </Col>
                </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={4}></Col>
                        <Col span={2}><p ><span style={{ color: 'red' }}> *</span> Stop </p></Col>
                        <Col span={1}><p >When</p>
                        </Col>
                        <Col span={4}><Form.Item name={`${e}stopstatus`} style={{ marginTop: '10px' }} >
                            <Input disabled placeholder='status' />
                        </Form.Item> </Col>
                        <Col><p> is</p> </Col>
                        <Col span={8}> <Form.Item
                            name={`${e}stopstatustype`}
                            style={{ marginTop: '10px' }}
                            rules={[{ required: true, message: 'Please input data' }]}
                        >
                            <Select placeholder='Select a status'>
                                {statusType.map((e: string, idx: number) => {
                                    return (<Select.Option key={idx} value={e} >{e}</Select.Option>);
                                })}
                            </Select></Form.Item> </Col>
                    </Row>

                </div>
                );
            })}
        </div>
    }
    const handlecriteria = () => {
        if (form.getFieldValue('criteria') && form.getFieldValue('criteria2')) {
            const getcriteria: criteriaType = { key: uuidv4(), criteria: form.getFieldValue('criteria'), optionCriteria: form.getFieldValue('criteria2') }
            setRule((prev: any) => { return [...prev, getcriteria] })
            form.setFieldValue('criteria', undefined)
            form.setFieldValue('criteria2', undefined)
            setruleChecked(true)
        }
        else {
            console.log('test');

        }



    }
    const ShowSetRule = () => {
        return <div>
            {rule.map((e: any) => {
                return (<div key={e.key}><p>{e.criteria}</p>
                    <p>{e.optionCriteria}</p>
                </div>);
            })}

        </div>
    }

    return (
        <div>
            <div className='FormContainer'>
                <Form
                    name="basic"
                    layout='vertical'
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                >
                    <p>New SLA Policy</p>
                    <div>
                        <Row gutter={[14, 14]}>
                            <Col span={12}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder='Name' />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="SLA Description"
                                    name="sladesc"
                                >
                                    <Input placeholder='SLA Description' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[12, 12]}>
                            <Col span={12}>
                                <Form.Item
                                    label="SLA Goal"
                                    name="slagoal"
                                    rules={[{ required: true, message: 'Please Choose data' }]}
                                >
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        style={{ width: '100%' }}
                                        placeholder="Select SLA-Goal"
                                        onChange={handleChange}
                                        options={options}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Bussiness Hours"
                                    name="bussinesshours"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input placeholder='Select a SLA-Goal' />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Ticket Type"
                                    name="tickettype"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Select>
                                        <Select.Option value="type1">Type 01</Select.Option>
                                        <Select.Option value="type2">Type 02</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>

                    <p>SLA Target</p>
                    <div>
                        <div className='slacontainner'>
                            <Row gutter={[8, 8]}>
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
                                                    options={GroupData.map((data: any) => ({ label: data, value: data }))}
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
                                                    options={groupData.map((subdata: any) => ({ label: subdata, value: subdata }))}
                                                />


                                            </Form.Item>
                                        </Col>

                                    </Row>

                                    <Row>

                                        <Form.Item wrapperCol={{ offset: -1 }} >
                                            <Button type="default" danger htmlType='button' onClick={handlecriteria}>
                                                Add to rules
                                            </Button>
                                        </Form.Item>
                                    </Row>

                                </Col>
                                <Col>
                                    <span className={'verticalLine'} />
                                </Col>
                                <Col span={11}>

                                    <p>Rules Set</p>

                                    {ruleChecked ? ShowSetRule() : <Empty />}

                                </Col>

                            </Row>
                        </div>
                    </div>

                    <p>Target Time</p>
                    <div>
                        {targetChecked ? Targettime() : <Empty />}
                    </div>

                    <p>Measurement</p>
                    <div>
                        {targetChecked ? MeasureMent() : <Empty />}
                    </div>

                    <Form.Item>
                        <div style={{ float: 'right' }}>
                            <Button type="default" onClick={handlecancle}>
                                Cancle
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>

        </div>

    )
}

export default GoServiceForm