import { createContext, useState } from "react";

export const TaskContext = createContext([]);


/*
? Object Example:

[
    {
        id: 1
        userId: 1,
        title: ""
        done: false
    }

]
*/

// eslint-disable-next-line react/prop-types
export function TaskContextProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const getAllTasksByUser = (userId) => tasks.filter(task => task.userId === userId);
    // const getPendingTasksByUser = (userId) => tasks.filter(task => task.userId === userId && task.done === false);
    const getDoneTasksByUser= (userId) => tasks.filter(task => task.userId === userId && task.done === true);

    const addTask = (newTask) => setTasks((prevTasks) => [...prevTasks, newTask]);
    const updateTask = (taskId, dataTask) => setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? dataTask: task)));
    const deleteTask = (taskId) => setTasks((prevTasks) => prevTasks.filter((task) => task !== taskId));


    return (
        <TaskContext.Provider value={{ tasks, getDoneTasksByUser, getAllTasksByUser, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

