
import './investor.css';
import {Navbar} from '../../components/Investor/Navbar/Navbar';
import {Div} from '../../components/Investor/Div/Div';
import {Div2} from '../../components/Investor/Div2/Div2'
import {Div3} from '../../components/Investor/Div3/Div3'
import logo from '../../components/Investor/img/logo1.webp'
import {Div4} from '../../components/Investor/Div4/Div4'
import {Card} from '../../components/Investor/Card/Card';
import img from '../../components/Investor/img/food.avif'
import img1 from '../../components/Investor/img/scooter.avif'
import img2 from '../../components/Investor/img/plastic.avif'
import vlog1 from '../../components/Investor/img/vlog1.png'
import zomato_logo from '../../components/Investor/img/zomato_logo1.avif'
import hyper_logo from '../../components/Investor/img/hyper_logo.webp'
import feeding_india from '../../components/Investor/img/feeding_india.webp'
import blinkit from '../../components/Investor/img/blinkit.webp'
import logo1 from '../../components/Investor/img/logo1.webp'
import logo2 from '../../components/Investor/img/logo2.webp'
import logo3 from '../../components/Investor/img/logo3.webp'
import logo4 from '../../components/Investor/img/logo4.webp'
import arro from '../../components/Investor/img/arro.webp'
import vlog2 from '../../components/Investor/img/vlog2.png'
import vlog3 from '../../components/Investor/img/vlog3.png'
import Footer from '../../components/home/footer/footer'


// import {Card } from '../../components/Investor/Card/Card';



export function Investor(){

    return(

     <>
       <Navbar/>
       <Div img={logo} zomato_logo={zomato_logo} hyper_logo={hyper_logo} feeding_india={feeding_india} blinkit={blinkit} logo1={logo1} logo2={logo2} logo3={logo3} logo4={logo4} arro={arro}/>
       <Div2/>
       <Div3 img={img} img1={img1} img2={img2} />
       <Div4/>
       <Card  img={vlog1} vlog2={vlog2} vlog3={vlog3}/>
        <Footer/>
       
     </>

        
        

    );
}


   


 

