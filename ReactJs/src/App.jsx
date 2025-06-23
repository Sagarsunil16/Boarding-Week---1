import ControlledAndUncontrolled from "./components/controlledAndUncontrolled"
import Counter from "./components/Counter"
import Display from "./components/Display"
import Greet from "./components/Greet"
import NameInput from "./components/NameInput"
import SecretMessage from "./components/SecretMessage"
import Timer from "./components/Timer"
import UserList from "./components/UserList"
import Welcome from "./components/Welcome"
function App() {
 

  return (
    <>
      <Welcome name={"Sagar"}/>
      <Greet name ={"Pavithra"}/>
      <Counter/>
      <NameInput/>
      <SecretMessage/>
      <Display/>
      <Timer/>
      <ControlledAndUncontrolled/>
      <UserList/>
    </>
  )
}

export default App
