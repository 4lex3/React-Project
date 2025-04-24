import { useContext } from "react"
import { CurrentUserContext } from "../../../core/context/CurrentUserContext"

/* eslint-disable react/prop-types */
export function UserList({ users }) {

    const { setCurrentUser } = useContext(CurrentUserContext)


    return (
        <ul id="userList">
            {
                users.map(user => (
                    <li key={user.id} style={{ cursor: "pointer" }} onClick={() => setCurrentUser({ currentUserId: user.id, username: user.name })}>{user.name}</li>
                ))
            }
        </ul>
    )

}