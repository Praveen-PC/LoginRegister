
import React from 'react'
import { NavLink } from 'react-router-dom'
import Product from './product/Product';


const Sidenav = () => {
    const sidenav = [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Product', link: '/product' },
        { name: 'Overall', link: '/overall' },
        { name: 'About', link: '/about' },
        { name: 'Help', link: '/help' },
    ];
  return (
    <>
    <div className="bg-dark p-4 vh-100">
           <ul className='list-unstyled '>
        {sidenav.map((val,index)=>(
             <li key={index} className="mb-4" >
             <NavLink 
                 to={val.link}
                 style={{textDecoration:'none',color:"white",padding:'30px'}}  
                //  onClick={()=>onPageChange(val.name)}  
                 className={({ isActive, isPending }) =>
                     isPending ? 'text-gray-400' : isActive ? 'bg-gray-700 p-2 rounded block ' : 'block p-2 hover:bg-gray-700'
                 }
             > {val.name}
             </NavLink>
         </li>
            
        ))}
    </ul>
    </div>
 
    </>
  )
}

export default Sidenav