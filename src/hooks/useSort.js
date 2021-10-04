import React from "react"

export const useSort = (obj, sortBy) => {
    const sortedArray = React.useMemo(() => {
        if (sortBy === "completed") {
            return Object.values(obj).filter(el => el.completed)
        } else if (sortBy === "unfinished") {
            return Object.values(obj).filter(el => !el.completed)
        }
        else {
            return Object.values(obj)
        }
    }, [obj, sortBy])
    return sortedArray
}