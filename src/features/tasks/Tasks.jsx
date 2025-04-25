import { useContext, useEffect } from "react"
import { CurrentUserContext } from "../../core/context/CurrentUserContext"
import { TaskContext } from "./context/TasksContext";
import { TaskList } from "./components/taskList";
import { TaskForm } from "./components/TaskForm";


export function Tasks() {

    const { tasks, addTask, getDoneTasksByUser, getAllTasksByUser } = useContext(TaskContext);
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
    };



    return <div className="card">
        <h1 id="mainTitle">{!currentUser ? "Selecciona un usuario:" : `Tareas de ${currentUser.username}`} </h1>


        <div id="taskSection">
            <TaskList taskList={getAllTasksByUser(currentUser?.currentUserId)} />
            {currentUser && <TaskForm createTask={createNewTask} />}
        </div>

    </div>
}