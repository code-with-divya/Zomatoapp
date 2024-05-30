import React from 'react';
import './MainContent.css';
import greenstik from './image/greenstik.png';

function MainContent() {
  return (
    <>
      <div className="div">
        <h2 className='title'>Get started with online ordering</h2>
        <h4 className='text'>Please keep the documents ready for a smooth signup</h4>
        

        {/* first */}
        <div className='div1'>
          <div className='div2' >
            <div >
              <img className='imgtick' src={greenstik} />
            </div>
            <div>
              <p className='document'>FASSAI license copy <span className='apply'>(apply now)</span></p>
            </div>
          </div>
          <div className='div2'>
            <div>
              <img className='imgtick1' src={greenstik} />
            </div>
            <div>
              <p className='document1'>PAN card copy</p>
            </div>
          </div>
        </div>



        {/* second */}
        <div className='div1'>
          <div className='div2' >
            <div >
              <img className='imgtick' src={greenstik} />
            </div>
            <div>
              <p className='document'>Regular GSTIN (apply now) <span className='apply'>(apply now)</span></p>
            </div>
          </div>
          <div className='div2'>
            <div>
              <img className='imgtick1' src={greenstik} />
            </div>
            <div>
              <p className='document2'>Bank account detail</p>
            </div>
          </div>
        </div>



         {/* third */}
         <div className='div1'>
          <div className='div2' >
            <div >
              <img className='imgtick' src={greenstik} />
            </div>
            <div>
              <p className='document'>Your restaurant menu</p>
            </div>
          </div>
          <div className='div2'>
            <div>
              <img className='imgtick1' src={greenstik} />
            </div>
            <div>
              <p className='document3'>Dish images for top 5 items</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
export default MainContent;
