'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface ScoreCircleProps {
    score: number;
    max: number;
    grade: string;
}

export function ScoreCircle({ score, max, grade }: ScoreCircleProps) {
    const percentage = (score / max) * 100;
    const [displayScore, setDisplayScore] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = score / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= score) {
                setDisplayScore(score);
                clearInterval(timer);
            } else {
                setDisplayScore(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [score]);

    // SVG Constants for the semi-circle gauge
    const radius = 100;
    const strokeWidth = 14;
    const center = 125;
    const circumference = Math.PI * radius; // Semi-circle circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Generate ticks
    const ticks = [];
    for (let i = 0; i <= 30; i++) {
        const angle = -180 + (i * (180 / 30));
        ticks.push(angle);
    }

    return (
        <div className="relative flex flex-col items-center justify-center py-6 select-none group">
            <div className="relative w-[300px] h-[220px]">
                {/* Gauge SVG */}
                <svg className="w-full h-full" viewBox="0 0 250 200">
                    <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--accent)" />
                            <stop offset="50%" stopColor="var(--primary)" />
                            <stop offset="100%" stopColor="var(--cyan)" />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Background Path (Gray Track) */}
                    <path
                        d="M 25,125 A 100,100 0 0 1 225,125"
                        fill="none"
                        stroke="rgba(0,0,0,0.05)"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    {/* Ticks/Segments (Like in the image) */}
                    {ticks.map((angle, i) => {
                        const isReached = (i / 30) * 100 <= percentage;
                        return (
                            <line
                                key={i}
                                x1={center + (radius - 15) * Math.cos((angle * Math.PI) / 180)}
                                y1={center + (radius - 15) * Math.sin((angle * Math.PI) / 180)}
                                x2={center + (radius - 5) * Math.cos((angle * Math.PI) / 180)}
                                y2={center + (radius - 5) * Math.sin((angle * Math.PI) / 180)}
                                stroke={isReached ? "var(--primary)" : "rgba(0,0,0,0.1)"}
                                strokeWidth="2"
                                className="transition-colors duration-500"
                                style={{
                                    boxShadow: isReached ? "0 0 10px var(--primary)" : "none",
                                    opacity: isReached ? 1 : 0.3
                                }}
                            />
                        );
                    })}

                    {/* Foreground Path (Progress) */}
                    <motion.path
                        d="M 25,125 A 100,100 0 0 1 225,125"
                        fill="none"
                        stroke="url(#scoreGradient)"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 2, ease: "circOut" }}
                        filter="url(#glow)"
                    />
                </svg>

                {/* Score Text Overlay */}
                <div className="absolute inset-x-0 bottom-4 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl font-heading font-black tracking-tighter text-foreground drop-shadow-sm"
                    >
                        {displayScore}
                    </motion.div>

                    <div className="flex flex-col items-center -mt-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-2">
                            Hustle Score
                        </span>

                        {grade && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.5, type: "spring" }}
                                className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-black shadow-[0_10px_20px_rgba(0,102,255,0.3)] hover:scale-105 transition-transform"
                            >
                                <TrendingUp className="w-4 h-4" />
                                {grade} GRADE
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
