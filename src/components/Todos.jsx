import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSort } from '../hooks/useSort'
import { deleteTodo, updateTodo } from '../store/slices/todoSlice'

export const Todos = () => {
    const { todos, sortBy } = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const sortedItems = useSort(todos, sortBy)
    const handleUpdate = (e, id) => {
        dispatch(updateTodo({id, completed: e.target.checked}))
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div className = "todos">
            {sortedItems?.map(el => 
            <div
                className = "todo"
                key = {el.id}>
                <div>
                    <input
                        id = {el.id} 
                        onChange = {(e) => handleUpdate(e, el.id)} 
                        type = "checkbox" 
                        checked = {el.completed}/>
                    <label htmlFor = {el.id}>
                        {el.todo}
                    </label>
                </div>
                    <i
                        onClick = {() => handleDelete(el.id)} 
                        className = "bi bi-x-circle-fill"></i>
            </div>)}
        </div>
    )
}
