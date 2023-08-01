import { configureStore } from '@reduxjs/toolkit';
import  filterSlice  from '../components/Filters/filterSlice';
import  toDoSlice  from '../components/TodoList/toDoSlice';

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: toDoSlice.reducer,
    }
});
export default store;