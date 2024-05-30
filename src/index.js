import React from 'react';
import Resto from './Resto.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Steps from './components/Steps';
import Partner from '../../components/Addrestaurant/whypattern/Partner';
import Listed from '../../components/Addrestaurant/listed/Listed';
// import Product from '../../components/Addrestaurant/our/Product';
 import Sign from '../../components/Addrestaurant/Singup/Sing';
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
    

    </>


 );
}
export default Resto;



