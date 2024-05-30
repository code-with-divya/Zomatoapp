
import './Investor.css';
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


// import {Card } from '../../components/Investor/Card/Card';



export function Investor(){

    return(

     <>
       <Navbar/>
       
   
            <div class="color">

                <div class="head">

                    <h1>Better food for more people</h1>
                    <img src={propes.zomato_logo} alt="Zomato Logo" class="logo3" />
                    <img src={propes.hyper_logo} alt="hyper Logo" class="logo1" />

                    <hr />

                    <h1>Instant commerce indistinguishable from magic</h1>
                    <img src={propes.blinkit} alt="blinkit" class="logo1" />

                    <hr />

                    <h1>Make India malnutrition free</h1>
                    <img src={propes.feeding_india} alt="feeding india" class="logo1" />

                </div>


                <div className='card'>

                    <h1 className='H1'><b>Company Overview</b></h1>
                    <div className='box'>
                         <div className='img_color'>
                        <img src={propes.logo1} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Presentation</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>

                        <div>
                            <h1 className='H1'><b>Q4FY24 results</b></h1>

                            <div className='see'>
                                     <p>see all</p>
                            </div>
                        </div>
                     
                        <div className='box1'>
                        <div className='img_color'>
                        <img src={propes.logo2} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Shareholders' Letter</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>
                       
                    
                         </div>
                         
                         <div className='box2'>
                         <div className='img_color'>
                        <img src={propes.logo3} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Earnings Call Replay</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>

                        </div>

                        <div className='box3'>
                        <div className='img_color'>
                        <img src={propes.logo4} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Earnings Call Transcript</b></h3>
                        <img src={propes.arro} alt='arrow' className='arrow'/>

                         </div>


                    </div>

                </div>

            </div>


            
 
     </>

        
        

    );
}


   


 

