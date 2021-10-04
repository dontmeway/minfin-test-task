import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortBy } from '../store/slices/todoSlice'

export const SideBar = () => {
    const {sortBy, completed, unfinished} = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const handleSortBy = (e) => {
        dispatch(setSortBy(e.target.value))
    }



    return (
        <div className = "sideBar">
          <select 
            onChange = {handleSortBy} 
            value = {sortBy}>
            <option disabled>Сортировать</option>
            <option value = "all">Все</option>
            <option value = "completed">Выполненные</option>
            <option value = "unfinished">Невыполненные</option>
          </select>
          <div className = "sortBy">
              <p>Все задачи: {completed + unfinished}</p>
              <p>Выполненные задачи: {completed}</p>
              <p>Невыполненные задачи: {unfinished}</p>
          </div>
        </div>
    )
}
