
"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const iconData = [
  { 
    name: "React", 
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="60" height="60" className="fill-current">
        <circle cx="0" cy="0" r="2.05" className="text-sky-500" />
        <g strokeWidth="1" fill="none" className="stroke-sky-500">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ) 
  },
  { 
    name: "Spring", 
    svg: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="fill-current text-green-600 dark:text-green-500">
          <path d="M19.862 2.912a1.65 1.65 0 00-1.04.22L7.33 8.952a1.32 1.32 0 00-.53 1.04v.132a.412.412 0 01-.132.33l-1.32 1.32a.825.825 0 000 1.208l3.63 3.63a.825.825 0 001.208 0l1.32-1.32a.412.412 0 01.33-.132h.132a1.32 1.32 0 001.04-.53l5.82-11.484a1.65 1.65 0 00-.818-2.068zM12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />
          <path d="M12 21.75a4.125 4.125 0 004.125-4.125A4.125 4.125 0 0012 13.5a4.125 4.125 0 00-4.125 4.125A4.125 4.125 0 0012 21.75z" />
      </svg>
    ) 
  },
  { 
    name: "Angular", 
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="55" height="55" className="fill-current">
        <path d="M12 0L1 4l1.8 14L12 24l9.2-6L23 4 12 0zm0 3.5l7.5 2-1.8 11L12 20.5l-5.7-4-1.8-11L12 3.5z" fill="#DD0031" />
        <path d="M12 5.5l-6.5 8h13L12 5.5z" fill="#C3002F" />
      </svg>
    ) 
  },
  { 
    name: "Code", 
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="fill-none stroke-current text-gray-700 dark:text-gray-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ) 
  },
  { 
    name: "GitHub", 
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" className="fill-current text-gray-800 dark:text-white">
        <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.86-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.57.69.48A10 10 0 0 0 12 2Z"/>
      </svg>
    ) 
  },
  { 
    name: "VS Code", 
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500">
        <path d="M20.4 12l-4.1-10.2c-.2-.5-.7-.8-1.2-.8H9c-.5 0-1 .3-1.2.8L3.6 12h16.8z" />
        <path d="M3.6 12l8.4 10.2c.2.3.6.4 1 .2l8.4-10.4" />
        <path d="M12 22.2V12" />
        <path d="M15.9 12L12 2.5" />
        <path d="M8.1 12L12 2.5" />
      </svg>
    ) 
  },
];


function AnimatedIcon({
  index,
  total,
}: {
  index: number;
  total: number;
}) {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 220; // Increased radius for a larger circle

  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        transform: [
          `translate(-50%, -50%) rotate(${angle}rad) translateX(${radius}px) rotate(-${angle}rad)`,
          `translate(-50%, -50%) rotate(${angle + 2 * Math.PI}rad) translateX(${radius}px) rotate(-${angle + 2 * Math.PI}rad)`,
        ],
      }}
      transition={{
        duration: 25, // Slightly increased duration for a smoother rotation
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2, opacity: 1 }}
        className="transition-all opacity-80 hover:opacity-100"
      >
        {iconData[index].svg}
      </motion.div>
    </motion.div>
  );
}


export function AnimatedIcons() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 h-full w-full">
      <div className="relative h-full w-full">
        {iconData.map((_, i) => (
          <AnimatedIcon key={i} index={i} total={iconData.length} />
        ))}
      </div>
    </div>
  );
}
