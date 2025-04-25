/* eslint-disable react/prop-types */
import { useState } from "react";

export function TaskForm({ createTask }) {

    const [taskName, setTaskName] = useState("");


    return (<>
        <input type="text" id="newTaskInput" value={taskName} placeholder="Nueva tarea..." onChange={(e) => setTaskName(e.target.value)}></input>
        <button onClick={() => {
            if (!taskName) return;
            createTask(taskName)
            setTaskName("");
        }}>Añadir Tarea</button>
    </>)
}