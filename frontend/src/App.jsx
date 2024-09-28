import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  const token=localStorage.getItem('token')
  return (
    <>
    <BrowserRouter>
    <Routes>
      {token ?(      <Route path="/login" element={<Login/>}/>
):(      <Route path='/dashboard' element={<Home/>}/>
)}
      <Route path="/register" element={<Register/>}/> 
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
