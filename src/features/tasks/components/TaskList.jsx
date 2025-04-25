/* eslint-disable react/prop-types */
export function TaskList({ taskList, deleteTask, markTaskAsDone, updateTask }) {



    return (<ul id="taskList">

        {
            taskList.map(task => (
                <li key={task.id} className={task.done ? "completed": ""}>
                    <span onClick={() => markTaskAsDone(task.id)}>{task.title}</span>
                    <div className="actions">
                        <button onClick={() => updateTask(task.id)}>✏️</button>
                        <button onClick={() => deleteTask(task.id)}>🗑️</button>
                    </div>
                </li>
            ))
        }
    </ul>)
}