import { useMemo } from "react";
import { motion } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Connection {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export const NeuralNetworkBackground = () => {
  const nodes = useMemo<Node[]>(() => {
    const generated: Node[] = [];
    const cols = 8;
    const rows = 6;
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const offsetX = (j % 2) * 6;
        generated.push({
          id: i * rows + j,
          x: 8 + offsetX + (i * 12) + (Math.random() - 0.5) * 4,
          y: 10 + (j * 15) + (Math.random() - 0.5) * 6,
          size: 2 + Math.random() * 2,
          delay: Math.random() * 3,
        });
      }
    }
    return generated;
  }, []);

  const connections = useMemo<Connection[]>(() => {
    const lines: Connection[] = [];
    const maxDistance = 25;

    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((otherNode) => {
        const dx = node.x - otherNode.x;
        const dy = node.y - otherNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance && Math.random() > 0.4) {
          lines.push({
            id: `${node.id}-${otherNode.id}`,
            x1: node.x,
            y1: node.y,
            x2: otherNode.x,
            y2: otherNode.y,
            delay: Math.random() * 2,
          });
        }
      });
    });
    return lines;
  }, [nodes]);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      size: 1 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

      {/* Neural network SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="activeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="pulseGradient">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Connections */}
        {connections.map((conn) => (
          <line
            key={`base-${conn.id}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            opacity="0.3"
          />
        ))}

        {/* Active pulsing connections */}
        {connections.slice(0, 25).map((conn, i) => (
          <motion.line
            key={`active-${conn.id}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#activeLineGradient)"
            strokeWidth="0.25"
            filter="url(#strongGlow)"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.9, 0.9, 0],
              strokeWidth: [0.15, 0.3, 0.3, 0.15]
            }}
            transition={{
              duration: 2.5,
              delay: (i * 0.3) % 5,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size * 0.3}
            fill="url(#nodeGradient)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 3,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Data signals traveling along connections */}
        {connections.slice(0, 20).map((conn, i) => (
          <g key={`signal-group-${conn.id}`}>
            {/* Signal trail */}
            <motion.circle
              r="0.6"
              fill="url(#pulseGradient)"
              filter="url(#strongGlow)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [conn.x1, conn.x2],
                cy: [conn.y1, conn.y2],
                opacity: [0, 0.5, 0.5, 0],
                r: [0.3, 0.8, 0.8, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: (i * 0.4) % 6,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeOut",
              }}
            />
            {/* Core signal */}
            <motion.circle
              r="0.35"
              fill="hsl(var(--primary))"
              filter="url(#strongGlow)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [conn.x1, conn.x2],
                cy: [conn.y1, conn.y2],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: (i * 0.4) % 6,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {/* Pulse rings at nodes */}
        {nodes.slice(0, 12).map((node, i) => (
          <motion.circle
            key={`pulse-${node.id}`}
            cx={node.x}
            cy={node.y}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.1"
            initial={{ r: 0.5, opacity: 0 }}
            animate={{
              r: [0.5, 2.5],
              opacity: [0.8, 0],
              strokeWidth: [0.15, 0.02],
            }}
            transition={{
              duration: 2,
              delay: (i * 0.6) % 4,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/60"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            opacity: [0, 0.8, 0.4, 0],
            scale: [0.5, 1, 0.8, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
