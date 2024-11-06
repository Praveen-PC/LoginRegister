


import React from "react";
import Display from "./Display";
import Sidenav from "./Sidenav";

const Layouts = () => {
    return (
        <div className="d-flex flex-column flex-md-row">
            {/* Sidenav: Hidden on small screens, shown on medium and up */}
            <div className="d-none d-md-block">
                <Sidenav />
            </div>

            {/* Content area: Takes full width on small screens, side by side on medium and up */}
            <div className="flex-fill d-flex flex-wrap">
                <Display />
            </div>
        </div>
    );
};

export default Layouts;
