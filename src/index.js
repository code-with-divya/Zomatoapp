import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Home from './view/home/home';
import { Login } from './view/login/login';
import { Signup } from './view/signup/signup';
import { Login2 } from './view/login/Login2/Login2';
// import { Investor } from './view/Investor/investor';



const routes=createBrowserRouter([
  {
      path:"/",
      element:<Home/>
  
  },
  // {
  //     path:'/investor',
  //     element:<Investor/>
  // },
  // {
  //     path:"/Resto",
  //     element:<resto/>
  // }
  {
      path:'/log',
      element:<Login/>
  },
  {
    path:'/login',
    element:<Login2/>
},
  {
    path:'/signup',
    element:<Signup/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
<RouterProvider router={routes}/>
  </>
);
 
