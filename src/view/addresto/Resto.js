import React from 'react';
import Resto from './Resto.css';
import Header from './../addrestaurant/Header';
import MainContent from '../middles/MainContent';
import Steps from './../steps/Steps';
import Partner from './../Whypartner/Partner'
import Listed from './../listed/Listed';
// import Product from '../../components/Addrestaurant/our/Product';
import Sign from './../Signs/Sing';
import Carousal from '../Carousal/Carousal';
// import Happy from '../../components/Addrestaurant/Happy/Happy';




export function Resto() {
  return (
  <>

    
      <Header logo={background} />
       <MainContent imgtick={greenstick} /> 
      <Partner  img={World} img1={house} img2={order}/>
      <Steps image={note} image1={scoty} image2={order}/>
      <Listed />
      {/* <Product/>   */}
      <Sign feature-image={laptop}/>  
      {/* <Happy/>   */}

      {/* <Carousal/> */}

    
    

    </>


 );
}


