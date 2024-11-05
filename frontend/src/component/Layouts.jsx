import React, { useState, useTransition } from "react";
import Display from "./Display";
import Sidenav from "./Sidenav";

const Layouts = () => {
    // const [page,setPage]=useState("DashBoard")

    // const handlePagechange=(newPage)=>{
    //     setPage(newPage)
    // }

    return (
        // <div className="d-flex position-fixed">
        //     <Sidenav onPageChange ={handlePagechange} />
        //     <div className="flex-fill d-flex flex-wrap">
        //         <Display page={page} />
        //     </div>
        // </div>
        <div className="d-flex position-fixed">
            <Sidenav  />
            <div className="flex-fill d-flex flex-wrap">
                <Display  />
            </div>
        </div>
    );
};

export default Layouts;

