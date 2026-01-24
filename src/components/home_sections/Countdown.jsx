import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const format = (num) => num.toString().padStart(2, '0');

    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <span>{format(timeLeft.days)}</span>
                <span className="text-[10px] font-sans font-bold opacity-50 tracking-widest">DAYS</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
                <span>{format(timeLeft.hours)}</span>
                <span className="text-[10px] font-sans font-bold opacity-50 tracking-widest">HRS</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
                <span>{format(timeLeft.minutes)}</span>
                <span className="text-[10px] font-sans font-bold opacity-50 tracking-widest">MIN</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
                <span>{format(timeLeft.seconds)}</span>
                <span className="text-[10px] font-sans font-bold opacity-50 tracking-widest">SEC</span>
            </div>
        </div>
    );
};

export default Countdown;
