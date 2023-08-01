import { createSlice } from "@reduxjs/toolkit"

export default createSlice({
    name: 'filters',
    initialState: {
        search:'',
        status: '',
        priorities: [],
    },
    reducers:{
        TextFilterChanged: (state, action)=>{
            state.search= action.payload
        },
        statusFilterChanged: (state, action)=>{
            state.status= action.payload
        },
        prioritiesFilterChanged: (state, action)=>{
            state.priorities= action.payload
        }
    }
})