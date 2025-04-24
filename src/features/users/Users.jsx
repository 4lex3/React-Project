import { useContext } from "react";
import { UserList } from "./components/UserList";
import { UsersContext } from "./context/UserContext";
import { UserForm } from "./components/UserForm";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

export function UserNav() {

    const { userList } = useContext(UsersContext);



    return (
        <aside className="sidebar card">
            <h2>Usuarios</h2>
            <UserList users={userList} />
            <UserForm/>
            <ThemeSwitcher/>
        </aside>
    )

}