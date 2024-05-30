import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Addrestaurant/Addrestoheader/Header";
import MainContent from './components/Addrestaurant/middles/MainContent';
import Steps from './components/Addrestaurant/steps/Steps';
import Partner from './components/Addrestaurant/whypattern/Partner';
import Listed from './components/Addrestaurant/listed/Listed';
// import Product from './components/Addrestaurant/our/Product';
import Sign from './components/Addrestaurant/Singup/Sing';
// import Happy from './components/Addrestaurant/Happy/Happy';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <>
    <Header/>
    <MainContent/>
    <Partner/>
    <Steps/>
    <Listed/>
    {/* <Product/> */}
    <Sign/> 
    {/* <Happy/> */}
  
    </>
)


    