import React,{useState} from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const ImageSlider = ({slides , parentWidth}) => {
  const timeRef = useRef(null);
  const [currentIndex, setcurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative'
  };

  const slideStyles = currentIndex < slides.length && slides[currentIndex]
  ? {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${slides[currentIndex].url})`
    }
  : {};

  const leftArrowStyles={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '40px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  };
  const rightArrowStyles={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '40px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  };


  const goToPrevious = () => {
    const isFirstSlide = currentIndex ===0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  },[currentIndex,slides]);

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    // zIndex:1,
    
  };

  const dotStyles1 = {
    right: '48%',
    position: 'absolute',
    bottom: '0%',
   
 
    fontSize: '20px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    margin: '0px 3px',
  }
  const dotStyles2 = {
    right: '50%',
      position: 'absolute',
    bottom: '0%',
   
 
    fontSize: '20px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    margin: '0px 3px',
  }
  const dotStyles3 = {
    right: '52%',
    position: 'absolute',
    bottom: '0%',
   
 
    fontSize: '20px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    margin: '0px 3px',
  }
  // const dotStyles = {
  //   position: 'absolute',
  //   bottom: '0%',
   
 
  //   fontSize: '20px',
  //   color: '#fff',
  //   zIndex: 1,
  //   cursor: 'pointer',
  //   margin: '0px 3px',
  //   // cursor: 'pointer',
  //   // fontSize: '20px',
    
  // };

  const gotoSlide = slideIndex => {
    setcurrentIndex(slideIndex);
  };

  const getSlidesStyleWidthBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`
  });

  const slidesContainerStyles = {
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s'
  };

  const getSlidesContainerWithWidth =() => ({
    ...slidesContainerStyles,
    width:parentWidth*slides.length,
    transform: `translateX(${-currentIndex * parentWidth}px)`
  });

  const slidesContainerOverflowStyles = {
    overflow: 'hidden',
    height: '100%'
  };

  useEffect(() => {
    if(timeRef.current){
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      goToNext();
    },3000)

    return () => clearTimeout(timeRef.current)
  }, [goToNext]);
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>⧀</div>
      <div style={rightArrowStyles} onClick={goToNext}>⧁</div>
      <div style={dotsContainerStyles}>
      <div style={dotStyles1} onClick={() => gotoSlide(2)}>◉</div>
      <div style={dotStyles2} onClick={() => gotoSlide(1)}>◉</div>
      <div style={dotStyles3} onClick={() => gotoSlide(0)}>◉</div>
      </div>
      
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerWithWidth()}>
          {slides.map((_,slideIndex) => (
            <div key={slideIndex} style={getSlidesStyleWidthBackground(slideIndex)}></div>
          ))}
        </div>
      </div>
      {/* <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div style={dotStyles} key={slideIndex} onClick={() => gotoSlide(slideIndex)}>◉</div>
        ))}
      </div> */}
    </div>
 

  )
}

export default ImageSlider;