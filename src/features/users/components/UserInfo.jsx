/* eslint-disable react/prop-types */
export function UserInfo({ user }) {


    return (
        <div id="userInfo">
            <hr/>
            <p id="userName">{user.name}</p>
            <p id="userStats">Tareas: {user.tasksDone} / {user.totalTasks}</p>

            <button>Deseleccioanr</button>
        </div>

    );
}
