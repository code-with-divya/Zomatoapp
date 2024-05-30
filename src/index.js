import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Home from './view/home/home';
// import { Investor } from './view/Investor/Investor';

const routes=createBrowserRouter([
  {
      path:"/",
      element:<Home/>
  
  },
  // {
  //     path:'/Investor',
  //     element:<Investor/>
  // },
  // {
  //     path:"/Resto",
  //     element:<resto/>
  // }
  // {
  //     path:'/log',
  //     element:<Log/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
<RouterProvider router={routes}/>
  </>
);
 
