/* eslint-disable react/prop-types */
export function TaskList({ taskList, deleteTask, markTaskAsDone, updateTask }) {



    return (<ul id="taskList">

        {
            taskList.map(task => (
                <li key={task.id}>
                    <span onClick={markTaskAsDone}>{task.title}</span>
                    <div className="actions">
                        <button onClick={updateTask}>✏️</button>
                        <button onClick={deleteTask}>🗑️</button>
                    </div>
                </li>
            ))
        }

    </ul>)
}