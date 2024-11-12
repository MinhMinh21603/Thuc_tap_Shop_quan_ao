"use client";

import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
const DealsOfTheDay = () => {
  // const calculateTimeLeft = () => {
  //   const year = new Date().getFullYear();
  //   const difference = +new Date(`12/31/${year}`) - +new Date();
  //   const timeLeft: any = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   setTimeLeft(calculateTimeLeft());
  // }, []);

  // const timerComponents: JSX.Element[] = [];

  // Object.keys(timeLeft).forEach((interval, index) => {
  //   timerComponents.push(
  //     <React.Fragment key={index}>
  //       <div className="time-box flex flex-col items-center justify-center w-20 h-20 bg-white text-black border-2 border-gray-500 rounded-md">
  //         <span className="time-value text-2xl font-bold">{timeLeft[interval]}</span>
  //         <span className="time-label text-lg">{interval}</span>
  //       </div>
  //       {index < Object.keys(timeLeft).length - 1 && (
  //         <span className="text-black mx-2 text-5xl flex items-center justify-center">:</span>
  //       )}
  //     </React.Fragment>
  //   );
  // });
  //khai báo biến thời gian 
  // lưu trữ biến thời gian 
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDay(now.getDate());
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
    }, 1000) // cập nhật sau 1s
    // cập nhật liên tục theo thời gian thực 
    // cleader xóa và dọn dẹp interval cũ 
    return () => clearInterval(intervalId);
  })
  return (
    <div className="container mx-auto px-8 py-6">
      <div className="relative bg-gray-500 p-10 text-white text-left mb-8 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/1531x500?text=1531x500"

          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg"
          style={{ zIndex: 1 }}
        />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-4 text-pink-500">Hurry up and Get 25% Discount</h1>
          <h2 className="text-5xl font-bold mb-4 text-black">Deals Of The Day</h2>
          <p className="mb-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
          {/* <div className="mb-8 flex space-x-3">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div> */}
          <div className='flex p-4 gap-4 '>
            <span className='w-20 h-20 bg-white border  flex flex-col items-center justify-center rounded-[10px]'>
              <span className=' text-black text-2xl font-medium'>{day}</span>
              <span className='text-gray-500'>Days</span>
            </span>
            <h2 className='pt-7 text-black'>:</h2>
            <span className='w-20 h-20 bg-white border  flex flex-col items-center justify-center rounded-[10px]'>
              <span className=' text-black text-2xl font-medium'>{hour}</span>
              <span className='text-gray-500'>Hrs</span>
            </span>
            <h2 className='pt-7 text-black'>:</h2>
            <span className='w-20 h-20 bg-white border  flex flex-col items-center justify-center rounded-[10px]'>
              <span className=' text-black text-2xl font-medium'>{minute}</span>
              <span className='text-gray-500'>Mins</span>
            </span>
            <h2 className='pt-7 text-black'>:</h2>
            <span className='w-20 h-20 bg-white border  flex flex-col items-center justify-center rounded-[10px]'>
              <span className=' text-black text-2xl font-medium'>{second}</span>
              <span className='text-gray-500'>Secs</span>
            </span>
          </div>
          <button
            type='button'
            className="bg-pink-500 text-white py-3 px-6 rounded hover:bg-gray-700 hover:text-white transition duration-300">
            Show Collection
          </button>
        </div>
        {/* Vòng tròn để xem video */}
        <div className="absolute top-1/2 right-[300px] transform -translate-y-1/2 z-20">
          <a href="https://www.youtube.com/watch?v=fy4_qHjw7mg" target="_blank" rel="noopener noreferrer" className="relative block hover:scale-110 transition duration-300" aria-label='video'>
            <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center hover:bg-gray-700 play-button">
              <PlayCircleOutlinedIcon className='text-lg' />
            </div>
          </a>
        </div>
      </div>
    </div >
  );
};

export default DealsOfTheDay;
