import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> 
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
