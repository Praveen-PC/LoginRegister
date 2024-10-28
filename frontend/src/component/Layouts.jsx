

import React from "react";
import Display from "./Display";
import Sidenav from "./Sidenav";

const Layouts = () => {
    return (
        <div className="d-flex">
            <Sidenav />
            <div className="flex-fill">
                <Display />
            </div>
        </div>
    );
};

export default Layouts;

