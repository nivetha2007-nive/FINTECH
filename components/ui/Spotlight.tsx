'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightProps {
    children: React.ReactNode;
    className?: string;
    spotlightcolor?: string;
}

export function Spotlight({ children, className = "", spotlightcolor = "rgba(0, 102, 255, 0.15)" }: SpotlightProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-white/10 bg-gray-900/5 overflow-hidden rounded-[48px]",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[48px] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightcolor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}
