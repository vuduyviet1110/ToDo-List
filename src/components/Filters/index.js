import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from './filterSlice';
const { Search } = Input;
export default function Filters() {
  
  const dispatch = useDispatch();
  const [searchText , setSearchText]= useState('');
  const [status, setStatus] = useState('All');
  const [priority,setPriority] = useState([]);


  const HandleFilterSearch = (e) =>{
    setSearchText(e.target.value)
    dispatch(filterSlice.actions.TextFilterChanged(e.target.value))
  }

  const HandleFilterStatus=(e) =>{
    setStatus(e.target.value)
    dispatch(filterSlice.actions.statusFilterChanged(e.target.value))
  }

  const HandleFilterPriority=(value) =>{
    setPriority(value)
    dispatch(filterSlice.actions.prioritiesFilterChanged(value))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value = {searchText} onChange={HandleFilterSearch}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={HandleFilterStatus} value= {status}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priority}
          onChange={HandleFilterPriority}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
