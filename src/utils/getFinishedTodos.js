export const getFinishedTodos = (obj) => {
    return Object.values(obj).filter(el => el.completed).length
}

export const handleUpdateTodos = (obj, id, value) => {
    return {
        ...obj,
        [id]: {
            ...obj[id],
            completed: value
        }
    }
}

export const handleDelete = (obj, id) => {
    delete obj[id]
    return obj
}