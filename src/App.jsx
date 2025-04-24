import { CurrentUserContextProvider } from "./core/context/CurrentUserContext"
import { TaskContextProvider } from "./features/tasks/context/TasksContext"
import { Tasks } from "./features/tasks/Tasks"
import { UsersContextProvider } from "./features/users/context/UserContext"
import { UserNav } from "./features/users/Users"


function App() {

  return (
    <>

      <div className="app">

        <CurrentUserContextProvider>
          <UsersContextProvider>
            <UserNav />
          </UsersContextProvider>

          <main className="main">
            <TaskContextProvider>
              <Tasks />
            </TaskContextProvider>
          </main>
        </CurrentUserContextProvider>
      </div>

    </>
  )
}

export default App
