import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/product/Product';
import Cart from './component/Cart';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/> 
      <Route path='/dashboard' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
