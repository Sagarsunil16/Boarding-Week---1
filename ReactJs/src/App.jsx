import { useState } from "react"
import ControlledAndUncontrolled from "./components/controlledAndUncontrolled"
import Counter from "./components/Counter"
import Display from "./components/Display"
import Greet from "./components/Greet"
import NameInput from "./components/NameInput"
import SecretMessage from "./components/SecretMessage"
import Timer from "./components/Timer"
import UserList from "./components/UserList"
import Welcome from "./components/Welcome"
import ThemeContext from "./context/ThemeContext"
import Header from "./components/Header"
import { AuthProvider } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import CounterWithUC from "./components/CounterWithUC"
import UseMemoExample from "./components/UseMemo"
import UseRefExample from "./components/UseRefExample"
function App() {
 
  const [theme,setTheme] = useState("light")
  const toggleTheme = ()=>setTheme((prev)=>prev=='light'?'dark':'light')

  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <AuthProvider>
        <UseRefExample/>
        <Navbar/>
        <Profile/>
        <UseMemoExample/>
        <Welcome name={"Sagar"}/>
        <Greet name ={"Pavithra"}/>
        {/* <Counter/> */}
        <CounterWithUC/>
        <NameInput/>
        <SecretMessage/>
        <Display/>
        <Timer/>
        <ControlledAndUncontrolled/>
        <UserList/>
      </AuthProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
