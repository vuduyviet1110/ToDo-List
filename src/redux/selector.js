import { createSelector } from "@reduxjs/toolkit";


export const todoListSelector = (state) =>state.todoList;
export const filterSearchSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritiesSelector = (state) => state.filters.priorities
export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    filterSearchSelector,
    filterPrioritiesSelector,
    (toDoList,status, searchText,priorities) => {
        return toDoList.filter((todo) => { 

            const todoNameIgnoreCase= todo.name.toLowerCase();
            // nếu all thì chỉ care mỗi search thôi
            if(status ==='All')
                return priorities.length ? todoNameIgnoreCase.includes(searchText.toLowerCase()) && priorities.includes(todo.priority) : todo.name.toLowerCase().includes(searchText.toLowerCase())
            // nếu là completed thì 
            return todoNameIgnoreCase.includes(searchText.toLowerCase()) && 
            ( status==='Completed' ? todo.completed : !todo.completed) && 
            (priorities.length ? priorities.includes(todo.priority) : true)
        }
        )
    }
)