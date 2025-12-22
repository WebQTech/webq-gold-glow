import { motion } from "framer-motion";
import { useMemo } from "react";

const BinaryText = ({ delay, x, y }: { delay: number; x: string; y: string }) => {
  const binary = useMemo(() => {
    return Array.from({ length: 8 }, () => Math.round(Math.random()).toString()).join("");
  }, []);

  return (
    <motion.span
      className="absolute font-mono text-xs pointer-events-none select-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.25, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="text-plum">{binary.slice(0, 4)}</span>
      <span className="text-gold">{binary.slice(4)}</span>
    </motion.span>
  );
};

const DataParticle = ({ delay, startX, startY, color }: { delay: number; startX: number; startY: number; color: "plum" | "gold" }) => {
  return (
    <motion.div
      className={`absolute w-2 h-2 rounded-full ${color === "plum" ? "bg-plum" : "bg-gold"}`}
      style={{ left: startX, top: startY }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0.5],
        x: [0, 200 - startX],
        y: [0, 200 - startY],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeIn",
      }}
    />
  );
};

const DataStream = ({ angle, delay }: { angle: number; delay: number }) => {
  const radians = (angle * Math.PI) / 180;
  const startX = 200 + Math.cos(radians) * 220;
  const startY = 200 + Math.sin(radians) * 220;
  const endX = 200 + Math.cos(radians) * 60;
  const endY = 200 + Math.sin(radians) * 60;

  return (
    <motion.line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      stroke="url(#streamGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export const Hero3DVisual = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      startX: Math.random() * 400,
      startY: Math.random() * 400,
      delay: Math.random() * 3,
      color: (Math.random() > 0.5 ? "plum" : "gold") as "plum" | "gold",
    }));
  }, []);

  const binaryPositions = [
    { x: "3%", y: "8%", delay: 0 },
    { x: "90%", y: "12%", delay: 1.5 },
    { x: "8%", y: "85%", delay: 0.8 },
    { x: "85%", y: "88%", delay: 2.2 },
    { x: "0%", y: "45%", delay: 1.2 },
    { x: "92%", y: "50%", delay: 0.5 },
    { x: "42%", y: "3%", delay: 1.8 },
    { x: "48%", y: "95%", delay: 2.5 },
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* SVG for data streams */}
      <svg className="absolute w-[400px] h-[400px]" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#E5B94E" />
          </linearGradient>
        </defs>
        
        {/* 6 Data Streams */}
        <DataStream angle={0} delay={0} />
        <DataStream angle={60} delay={0.4} />
        <DataStream angle={120} delay={0.8} />
        <DataStream angle={180} delay={1.2} />
        <DataStream angle={240} delay={1.6} />
        <DataStream angle={300} delay={2.0} />
      </svg>

      {/* Circular Rings */}
      <div className="absolute">
        {[160, 220, 280, 340].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `calc(50% - ${size / 2}px)`,
              top: `calc(50% - ${size / 2}px)`,
              border: i % 2 === 0 
                ? "1px solid rgba(139, 92, 246, 0.15)" 
                : "1px dashed rgba(229, 185, 78, 0.15)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * i, duration: 0.8 }}
          />
        ))}
      </div>

      {/* Data Particles */}
      <div className="absolute w-[400px] h-[400px]">
        {particles.map((p) => (
          <DataParticle
            key={p.id}
            startX={p.startX}
            startY={p.startY}
            delay={p.delay}
            color={p.color}
          />
        ))}
      </div>

      {/* 3D Rotating Cube */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10"
        style={{ 
          perspective: "600px",
          perspectiveOrigin: "center center",
        }}
      >
        <div
          className="relative w-28 h-28"
          style={{
            transformStyle: "preserve-3d",
            animation: "cubeRotate 15s linear infinite",
          }}
        >
          {/* Front */}
          <div
            className="absolute w-28 h-28 flex items-center justify-center text-white font-bold text-xl"
            style={{
              transform: "translateZ(56px)",
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(229, 185, 78, 0.9))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
            }}
          >
            DATA
          </div>
          {/* Back */}
          <div
            className="absolute w-28 h-28 flex items-center justify-center text-white font-bold text-xl"
            style={{
              transform: "rotateY(180deg) translateZ(56px)",
              background: "linear-gradient(135deg, rgba(229, 185, 78, 0.9), rgba(139, 92, 246, 0.9))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            FLOW
          </div>
          {/* Right */}
          <div
            className="absolute w-28 h-28 flex items-center justify-center text-white font-bold text-xl"
            style={{
              transform: "rotateY(90deg) translateZ(56px)",
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.85), rgba(229, 185, 78, 0.85))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            AI
          </div>
          {/* Left */}
          <div
            className="absolute w-28 h-28 flex items-center justify-center text-white font-bold text-xl"
            style={{
              transform: "rotateY(-90deg) translateZ(56px)",
              background: "linear-gradient(135deg, rgba(229, 185, 78, 0.85), rgba(139, 92, 246, 0.85))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            ML
          </div>
          {/* Top */}
          <div
            className="absolute w-28 h-28"
            style={{
              transform: "rotateX(90deg) translateZ(56px)",
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.7), rgba(229, 185, 78, 0.7))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          />
          {/* Bottom */}
          <div
            className="absolute w-28 h-28"
            style={{
              transform: "rotateX(-90deg) translateZ(56px)",
              background: "linear-gradient(135deg, rgba(229, 185, 78, 0.7), rgba(139, 92, 246, 0.7))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          />
        </div>
      </motion.div>

      {/* Binary Text */}
      {binaryPositions.map((pos, i) => (
        <BinaryText key={i} x={pos.x} y={pos.y} delay={pos.delay} />
      ))}

      {/* CSS Animation */}
      <style>{`
        @keyframes cubeRotate {
          0% {
            transform: rotateY(0deg) rotateX(15deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(15deg);
          }
        }
      `}</style>
    </div>
  );
};
