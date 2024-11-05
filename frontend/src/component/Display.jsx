import React, { useState ,useEffect} from 'react'
import Product from './product/Product'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Display = () => {
  const [allproduct,setAllproduct]=useState([])
  const navigate=useNavigate()
 const fetchProduct=async()=>{
  try{
    const response=await axios.get('http://localhost:5000/api/allproduct')
    setAllproduct(response.data)
  }
  catch(err){
    console.log(err)
  }

 }
 useEffect(()=>{
    fetchProduct()
 },[allproduct])

  const handlecart=async(product)=>{
    try{
      const response= await axios.post('http://localhost:5000/api/addcart',
        {productname:product.productname,
          productimage:product.productimage,
          productprice:product.productprice})
          console.log(response.data)
          navigate('/cart')
    }
    catch(err){
      console.log(err)
    }
    
  }
  return (
    <>
    <div className='container'>
      <h3 className='mt-3 fw-bold'>DashBoard</h3>
      <div className=" d-flex flex-wrap justify-content-center">
  {allproduct.map((value) => (
    <div className="border p-3 rounded m-2 text-center shadow bg-body-tertiary" key={value.id} style={{ width: '15rem' }}>
      <img 
        src={value.productimage} 
        alt={value.productname} 
        className="img-fluid" 
        style={{ maxHeight: '200px', objectFit: 'cover' }} 
      />      
      <div className="d-flex gap-5 justify-content-center mt-3">
        <div>
        <h5>{value.productname}</h5>
        <h6>${value.productprice.toFixed(2)}</h6>
        <button className='btn btn-info' onClick={()=>handlecart(value)}>Add to Cart </button>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    

    </>
  
  )
}

export default Display