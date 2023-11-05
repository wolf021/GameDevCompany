
import React, { useState, useEffect } from 'react';
import Button from '../Button';



const HeroSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleHeroChange = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to automatically change the image
  const autoChangeImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);

  if (nextIndex === 0) {
    // If the next index is 0, it means we have reached the last image, so reset to the first image.
    setCurrentImageIndex(0);
  }
  };

  // Set an interval to automatically change the image every 5 seconds (you can adjust the duration)
  useEffect(() => {
    const interval = setInterval(autoChangeImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex, images]);

  return (
    <div className='relative w-full md:h-[90vh] h-[40vh]   overflow-hidden'>
      <div
        className='image-container  '
        style={{
          transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: `calc(100% / ${images.length})`,
              height: "100%",
              position: 'relative',
            }}
          >
            <img
              src={`${image.image}`}
              alt="Hero"
              className='w-full h-[40vh] md:h-[90vh] bg-slate-200'
              loading='lazy'
              
            />
            <div className='absolute  box-border  text-center p-3 md:p-6 rounded-xl  flex flex-col items-center gap-3 md:gap-6 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-700 bg-opacity-40 w-max text-white  font-bold'>
              <div className=' text-2xl md:text-5xl w-[80%] text-white'>

              {image.title}
              </div>
              <p className='md:text-lg text-sm' >Hontarty has an Awesome Range of Furniture.</p>
              <Button>Get Started</Button>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute flex justify-center space-x-6 left-1/2 transform -translate-x-1/2 bottom-[2rem] w-max'>
        {images.map((image, index) => (
         <button
         key={index}
         onClick={() => handleHeroChange(index)}
         className={`transition-opacity w-[1rem] h-2 rounded focus:outline-white ${
           currentImageIndex === index ? 'bg-orange-400' : 'bg-white'
         }`}
       >
         {/* You can add button labels or icons here */}
       </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
