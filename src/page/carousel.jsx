
import React from 'react';


const Carousel = () => {
  const handleButtonClick = (projectName) => {
    console.log(`Clicked on ${projectName} button`);
    
  };

  return (
    <div className="p-container">
      <div className="p-carousel">
      <div className='p-box'>
              <button onClick={() => handleButtonClick('Portofolio')}>
                <span>Loading ...</span>
              </button>
          </div>
        
          <div className='p-box'>
              <button onClick={() => handleButtonClick('Portofolio')}>
                <span>Loading ...</span>
              </button>
          </div>
        
        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>

        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>

        <div className="p-box">
          <button onClick={() => handleButtonClick('Loading ...')}>
            <span>Loading ...</span>
          </button>
        </div>
        
        <div className="p-box">
          <button onClick={() => handleButtonClick('Project 6')}>
            <span>Loading ...</span>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Carousel;
