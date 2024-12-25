import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from 'lottie-react';
import { motion } from 'framer-motion'; // Import Framer Motion

// Import your Lottie JSON animations
import animation1 from '../../assets/slide2.json';
import animation2 from '../../assets/slide4.json';
import animation3 from '../../assets/slide3.json';
import animation4 from '../../assets/slide1.json';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
  };

  const slides = [
    {
      title: "Lost Something? Find It Here!",
      description: "Join a community dedicated to reuniting lost belongings with their rightful owners. Your help can make a difference.",
      animation: animation1,
    },
    {
      title: "Helping You Recover What Matters",
      description: "If you’ve lost something valuable, we’re here to help you find it. And if you’ve found it, let us connect you with the person who needs it back.",
      animation: animation2,
    },
    {
      title: "Lost? Found? Let's Connect!",
      description:"Whether you’ve lost an item or found one, this is the place to reunite. Together, we can bring what’s lost back home.",
      animation: animation3,
    },
    {
      title: "Reunite What’s Lost",
      description:"Help others reconnect with what they've lost. A community of finders and seekers, here to make a difference.",
      animation: animation4,
    },
  ];

  return (
    <div className="container mx-auto my-8 bg-white dark:bg-gray-800 rounded-lg">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-6 h-[500px] bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:border dark:border-gray-700">
            <motion.div
              className="flex justify-between items-center h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              <div className="w-1/2 text-left p-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{slide.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{slide.description}</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <Lottie className="w-2/4" animationData={slide.animation} loop={true} />
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
