import { createContext, useState } from "react";

export const UsersContext = createContext([]);


/*
? Object example:

[
    {userId: 1, name: "kris"}
    ...
]
*/


// eslint-disable-next-line react/prop-types
export function UsersContextProvider({ children }) {

    const [userList, setUserList] = useState([]);
    const addUser = (newUser) => setUserList((prevUserList) => [...prevUserList, newUser]);

    return (
        <>
            <UsersContext.Provider value={{ userList, addUser }}>
                {children}
            </UsersContext.Provider>
        </>
    )
}