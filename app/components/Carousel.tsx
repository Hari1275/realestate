'use client';

import React, { useState, useEffect } from 'react';
function Carousel() {
  const images = ['hero.png', 'hero.png', 'hero.png', 'hero.png', 'hero.png'];

  const [activeIndex, setActiveIndex] = useState(0);

  // Define the interval time (in milliseconds) for auto-scrolling
  const intervalTime = 5000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div id='gallery' className='relative w-full' data-carousel='slide'>
      {/* Carousel wrapper */}
      <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? '' : 'hidden'
            } duration-700 ease-in-out relative w-full`}
            data-carousel-item={index === activeIndex ? '' : 'active'}
          >
            <img
              src={image}
              className='absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt=''
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type='button'
        className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-prev
        onClick={goToPreviousSlide}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-next
        onClick={goToNextSlide}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
