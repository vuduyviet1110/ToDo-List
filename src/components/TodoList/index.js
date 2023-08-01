import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toDoSlice from './toDoSlice';
import { v4 as uuidv4 } from 'uuid';
import {todosRemainingSelector,todoListSelector} from '../../redux/selector';

export default function TodoList() {
  const [textValue,setTextValue] = useState('');
  const [priority,setPriority] = useState('Medium');
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  const allTodos= useSelector(todoListSelector);


  const HandleClickBtn =()=> {
    const toDoName=allTodos.map(todo=>todo.name.toLowerCase());
    const isExistTodo=toDoName.includes(textValue.toLowerCase()) 
    console.log(toDoName)
    console.log()

    if(isExistTodo){
      alert('this todo is already in the list')
    }if(textValue.trim|| textValue.startsWith('')){
      alert ('Please enter one task')
    }
    else{
      dispatch(
        toDoSlice.actions.AddToDo({
          id: uuidv4(),
          name: textValue,
          priority: priority,
          completed: false,
        })
      );
    }  
  }


  const HandleOnChangeText= (e) => {
    setTextValue(e.target.value)
  }
  
  const HandleOnChangePriority= (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' />
        <Todo name='Learn linh itn' prioriry='Low' /> */}

        {todoList.map(todo => <Todo name={todo.name} prioriry={todo.priority} id={todo.id} key={todo.id} completed={todo.completed}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={textValue} onChange={HandleOnChangeText}/>
          <Select defaultValue="Medium" value={priority} onChange={HandleOnChangePriority}>
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
          <Button type='primary' onClick={HandleClickBtn}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
