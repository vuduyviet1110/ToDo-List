import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [
        {id:1, name: 'Learn ReactJS', completed: false, priority:'High' },
        {id:2, name: 'Learn NodeJS', completed: false, priority:'Medium' },
        {id:3, name: 'Learn Javascript', completed: true, priority:'Low' },
    ],
    reducers:{
        AddToDo: (state, action)=>{
            state.push(action.payload);
        },
        ToogleStatus: (state, action)=>{
            const currentId= state.filter(thistoDo=>thistoDo.id=== action.payload )
            currentId.completed= !currentId.completed;
        },
    }
})