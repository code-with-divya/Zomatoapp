import React from 'react';
import './Header.css';
import ReactDOM from 'react-dom/client';
import background from './image/background.webp';
function Header() {

  return (
    <>

      <div className='background'>
        <header className="header">
          <h1 className='zoma'>Zomato</h1>
          <p className='busi'>for business</p>
``
          <h1 className='zomato1'>Advertise</h1>
          {/* <button className='log'>Login</button>  */}
          <div className="header-content">
            <div className='para'>
              <h1>Partner with Zomato</h1>
              <h1>at 0% commission for the 1st month!</h1>
              <h3>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</h3>
            </div>

            <div className='button'>
              
              <button className='A'>Register your restaurant</button>
              <button className='B'>Login to view your existing restaurants</button>
            </div>
            <p className='need'>Need help? Contact +91 97-38-38-38-38</p>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;

