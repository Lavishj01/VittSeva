"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "motion/react";
import React from "react";
import Image from "next/image";

const transition = {
  duration: 0,
  ease: "linear" as const,
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full py-20", className)}>
      <div className="text-center mb-12">
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {title || `Software meets Hardware`}
        </p>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {description ||
            `Watch how our platform creates seamless connections between your digital operations and physical assets`}
        </p>
      </div>
      
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-10 -mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl border-4 border-gray-100 flex items-center justify-center p-6 md:p-8">
              <Image
                src="/portal-logo/logo.png"
                alt="Oxmaint Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        <svg
          width="1440"
          height="600"
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d="M0 400C145.5 400 191 403.265 269 384C326.5 367 339.5 358 397.5 303C439 268.5 455 266.5 490 260C509.664 256.348 521 240.736 538 241.236C553.591 241.236 562.429 251.739 584.66 259.749C592.042 262.408 600.2 263.237 607.356 260.019C624.755 252.195 641.446 233.324 657 233.735C673.408 233.735 693.545 256.572 712.903 263.769C718.727 265.934 725.184 265.395 730.902 262.965C751.726 254.115 764.085 234.106 782 233.735C794.831 233.47 804.103 245.859 822.469 255.515C835.13 262.171 850.214 263.815 862.827 257.069C875.952 250.049 889.748 239.706 903.5 240.736C922.677 242.171 935.293 247.562 945.817 252.673C954.234 256.76 963.095 259.792 972.199 261.954C996.012 267.611 1007.42 271.118 1034 286C1077.5 310.359 1082.5 331.5 1140 366C1206 407 1328.5 399.5 1440 399.5"
            stroke="#3B82F6"
            strokeWidth="3"
            fill="none"
            initial={{
              pathLength: 0,
            }}
            style={{
              pathLength: pathLengths[0],
            }}
            transition={transition}
          />
          <motion.path
            d="M0 320C147 320 277 320 310 306C348 296 392.5 276.5 408 268C434 256.5 426 259.235 479 248.235C494 245.729 523 243.435 534.5 245.735C554.5 249.735 555.5 256.235 576 256.735C592 256.735 616 229.735 633 230.235C648.671 230.235 661.31 248.052 684.774 257.942C692.004 260.989 700.2 261.738 707.349 258.505C724.886 250.575 741.932 231.33 757.5 231.742C773.864 231.742 791.711 253.623 810.403 260.654C816.218 262.841 822.661 262.246 828.451 259.991C849.246 251.893 861.599 235.112 879.5 234.742C886.47 234.597 896.865 239.047 907.429 243.911C930.879 254.707 957.139 252.639 982.951 253.063C1020.91 253.686 1037.5 263.797 1056.5 270C1102.24 289.627 1116.5 303.704 1180.5 312.235C1257.5 322.5 1279 320 1440 321"
            stroke="#8B5CF6"
            strokeWidth="3"
            fill="none"
            initial={{
              pathLength: 0,
            }}
            style={{
              pathLength: pathLengths[1],
            }}
            transition={transition}
          />
          <motion.path
            d="M0 250C147.5 250.333 294.5 249.735 380.5 249.735C405.976 250.94 422.849 251.228 436.37 251.123C477.503 250.803 518.631 242.605 559.508 247.197C564.04 247.706 569.162 248.524 575 249.735C588 252.433 616 257.702 627.5 255.402C647.5 251.402 659 235.235 680.5 235.235C700.5 235.235 725 265.235 742 264.735C757.654 264.735 768.77 246.583 791.793 236.59C798.991 233.465 807.16 232.777 814.423 235.745C832.335 243.064 850.418 260.648 866 260.235C882.791 260.235 902.316 245.786 921.814 241.392C926.856 240.255 932.097 240.674 937.176 241.631C966.993 247.248 970.679 250.346 989.5 250.735C1006.3 251.083 1036.5 249.235 1055.5 249.235C1114.5 249.235 1090.5 249.235 1124 249.235C1177.5 249.235 1178.99 250.402 1241 250.402C1317.5 250.402 1274.5 248.568 1440 249.235"
            stroke="#06B6D4"
            strokeWidth="3"
            fill="none"
            initial={{
              pathLength: 0,
            }}
            style={{
              pathLength: pathLengths[2],
            }}
            transition={transition}
          />

          {/* Static background paths for depth */}
          <path
            d="M0 400C145.5 400 191 403.265 269 384C326.5 367 339.5 358 397.5 303C439 268.5 455 266.5 490 260C509.664 256.348 521 240.736 538 241.236C553.591 241.236 562.429 251.739 584.66 259.749C592.042 262.408 600.2 263.237 607.356 260.019C624.755 252.195 641.446 233.324 657 233.735C673.408 233.735 693.545 256.572 712.903 263.769C718.727 265.934 725.184 265.395 730.902 262.965C751.726 254.115 764.085 234.106 782 233.735C794.831 233.47 804.103 245.859 822.469 255.515C835.13 262.171 850.214 263.815 862.827 257.069C875.952 250.049 889.748 239.706 903.5 240.736C922.677 242.171 935.293 247.562 945.817 252.673C954.234 256.76 963.095 259.792 972.199 261.954C996.012 267.611 1007.42 271.118 1034 286C1077.5 310.359 1082.5 331.5 1140 366C1206 407 1328.5 399.5 1440 399.5"
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M0 320C147 320 277 320 310 306C348 296 392.5 276.5 408 268C434 256.5 426 259.235 479 248.235C494 245.729 523 243.435 534.5 245.735C554.5 249.735 555.5 256.235 576 256.735C592 256.735 616 229.735 633 230.235C648.671 230.235 661.31 248.052 684.774 257.942C692.004 260.989 700.2 261.738 707.349 258.505C724.886 250.575 741.932 231.33 757.5 231.742C773.864 231.742 791.711 253.623 810.403 260.654C816.218 262.841 822.661 262.246 828.451 259.991C849.246 251.893 861.599 235.112 879.5 234.742C886.47 234.597 896.865 239.047 907.429 243.911C930.879 254.707 957.139 252.639 982.951 253.063C1020.91 253.686 1037.5 263.797 1056.5 270C1102.24 289.627 1116.5 303.704 1180.5 312.235C1257.5 322.5 1279 320 1440 321"
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M0 250C147.5 250.333 294.5 249.735 380.5 249.735C405.976 250.94 422.849 251.228 436.37 251.123C477.503 250.803 518.631 242.605 559.508 247.197C564.04 247.706 569.162 248.524 575 249.735C588 252.433 616 257.702 627.5 255.402C647.5 251.402 659 235.235 680.5 235.235C700.5 235.235 725 265.235 742 264.735C757.654 264.735 768.77 246.583 791.793 236.59C798.991 233.465 807.16 232.777 814.423 235.745C832.335 243.064 850.418 260.648 866 260.235C882.791 260.235 902.316 245.786 921.814 241.392C926.856 240.255 932.097 240.674 937.176 241.631C966.993 247.248 970.679 250.346 989.5 250.735C1006.3 251.083 1036.5 249.235 1055.5 249.235C1114.5 249.235 1090.5 249.235 1124 249.235C1177.5 249.235 1178.99 250.402 1241 250.402C1317.5 250.402 1274.5 248.568 1440 249.235"
            stroke="#E5E7EB"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />

          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Connection labels */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20">
          <div className="text-sm font-semibold text-gray-900 mb-1">Software</div>
          <div className="text-xs text-gray-600">Digital Platform</div>
        </div>
        
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20">
          <div className="text-sm font-semibold text-gray-900 mb-1">Hardware</div>
          <div className="text-xs text-gray-600">Physical Assets</div>
        </div>
      </div>
    </div>
  );
};
