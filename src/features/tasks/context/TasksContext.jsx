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
    const getDoneTasksByUser = (userId) => tasks.filter(task => task.userId === userId && task.done === true);

    const markTaskAsDone = (taskId) => {
        const updatedTasks = tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task);
        setTasks(updatedTasks); 
    };

    const addTask = (newTask) => setTasks((prevTasks) => [...prevTasks, newTask]);
    const updateTask = (taskId, title) => setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? {...task, title: title} : task)));
    const deleteTask = (taskId) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    return (
        <TaskContext.Provider value={{ tasks, markTaskAsDone, getDoneTasksByUser, getAllTasksByUser, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

