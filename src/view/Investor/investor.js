
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



export function Investor(propes){

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


            <div className='heading'>
                <h1 className='H2'><b>Our core offerings</b></h1>
            </div>

            <div className='offering_card'>

                <h1 className='heading1'><b>Food Delivery</b></h1>

                <div className='info'>
                    <p>Food ordering and delivery platform where <br />customers can search and discover local <br />restaurants, order food, and have it delivered<br /> reliably and quickly</p>
                </div>

                <div>
                    <img src={propes.img} className='zomato' />
                </div>
                <div className='info2'>Q4FY24</div>
                <hr />

                <div className='flex'>
                    <div>
                        <h1 className='heading2'><b>INR 8,439 crore</b></h1>
                        <p className='info3'>Food delivery GOV</p>
                    </div>
                    <div>
                        <h1 className='heading2'><b>19.0 million</b></h1>
                        <p className='info3'>Avg. monthly transacting customers</p>
                    </div>
                </div>

                <div className='offering_card1'>

                    <h1 className='heading1'><b>Quick commerce</b></h1>

                    <div className='info'>
                        <p>Quick commerce platform where customers can <br />order everyday needs across thousands of <br />products and have them delivered within minutes</p>
                    </div>

                    <div>
                        <img src={propes.img1} className='blinkit' />
                    </div>
                    <div className='info2'>Q4FY24</div><br />
                    <hr />

                    <div className='flex1'>
                        <div>
                            <h1 className='heading3'><b>INR 4,027 crore</b></h1>
                            <p className='info4'>Quick commerce GOV</p>
                        </div>
                        <div>
                            <h1 className='heading3'><b>6.4 million</b></h1>
                            <p className='info4'>Avg. monthly transacting customers</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='flex'> 
            <div className='offering_card2'>

                <h1 className='heading1'><b>Hyperpure</b></h1>

                <div className='info'>
                    <p>Hyperpure is a B2B platform supplying high<br /> quality food ingredients and other products</p>
                </div>

                <div>
                    <img src={propes.img2} className='hyper' />
                </div>
                <div className='info2'>Q4FY24</div>
                <hr className='hr1'/>

                    <div className='flex3'>
                    <div>
                        <h1 className='heading2'><b>INR 951 crore</b></h1>
                        <p className='info3'>Hyperpure revenue</p>
                    </div>
                    <div>
                        <h1 className='heading3'><b>8</b></h1>
                        <p className='info4'># of cities present in</p>
                    </div>
                    </div>
                </div>

                <div className='offering_card3'>

                    <h1 className='heading1'><b>Going-out</b></h1>

                    <div className='info'>
                        <p>Going-out enables discovery and ticketing of<br /> offline experiences such as in-restaurant dining <br />and live events such as Zomaland</p>
                    </div>

                    <div>
                        <img src={propes.img3} className='blinkit' />
                    </div>
                    <div className='info2'>Q4FY24</div><br />
                    <hr />

                    <div className='flex1'>
                        <div>
                            <h1 className='heading3'><b>INR 1,069 crore</b></h1>
                            <p className='info4'>Going-out GOV</p>
                        </div>
                        <div>
                            <h1 className='heading3'><b>INR 93 crore</b></h1>
                            <p className='info4'>Revenue</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='p1'>
        <h1 className='h1'><b>beyond bussiness</b></h1>
        <p className='p2'>At Zomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG<br/> update outlines the many ways in which we make the impact of our business more sustainable and help make the<br /> world a better place for everyone. Some of our key sustainability initiatives include:</p>
     </div>
      <div className='c2'>
     <div className='c1'>

        <img src={propes.img} className='image'/>
        <h1><b>Feeding India</b></h1>
        <p className='p3'>A not-for-profit organisation, designing<br/> interventions to reduce hunger and<br/> malnutrition among underserved<br/> communities in India</p>

     </div>

     <div className='c3'>
     <img src={propes.img1} className='image'/>
        <h1><b>Net zero emissions</b></h1>
        <p className='p3'>Starting FY24, we have taken on a goal<br/> to achieve Net Zero emissions across<br/> Zomato’s food delivery value chain by<br/> 2033</p>
     </div>
     
     <div className='c4'>
     <img src={propes.img2} className='image'/>
        <h1><b>Reducing plastic waste</b></h1>
        <p className='p3'>Trying to reduce Zomato’s plastic waste by ensuring completely plastic neutral deliveries since April 2022</p>
     </div>
    </div>

    <div>
    <p className='p4'>See the latest ESG update</p>
    </div>

 

    <div>
        <h1 className='corpo' ><b>Corporate announcements</b></h1>
        </div>

        <hr/>

        <div className='corpo1'>
            <p>17 May 2024</p>
            <p className='may'>Zomato - Intimation of transcript of Earnings call dated May 13, 2024</p>
            <p className='read'>Read more ▶</p>
        </div>

        <hr/>

        <div className='corpo1'>
        <p>15 May 2024</p>
            <p className='may'>Zomato - Extract of newspaper publication of financial result of Q4FY24</p>
            <p className='read'>Read more ▶</p>
        </div>
        <div>
            <button className='btn'>See all annocement</button>
        </div>

        <div><h1 className='block'><b>from Our Blogs</b></h1></div>
     </>

        
        

    );
}


   


 

