import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pawan from './image/PawanKumar.png';
import tushar from './image/Tushar..png'
import './Carousal.css';

function Carousal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='do'>
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='imm' src={pawan}/>
       
      </Carousel.Item>
      <Carousel.Item>
        <img className='imm' src={tushar} />
        
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Carousal;