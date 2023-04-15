import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import AuthLayout from "./pages/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {
                path: 'signin',
                element: <Signin/>
            },
            {
                path: 'signup',
                element: <Signup />,
            }
        ]
    },
]);

function App() {

    return (
        <React.Fragment>
            <RouterProvider router={router}/>
        </React.Fragment>
    );
}

export default App;
