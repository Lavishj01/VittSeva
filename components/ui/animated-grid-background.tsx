"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedGridBackgroundProps {
  className?: string;
}

export function AnimatedGridBackground({ className = "" }: AnimatedGridBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Static grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #15227a 1px, transparent 1px),
            linear-gradient(180deg, #15227a 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Corner geometric elements */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 border-l-2 border-b-2 border-primary/20"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 border-r-2 border-t-2 border-secondary/20"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
} 