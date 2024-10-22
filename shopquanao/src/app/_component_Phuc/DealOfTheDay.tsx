"use client";

import React, { useState, useEffect } from 'react';

const DealsOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="deals-container">
      <p className="deal-header">Hurry up and Get 25% Discount</p>
      <h1 className="deal-title">Deals Of The Day</h1>
      <p className="deal-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

      <div className="countdown-timer">
        <div className="time-section">
          <p>{timeLeft.days}</p>
          <span>Days</span>
        </div>
        <div className="colon">:</div>
        <div className="time-section">
          <p>{timeLeft.hours}</p>
          <span>Hrs</span>
        </div>
        <div className="colon">:</div>
        <div className="time-section">
          <p>{timeLeft.minutes}</p>
          <span>Mins</span>
        </div>
        <div className="colon">:</div>
        <div className="time-section">
          <p>{timeLeft.seconds}</p>
          <span>Secs</span>
        </div>
      </div>

      <button className="deal-button">Show Collection →</button>
    </div>
  );
};

export default DealsOfTheDay;
