import React from "react";
import {Outlet} from "react-router-dom";

const AuthLayout = props => {
    return <React.Fragment>
        <div className="position-absolute w-100 vh-100 d-flex justify-content-center align-items-center">
            <Outlet/>
        </div>
    </React.Fragment>
};

export default AuthLayout;