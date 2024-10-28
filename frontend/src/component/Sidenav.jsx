
import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidenav = () => {
    const sidenav = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Insight', path: '/insight' },
        { name: 'Overall', path: '/overall' },
        { name: 'About', path: '/about' },
        { name: 'Help', path: '/help' },
    ];
  return (
    <>
    <div className="bg-dark p-4 vh-100">
           <ul className='list-unstyled '>
        {sidenav.map((val,index)=>(
             <li key={index} className="mb-4" >
             <NavLink 
                 to={val.path}
                 style={{textDecoration:'none',color:"white",padding:'30px'}}    
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