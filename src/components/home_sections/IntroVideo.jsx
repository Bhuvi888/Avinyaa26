import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroVideo = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);
    const [text, setText] = useState("AVINYAA");

    // Scramble effect characters
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/AXZ01";

    useEffect(() => {
        let iterations = 0;
        const targetText = "AVINYAA";

        const interval = setInterval(() => {
            setText(prev =>
                targetText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return targetText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations >= targetText.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);

        // Exit sequence
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 2200);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                    exit={{
                        opacity: 0,
                        filter: "blur(20px)",
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                >
                    {/* Ra.One Style Digital Heartbeat / Grid Background */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(225,29,72,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(225,29,72,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative">
                            {/* Main Glitch Text */}
                            <h1
                                className="glitch-text text-6xl md:text-9xl font-black font-display tracking-tighter text-white relative"
                                data-text={text}
                            >
                                {text}
                            </h1>
                        </div>

                        {/* Subtitle / Loader */}
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent mt-4 relative"
                        >
                            <div className="absolute top-0 left-0 h-full w-full bg-rose-500 animate-pulse blur-[2px]" />
                        </motion.div>

                        <p className="mt-2 font-mono text-rose-500 text-xs tracking-[0.5em] uppercase opacity-80 animate-pulse">
                            Initializing System...
                        </p>
                    </div>

                    {/* CSS for Glitch Effect (Ra.One Style) */}
                    <style>{`
                        .glitch-text {
                            position: relative;
                        }
                        .glitch-text::before,
                        .glitch-text::after {
                            content: attr(data-text);
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                        }
                        .glitch-text::before {
                            left: 2px;
                            text-shadow: -1px 0 #00ffff;
                            clip: rect(44px, 450px, 56px, 0);
                            animation: glitch-anim 2.5s infinite linear alternate-reverse;
                        }
                        .glitch-text::after {
                            left: -2px;
                            text-shadow: -1px 0 #ff00ff;
                            clip: rect(44px, 450px, 56px, 0);
                            animation: glitch-anim2 3s infinite linear alternate-reverse;
                        }
                        
                        @keyframes glitch-anim {
                            0% { clip: rect(38px, 9999px, 81px, 0); transform: skew(0.85deg); }
                            5% { clip: rect(72px, 9999px, 86px, 0); transform: skew(0.04deg); }
                            10% { clip: rect(6px, 9999px, 30px, 0); transform: skew(0.25deg); }
                            15% { clip: rect(18px, 9999px, 97px, 0); transform: skew(0.12deg); }
                            20% { clip: rect(27px, 9999px, 63px, 0); transform: skew(0.99deg); }
                            25% { clip: rect(78px, 9999px, 92px, 0); transform: skew(0.95deg); }
                            30% { clip: rect(29px, 9999px, 16px, 0); transform: skew(0.84deg); }
                            35% { clip: rect(69px, 9999px, 9px, 0); transform: skew(0.02deg); }
                            40% { clip: rect(98px, 9999px, 20px, 0); transform: skew(0.26deg); }
                            45% { clip: rect(54px, 9999px, 57px, 0); transform: skew(0.63deg); }
                            50% { clip: rect(100px, 9999px, 37px, 0); transform: skew(0.87deg); }
                            55% { clip: rect(48px, 9999px, 89px, 0); transform: skew(0.91deg); }
                            60% { clip: rect(15px, 9999px, 49px, 0); transform: skew(0.48deg); }
                            65% { clip: rect(10px, 9999px, 60px, 0); transform: skew(0.4deg); }
                            70% { clip: rect(66px, 9999px, 15px, 0); transform: skew(0.03deg); }
                            75% { clip: rect(5px, 9999px, 8px, 0); transform: skew(0.09deg); }
                            80% { clip: rect(10px, 9999px, 62px, 0); transform: skew(0.05deg); }
                            85% { clip: rect(100px, 9999px, 65px, 0); transform: skew(0.85deg); }
                            90% { clip: rect(57px, 9999px, 87px, 0); transform: skew(0.53deg); }
                            95% { clip: rect(4px, 9999px, 37px, 0); transform: skew(0.06deg); }
                            100% { clip: rect(80px, 9999px, 4px, 0); transform: skew(0.96deg); }
                        }
                        @keyframes glitch-anim2 {
                            0% { clip: rect(72px, 9999px, 2px, 0); transform: skew(0.12deg); }
                            5% { clip: rect(2px, 9999px, 12px, 0); transform: skew(0.47deg); }
                            10% { clip: rect(30px, 9999px, 7px, 0); transform: skew(0.73deg); }
                            15% { clip: rect(31px, 9999px, 92px, 0); transform: skew(0.6deg); }
                            20% { clip: rect(43px, 9999px, 59px, 0); transform: skew(0.85deg); }
                            25% { clip: rect(66px, 9999px, 43px, 0); transform: skew(0.51deg); }
                            30% { clip: rect(72px, 9999px, 68px, 0); transform: skew(0.79deg); }
                            35% { clip: rect(63px, 9999px, 6px, 0); transform: skew(0.66deg); }
                            40% { clip: rect(68px, 9999px, 84px, 0); transform: skew(0.88deg); }
                            45% { clip: rect(98px, 9999px, 43px, 0); transform: skew(0.67deg); }
                            50% { clip: rect(57px, 9999px, 93px, 0); transform: skew(0.24deg); }
                            55% { clip: rect(61px, 9999px, 95px, 0); transform: skew(0.14deg); }
                            60% { clip: rect(84px, 9999px, 22px, 0); transform: skew(0.56deg); }
                            65% { clip: rect(93px, 9999px, 81px, 0); transform: skew(0.59deg); }
                            70% { clip: rect(98px, 9999px, 95px, 0); transform: skew(0.16deg); }
                            75% { clip: rect(52px, 9999px, 8px, 0); transform: skew(0.19deg); }
                            80% { clip: rect(23px, 9999px, 11px, 0); transform: skew(0.21deg); }
                            85% { clip: rect(97px, 9999px, 94px, 0); transform: skew(0.68deg); }
                            90% { clip: rect(18px, 9999px, 79px, 0); transform: skew(0.68deg); }
                            95% { clip: rect(99px, 9999px, 93px, 0); transform: skew(0.13deg); }
                            100% { clip: rect(39px, 9999px, 2px, 0); transform: skew(0.9deg); }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroVideo;
