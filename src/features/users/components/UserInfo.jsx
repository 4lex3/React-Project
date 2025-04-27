import { useContext } from "react";
import { CurrentUserContext } from "../../../core/context/CurrentUserContext";

/* eslint-disable react/prop-types */
export function UserInfo({ user }) {


    const { setCurrentUser } = useContext(CurrentUserContext);
    const deselectUser = () => setCurrentUser(null);

    return (
        <div id="userInfo">
            <hr />
            <p id="userName">{user.username}</p>
            <p id="userStats">Tareas: {user.tasksDone} / {user.totalTasks}</p>

            <button onClick={ deselectUser }>Deseleccionar</button>
        </div>

    );
}
