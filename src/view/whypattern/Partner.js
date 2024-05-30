import React from 'react';
import './Partner.css';
import World from './image/world.webp';
import house from './image/house.webp';
import order from './image/order.webp';


function Partner({ title, subtitle, }) {
    return (
        <>
            <div className="partner">
                <h2 className='title1'>Why should you partner with Zomato?</h2>
                <div className='title'>
                    <p>Zomato enables you to get 60% more revenue, 10x new customers and boost your brand</p>
                    <p>visibility by providing insights to improve your business.</p>
                </div>
                <div className='main'>

                    <div className="card">
                        <div className="card-icon">
                            <img src={World} className='img'/>
                        </div>
                        <div className="card-content">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>

                        <div className='world'><span className='worldcolor'>1000+ cities</span><br></br>
                        <span className='india'>in India</span></div>

                    </div>


                    <div className="card">
                        <div className="card-icon">
                            <img src={house} className='img1' />
                        </div>
                        <div className="card-content">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                        <div className='world'><span className='worldcolor'>3 lakh+</span><br></br>
                        <span className='india'>restaurant listings</span></div>

                    </div>

                    <div className="card">
                        <div className="card-icon">
                            <img src={order} className='img2'/>
                        </div>
                        <div className="card-content">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>

                        <div className='world'><span className='worldcolor'>5.0 crore+</span><br></br>
                        <span className='india'>monthly orders</span></div>

                    </div>

                </div>
            </div>
        </>
    );
};
export default Partner;


