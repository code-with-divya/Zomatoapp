import React from 'react';
import './Steps.css';
import note from './image/note.png';
import scoty from './image/scoty.webp';
import order from './image/resiveorder.webp';



function Work({ title, subtitle, }) {
    return (
        <>
         
            <div className='container'>
            <h1 className='work'>How it Work ?</h1>  
              

                <div className='big'>

                    <div className="cards">
                        <div className="card-icon">
                            <img src={note} className='image' />
                            <h1 className='step'>Step1</h1>
                            <h2 className='step2'>Create your page on Zomato</h2>
                            <h3 className='step3'>Help users discover your place by creating a listing on Zomato</h3>
                        </div>
                        <div className="card-content">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                    </div>


                    <div className="cards">
                        <div className="card-icon">
                            <img src={scoty} className='image1' />
                            <h1 className='step'>Step2</h1>
                            <h2 className='step2'>Register for online ordering</h2>
                            <h3 className='step3'>And deliver orders to millions of customers with ease</h3>
                        </div>
                        <div className="card-content">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>

                    </div>

                    <div className="cards">
                        <div className="card-icon">
                            <img src={order} className='image2' />
                            <h1 className='step'>Step3</h1>
                            <h2 className='step2'>Start receiving orders online</h2>
                            <h3 className='step3'>Manage orders on our partner app, web dashboard or API partners</h3>
                        </div>
                        <div className="card-content">
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
export default Work; 