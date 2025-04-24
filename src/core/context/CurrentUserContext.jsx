import { createContext, useState } from "react";

export const CurrentUserContext = createContext({});



/*
    ? Object Example

    {
        currentUserId: 1,
        username: "kris"
        totalTasks: 1
        tasksDone: 2

    }
*/


// eslint-disable-next-line react/prop-types
export function CurrentUserContextProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);

    return <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
    </CurrentUserContext.Provider>

}

