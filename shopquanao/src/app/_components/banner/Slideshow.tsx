"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      image: '/img/slide1.jpg',
      title: 'The Great Fashion Collection 2022',
      subtitle: 'Up To 40% Off Final Sale Items. Caught in the Moment!',
      buttonText: 'Show Collection',
    },
    {
      image: '/img/slide2.jpg',
      title: 'Spring Collection 2022',
      subtitle: 'Bright colors and fresh designs for the new season.',
      buttonText: 'Explore Now',
    },
    {
      image: '/img/slide3.jpg',
      title: 'Summer Sale 2022',
      subtitle: 'Catch the hottest deals this summer season.',
      buttonText: 'Shop Now',
    },
  ];

  const clonedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsAnimationComplete(false);
      setInitialLoad(false);
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsAnimationComplete(false);
      setInitialLoad(false);
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  useEffect(() => {
    resetInterval();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        resetInterval();
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (currentSlide === clonedSlides.length - 1) {
        setCurrentSlide(1);
        if (slideshowRef.current) {
          slideshowRef.current.style.transition = 'none';
          slideshowRef.current.style.transform = `translateX(-100%)`;
        }
      }

      if (currentSlide === 0) {
        setCurrentSlide(clonedSlides.length - 2);
        if (slideshowRef.current) {
          slideshowRef.current.style.transition = 'none';
          slideshowRef.current.style.transform = `translateX(-${(clonedSlides.length - 2) * 100}%)`;
        }
      }

      setTimeout(() => {
        setIsAnimationComplete(true);
      }, 50);
    };

    const slideshowEl = slideshowRef.current;
    if (slideshowEl) {
      slideshowEl.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (slideshowEl) {
        slideshowEl.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentSlide, clonedSlides.length]);

  useEffect(() => {
    if (slideshowRef.current) {
      setTimeout(() => {
        if (slideshowRef.current) {
          slideshowRef.current.style.transition = 'transform 0.7s ease-in-out';
        }
      }, 50);
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[770px] overflow-hidden group">
      <div
        ref={slideshowRef}
        className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {clonedSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className={`flex flex-col justify-center h-full px-10 bg-gray-900 bg-opacity-40 ${
                currentSlide === 2 ? 'items-end text-right pr-16' : 'items-start'
              }`}
            >
              <div
                className={`container mx-auto ${
                  isTransitioning || (!isAnimationComplete && !initialLoad) ? 'hidden-text' : 'fly-in'
                }`}
              >
                <p>
                  <Image
                    src="/img/icon/new-collection.png"
                    alt="new collection"
                    width={40}
                    height={40}
                    className="w-8 h-8 inline object-contain"
                  />
                  <span className="mx-2 font-semibold text-grayColor text-xl">New collection</span>
                </p>
                <h2 className="text-6xl my-2 font-medium text-black w-full mb-2">{slide.title}</h2>
                <p className="text-grayColor w-full text-lg mb-4">{slide.subtitle}</p>
                <button className="bg-backgroundPink text-xl text-white py-3 px-6 hover:bg-hoverColor transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-backgroundPink text-white p-2 rounded-full hover:bg-hoverColor transition hidden group-hover:flex"
        onClick={() => {
          prevSlide();
          resetInterval();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-backgroundPink text-white p-2 rounded-full hover:bg-hoverColor transition hidden group-hover:flex"
        onClick={() => {
          nextSlide();
          resetInterval();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Slideshow;