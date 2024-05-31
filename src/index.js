import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Home from './view/home/home';
import { Login } from './view/login/login';
import { Signup } from './view/signup/signup';
import { Login2 } from './view/login/Login2/Login2';
import { Investor } from './view/Investor/investor';
import { Restorant } from './view/addresto/Resto';





const routes=createBrowserRouter([
  {
      path:"/",
      element:<Home/>
  
  },
  {
      path:'/investor',
          element:<Investor/>
  },
  {
      path:"/Resto",
      element:<Restorant/>
  },
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
 

