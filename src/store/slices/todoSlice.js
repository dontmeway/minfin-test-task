import { createSlice } from "@reduxjs/toolkit";
import { getFinishedTodos, handleDelete, handleUpdateTodos } from "../../utils/getFinishedTodos";


const initialState = {
    todos: {},
    completed: 0,
    unfinished: 0,
    sortBy: 'all'
}



export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        createTodo: (state, { payload }) => {
            state.todos[payload.id] = {todo: payload.todo, completed: payload.completed, id: payload.id}
            state.completed = getFinishedTodos(state.todos)
            state.unfinished = Object.keys(state.todos).length - state.completed
        },
        updateTodo: (state, { payload }) => {
            state.todos = handleUpdateTodos(state.todos, payload.id, payload.completed)
            state.completed = getFinishedTodos(state.todos)
            state.unfinished = Object.keys(state.todos).length - state.completed
        },
        setSortBy: (state, { payload }) => {
            state.sortBy = payload
        },
        deleteTodo: (state, {payload}) => {
            state.todos = handleDelete(state.todos, payload)
            state.completed = getFinishedTodos(state.todos)
            state.unfinished = Object.keys(state.todos).length - state.completed
        }
    }
})


export const {createTodo, updateTodo, setSortBy, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer