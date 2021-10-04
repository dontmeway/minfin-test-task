import React from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/slices/todoSlice'

export const CreateTodo = () => {
    const [value, setValue] = React.useState('')
    const [id, setId] = React.useState(0)
    const dispatch = useDispatch()
    const handleCreate = (e) => {
        e.preventDefault()
        if (value.length < 5) {
            alert("Минимальное количество букв 5")
            return 
        }
        dispatch(createTodo({todo: value, id, completed: false}))
        setId(prev => prev += 1)
        setValue('')
    }


    return (
        <form onSubmit = {handleCreate}>
            <input placeholder = "Добавить задачу" value = {value} onChange = {(e) => setValue(e.target.value)} required/>
            <button type = "submit">Создать задачу</button>
        </form>
    )
}
