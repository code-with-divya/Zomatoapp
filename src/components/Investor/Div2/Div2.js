import './Div2.css'
import img from '../img/zomato_logo1.avif'
import img1 from '../img/blinkit_logo1.avif'
import img2 from '../img/hyperpure_logo1.avif'
import img3 from '../img/zomato_logo1.avif'



export function Div2() {

    return (
        <>

            <div className='heading'>
                <h1 className='H2'><b>Our core offerings</b></h1>
            </div>

            <div className='offering_card'>

                <h1 className='heading1'><b>Food Delivery</b></h1>

                <div className='info'>
                    <p>Food ordering and delivery platform where <br />customers can search and discover local <br />restaurants, order food, and have it delivered<br /> reliably and quickly</p>
                </div>

                <div>
                    <img src={img} className='zomato' />
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
                        <img src={img1} className='blinkit' />
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
                    <img src={img2} className='hyper' />
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
                        <img src={img3} className='blinkit' />
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

        </>
    )
}