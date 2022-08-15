import React, {useState} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import { BotonUp } from './botonGoUp-elements';

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (

    <BotonUp id='button-up'> 
    <AiOutlineArrowUp onClick={scrollToTop}
    style={{display: visible ? 'inline' : 'none'}}/>
    </BotonUp>
  );
}
  
export default ScrollButton;