import React, { useState, useEffect } from "react";

const useCountdownTimer = () => {
  const initialTime = 10 * 60; // 10 minutes in seconds
  const [secondsLeft, setSecondsLeft] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {
      days: 0,
      hours: Math.floor(minutes / 60),
      minutes: minutes % 60,
      seconds,
    };
  };

  return formatTime(secondsLeft);
};

const CountDown = () => {
  const timeLeft = useCountdownTimer();

  return (
    <div className="h-screen flex justify-center items-center px-2 bg-gradient-to-tr from-slae-900 via-slat-900 to-slate-900">
      <div className="max-w-lg mx-auto bg-slate-800 shadow-lg rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-4xl font-bold text-gray-200">Hurry Up!</h2>
          <p className="mt-2 text-lg text-gray-200">
            Act Now! Limited Time Offer – Reserve Your Spot Before It's Too Late
          </p>
        </div>
        <div className="py-4 px-6">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="border rounded-lg px-4 py-2 animate-pulse">
              <div className="font-bold font-mono text-2xl text-gray-200">
                {timeLeft.days}d
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2 animate-pulse">
              <div className="font-bold font-mono text-2xl text-gray-200">
                {timeLeft.hours}h
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2 animate-pulse">
              <div className="font-bold font-mono text-2xl text-gray-200">
                {timeLeft.minutes}m
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2 animate-pulse">
              <div className="font-bold font-mono text-2xl text-gray-200">
                {timeLeft.seconds}s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
