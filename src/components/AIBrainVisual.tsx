import { motion } from "framer-motion";
import { useMemo } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  color: "plum" | "gold";
}

interface Connection {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export const AIBrainVisual = () => {
  // Generate brain-shaped nodes
  const nodes = useMemo<Node[]>(() => {
    const brainNodes: Node[] = [];
    const centerX = 50;
    const centerY = 50;
    
    // Create brain-like shape with nodes
    const nodePositions = [
      // Outer brain shape
      { x: 30, y: 25 }, { x: 45, y: 18 }, { x: 60, y: 20 }, { x: 72, y: 28 },
      { x: 78, y: 42 }, { x: 75, y: 58 }, { x: 68, y: 72 }, { x: 55, y: 78 },
      { x: 40, y: 75 }, { x: 28, y: 65 }, { x: 22, y: 50 }, { x: 25, y: 38 },
      // Inner nodes
      { x: 38, y: 35 }, { x: 52, y: 32 }, { x: 62, y: 38 },
      { x: 65, y: 52 }, { x: 58, y: 62 }, { x: 45, y: 65 },
      { x: 35, y: 55 }, { x: 38, y: 45 },
      // Core nodes
      { x: 48, y: 45 }, { x: 55, y: 50 }, { x: 50, y: 55 },
    ];

    nodePositions.forEach((pos, i) => {
      brainNodes.push({
        id: i,
        x: pos.x,
        y: pos.y,
        size: i >= 20 ? 4 : i >= 12 ? 3 : 2.5,
        delay: i * 0.15,
        color: i % 3 === 0 ? "gold" : "plum",
      });
    });

    return brainNodes;
  }, []);

  // Generate connections between nearby nodes
  const connections = useMemo<Connection[]>(() => {
    const conns: Connection[] = [];
    let connId = 0;
    
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i < j) {
          const dist = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (dist < 22 && dist > 5) {
            conns.push({
              id: connId++,
              x1: node.x,
              y1: node.y,
              x2: otherNode.x,
              y2: otherNode.y,
              delay: (i + j) * 0.1,
            });
          }
        }
      });
    });

    return conns;
  }, [nodes]);

  // Data signals traveling along connections
  const signals = useMemo(() => {
    return connections.slice(0, 12).map((conn, i) => ({
      ...conn,
      signalDelay: i * 0.4,
    }));
  }, [connections]);

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      {/* Soft glow background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-radial from-plum/20 via-plum/5 to-transparent blur-2xl" />
      </motion.div>

      {/* Second glow layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-radial from-gold/15 via-gold/5 to-transparent blur-xl" />
      </motion.div>

      {/* Main brain SVG */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full max-w-[280px] md:max-w-[340px] relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="plumGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--plum))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--plum))" stopOpacity="0.3" />
          </radialGradient>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0.3" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--plum))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--cream))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--plum))" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--gold))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {connections.map((conn) => (
          <motion.line
            key={`conn-${conn.id}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#connectionGradient)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: conn.delay * 0.3 }}
          />
        ))}

        {/* Signal animations along connections */}
        {signals.map((signal) => (
          <motion.circle
            key={`signal-${signal.id}`}
            r="1"
            fill="hsl(var(--gold))"
            filter="url(#glow)"
            initial={{ cx: signal.x1, cy: signal.y1, opacity: 0 }}
            animate={{
              cx: [signal.x1, signal.x2, signal.x1],
              cy: [signal.y1, signal.y2, signal.y1],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: signal.signalDelay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 2}
              fill={node.color === "plum" ? "url(#plumGlow)" : "url(#goldGlow)"}
              opacity={0.3}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                scale: { duration: 2, repeat: Infinity, delay: node.delay },
                default: { duration: 0.5, delay: node.delay },
              }}
            />
            {/* Main node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.color === "plum" ? "hsl(var(--plum))" : "hsl(var(--gold))"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.1, 1], opacity: 1 }}
              transition={{
                scale: { duration: 2, repeat: Infinity, delay: node.delay },
                opacity: { duration: 0.5, delay: node.delay },
              }}
            />
            {/* Inner highlight */}
            <motion.circle
              cx={node.x - node.size * 0.3}
              cy={node.y - node.size * 0.3}
              r={node.size * 0.4}
              fill="white"
              opacity={0.4}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: node.delay + 0.2 }}
            />
          </g>
        ))}

        {/* Filter for glow effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </motion.svg>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "hsl(var(--plum))" : "hsl(var(--gold))",
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
