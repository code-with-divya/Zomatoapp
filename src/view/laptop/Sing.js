import React from 'react';
import './Sign.css';
import laptop from './image/desktop.avif';
import chilee from './image/chilee.jpg'

function Sign() {
  return (
    <>
      <div className="features-container">
        <h2>What do you get on sign-up</h2>
        <p>Zomato Partner Platform helps you take your business to new heights instantly with no hassle and 100% transparency!</p>
        <div className="feature">
          <div className="feature-icon">1</div>
          <div className="feature-text">
            <h3>Restaurant Partner app</h3>
            <p>Manage all your orders on your smartphone with our Android app</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">2</div>
          <div className="feature-text">
            <h3>Restaurant Partner web dashboard</h3>
            <p>Manage all your orders on your desktop or laptop</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">3</div>
          <div className="feature-text">
            <h3>API integration</h3>
            <p>Manage all your orders on your existing Point of Sale (POS) or third-party software</p>
          </div>
        </div>
        <div className="feature-image">
          <img src={laptop} alt="Dashboard Screenshot" />
        </div>



        <div className='divya'>

          <img src={chilee} />
          <div className='great'>
            <h1>Start your journey with Zomato</h1>
            <h2>Create your restaurant page and register for online ordering</h2>
          </div>
          <button className='btn'>Start Now</button>
        </div>


        <div className="qa-section">
          <h1>Frequently asked questions</h1>
        </div>
        <div className='ask'>
            <h2 className='asks'>What will Zomato charge me for creating a page on its platform?</h2>
        </div>
        <div className='ask'>
            <h2 className='asks'>What all documents are required for registering on online ordering?</h2>
        </div>
        <div className='ask'>
            <h2 className='asks'>I have a large fleet of delivery boys, why should I use Zomato’s delivery service?</h2>
        </div>
        <div className='ask'>
            <h2 className='asks'>What happens if the average order value of Zomato orders is very low</h2>
        </div>
      </div>

      </>
      );
}

      export default Sign;
