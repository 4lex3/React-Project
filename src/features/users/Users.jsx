import { useContext } from "react";
import { UserList } from "./components/UserList";
import { UsersContext } from "./context/UserContext";
import { UserForm } from "./components/UserForm";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { UserInfo } from "./components/UserInfo";
import { CurrentUserContext } from "../../core/context/CurrentUserContext";

export function UserNav() {

    const { userList } = useContext(UsersContext);
    const { currentUser } = useContext(CurrentUserContext)


    return (
        <aside className="sidebar card">
            <h2>Usuarios</h2>
            <UserList users={userList} />
            <UserForm />
            {currentUser && <UserInfo user={currentUser}></UserInfo>}
            <ThemeSwitcher />
        </aside>
    )

}