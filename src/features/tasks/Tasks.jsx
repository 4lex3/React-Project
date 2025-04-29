/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react"
import { CurrentUserContext } from "../../core/context/CurrentUserContext"
import { TaskContext } from "./context/TasksContext";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";


export function Tasks() {

    const { tasks, addTask, markTaskAsDone, getDoneTasksByUser, getAllTasksByUser, deleteTask, updateTask } = useContext(TaskContext);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);


    useEffect(() => {

        if (currentUser && (!('tasksDone' in currentUser) || !('totalTasks' in currentUser))) {
            setCurrentUser((prev) => ({ ...prev, totalTasks: getAllTasksByUser(prev.currentUserId).length, tasksDone: getDoneTasksByUser(prev.currentUserId).length }));
        }

    }, [currentUser]);


    const createNewTask = (title) => {

        const newTask = {
            id: tasks.length + 1,
            userId: currentUser.currentUserId,
            title: title,
            done: false
        }

        addTask(newTask);
        setCurrentUser(({ totalTasks, tasksDone, ...rest }) => rest);
    };

    const removeTask = (taskId) =>  {
        deleteTask(taskId);
        setCurrentUser(({ totalTasks, tasksDone, ...rest }) => rest);
    }

    const markAsDone = (taskId) => {
        markTaskAsDone(taskId) 
        setCurrentUser(({ totalTasks, tasksDone, ...rest }) => rest);
    } ;

    const updateTaskName = (taskId) => {

        const newName = prompt("Editar tarea:", tasks.find(task => task.id === taskId).title);
        if(!newName) return;
        updateTask(taskId, newName)
    }

    return <div className="card">
        <h1 id="mainTitle">{!currentUser ? "Selecciona un usuario:" : `Tareas de ${currentUser.username}`} </h1>

        <div id="taskSection">
            <TaskList taskList={getAllTasksByUser(currentUser?.currentUserId)} deleteTask={removeTask} markTaskAsDone={markAsDone} updateTask={updateTaskName}/>
            {currentUser && <TaskForm createTask={createNewTask} />}
        </div>

    </div>
}