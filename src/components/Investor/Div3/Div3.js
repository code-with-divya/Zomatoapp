import './Div3.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from '../img/food.avif'
import img1 from '../img/scooter.avif'
import img2 from '../img/plastic.avif'



export function Div3(propes){
    return(
        <>

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


        </>
    )
}