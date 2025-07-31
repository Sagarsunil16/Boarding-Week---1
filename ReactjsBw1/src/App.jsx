import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Basic from './pages/Basic'
import Home from './components/Home'
import About from './components/About'
import UserDetails from './components/UserDetails'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Basic/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/details/:id' element={<UserDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
