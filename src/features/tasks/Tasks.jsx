import { useContext, useEffect } from "react"
import { CurrentUserContext } from "../../core/context/CurrentUserContext"
import { TaskContext } from "./context/TasksContext";


export function Tasks() {

    const { getDoneTasksByUser, getAllTasksByUser } = useContext(TaskContext);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);


    useEffect(() => {
        console.log("pasoll");

        if (currentUser && (!('tasksDone' in currentUser) || !('totalTasks' in currentUser))) {
            setCurrentUser((prev) => ({ ...prev, totalTasks: getAllTasksByUser(prev.currentUserId).length, tasksDone: getDoneTasksByUser(prev.currentUserId).length }));
        }

    }, [currentUser]);


    return <div className="card">
        <h1 id="mainTitle">{!currentUser ? "Selecciona un usuario:" : `Tareas de ${currentUser.username}`} </h1>

    </div>
}