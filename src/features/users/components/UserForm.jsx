import { useContext, useState } from "react"
import { UsersContext } from "../context/UserContext"

export function UserForm() {

    const [name, setName] = useState("")
    const { userList, addUser } = useContext(UsersContext);

    const onCreate = () => {

        if(!name) return;

        addUser({id: userList.length + 1, name: name});
        setName("");
    };

    return (
        <>
            <input type="text" id="newUserInput" value={name} placeholder="Nuevo usuario..." onChange={(e) => setName(e.target.value)} ></input>
            <button onClick={onCreate}>Añadir Usuario</button>
        </>
    )
}