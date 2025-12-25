import { useMemo, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  layer: number; // 0 = back, 1 = mid, 2 = front
}

interface Connection {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  layer: number;
}

export const NeuralNetworkBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Motion values for smooth rotation
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring animations for rotation
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Rotation transforms for each layer (degrees)
  const backRotateX = useTransform(smoothMouseY, [0, 1], [8, -8]);
  const backRotateY = useTransform(smoothMouseX, [0, 1], [-8, 8]);
  
  const midRotateX = useTransform(smoothMouseY, [0, 1], [5, -5]);
  const midRotateY = useTransform(smoothMouseX, [0, 1], [-5, 5]);
  
  const frontRotateX = useTransform(smoothMouseY, [0, 1], [2, -2]);
  const frontRotateY = useTransform(smoothMouseX, [0, 1], [-2, 2]);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Parallax transforms for each layer
  const backLayerY = useTransform(smoothProgress, [0, 1], [60, -60]);
  const midLayerY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const frontLayerY = useTransform(smoothProgress, [0, 1], [10, -10]);

  // Mouse tracking for parallax and rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Mouse parallax offsets (subtle)
  const mouseOffsetX = (mousePosition.x - 0.5) * 20;
  const mouseOffsetY = (mousePosition.y - 0.5) * 20;

  const nodes = useMemo<Node[]>(() => {
    const generated: Node[] = [];
    const cols = 10;
    const rows = 8;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const offsetX = (j % 2) * 5;
        const layer = Math.floor(Math.random() * 3);
        generated.push({
          id: i * rows + j,
          x: 5 + offsetX + i * 10 + (Math.random() - 0.5) * 4,
          y: 5 + j * 12 + (Math.random() - 0.5) * 5,
          size: layer === 0 ? 1.5 : layer === 1 ? 2.5 : 3.5,
          delay: Math.random() * 3,
          layer,
        });
      }
    }
    return generated;
  }, []);

  const connections = useMemo<Connection[]>(() => {
    const lines: Connection[] = [];
    const maxDistance = 20;

    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((otherNode) => {
        if (node.layer !== otherNode.layer) return;
        const dx = node.x - otherNode.x;
        const dy = node.y - otherNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance && Math.random() > 0.5) {
          lines.push({
            id: `${node.id}-${otherNode.id}`,
            x1: node.x,
            y1: node.y,
            x2: otherNode.x,
            y2: otherNode.y,
            delay: Math.random() * 2,
            layer: node.layer,
          });
        }
      });
    });
    return lines;
  }, [nodes]);

  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 5,
      size: 1 + Math.random() * 3,
      layer: Math.floor(Math.random() * 3),
    }));
  }, []);

  const getLayerStyles = (layer: number) => {
    const parallaxY = layer === 0 ? backLayerY : layer === 1 ? midLayerY : frontLayerY;
    const rotateX = layer === 0 ? backRotateX : layer === 1 ? midRotateX : frontRotateX;
    const rotateY = layer === 0 ? backRotateY : layer === 1 ? midRotateY : frontRotateY;
    const mouseMultiplier = layer === 0 ? 0.3 : layer === 1 ? 0.6 : 1;
    const opacity = layer === 0 ? 0.2 : layer === 1 ? 0.4 : 0.6;
    const blur = layer === 0 ? "blur(2px)" : layer === 1 ? "blur(0.5px)" : "none";
    const scale = layer === 0 ? 0.9 : layer === 1 ? 1 : 1.1;
    const zOffset = layer === 0 ? -100 : layer === 1 ? 0 : 100;

    return { parallaxY, rotateX, rotateY, mouseMultiplier, opacity, blur, scale, zOffset };
  };

  const renderLayer = (layer: number) => {
    const { parallaxY, rotateX, rotateY, mouseMultiplier, opacity, blur, scale, zOffset } = getLayerStyles(layer);
    const layerNodes = nodes.filter((n) => n.layer === layer);
    const layerConnections = connections.filter((c) => c.layer === layer);

    return (
      <motion.div
        key={layer}
        className="absolute inset-0"
        style={{
          y: parallaxY,
          x: mouseOffsetX * mouseMultiplier,
          rotateX,
          rotateY,
          z: zOffset,
          filter: blur,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity }}
        >
          <defs>
            <linearGradient id={`lineGradient-${layer}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id={`activeLineGradient-${layer}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            </linearGradient>
            <radialGradient id={`nodeGradient-${layer}`}>
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            </radialGradient>
            <radialGradient id={`pulseGradient-${layer}`}>
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <filter id={`glow-${layer}`}>
              <feGaussianBlur stdDeviation={layer === 2 ? "0.8" : "0.4"} result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id={`strongGlow-${layer}`}>
              <feGaussianBlur stdDeviation={layer === 2 ? "1.2" : "0.6"} result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base Connections */}
          {layerConnections.map((conn) => (
            <line
              key={`base-${conn.id}`}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke={`url(#lineGradient-${layer})`}
              strokeWidth={layer === 2 ? "0.15" : "0.08"}
              opacity="0.4"
            />
          ))}

          {/* Active pulsing connections */}
          {layerConnections.slice(0, 10).map((conn, i) => (
            <motion.line
              key={`active-${conn.id}`}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke={`url(#activeLineGradient-${layer})`}
              strokeWidth={layer === 2 ? "0.3" : "0.15"}
              filter={`url(#strongGlow-${layer})`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.9, 0.9, 0],
                strokeWidth: layer === 2 ? [0.2, 0.4, 0.4, 0.2] : [0.1, 0.2, 0.2, 0.1],
              }}
              transition={{
                duration: 2.5,
                delay: (i * 0.4 + layer) % 5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Nodes */}
          {layerNodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.size * 0.3}
              fill={`url(#nodeGradient-${layer})`}
              filter={`url(#glow-${layer})`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Data signals */}
          {layerConnections.slice(0, 8).map((conn, i) => (
            <g key={`signal-group-${conn.id}`}>
              <motion.circle
                r={layer === 2 ? "0.7" : "0.4"}
                fill={`url(#pulseGradient-${layer})`}
                filter={`url(#strongGlow-${layer})`}
                initial={{ opacity: 0 }}
                animate={{
                  cx: [conn.x1, conn.x2],
                  cy: [conn.y1, conn.y2],
                  opacity: [0, 0.6, 0.6, 0],
                  r: layer === 2 ? [0.4, 1, 1, 0.4] : [0.2, 0.5, 0.5, 0.2],
                }}
                transition={{
                  duration: 1.8,
                  delay: (i * 0.5 + layer * 2) % 6,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeOut",
                }}
              />
              <motion.circle
                r={layer === 2 ? "0.4" : "0.2"}
                fill="hsl(var(--primary))"
                filter={`url(#strongGlow-${layer})`}
                initial={{ opacity: 0 }}
                animate={{
                  cx: [conn.x1, conn.x2],
                  cy: [conn.y1, conn.y2],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: (i * 0.5 + layer * 2) % 6,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "linear",
                }}
              />
            </g>
          ))}

          {/* Pulse rings */}
          {layerNodes.slice(0, 5).map((node, i) => (
            <motion.circle
              key={`pulse-${node.id}`}
              cx={node.x}
              cy={node.y}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.1"
              initial={{ r: 0.5, opacity: 0 }}
              animate={{
                r: [0.5, layer === 2 ? 3 : 2],
                opacity: [0.8, 0],
                strokeWidth: [layer === 2 ? 0.2 : 0.1, 0.02],
              }}
              transition={{
                duration: 2.5,
                delay: (i * 0.8 + layer) % 4,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeOut",
              }}
            />
          ))}
        </svg>
      </motion.div>
    );
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none" 
      style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-20" />

      {/* Render layers back to front */}
      {[0, 1, 2].map((layer) => renderLayer(layer))}

      {/* Floating particles with depth */}
      {particles.map((particle) => {
        const { parallaxY, mouseMultiplier, opacity } = getLayerStyles(particle.layer);
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.startX}%`,
              top: `${particle.startY}%`,
              opacity: opacity,
              y: parallaxY,
              x: mouseOffsetX * mouseMultiplier,
            }}
            animate={{
              x: [0, 40 * mouseMultiplier, -30 * mouseMultiplier, 0],
              y: [0, -50 * mouseMultiplier, 30 * mouseMultiplier, 0],
              opacity: [0, opacity, opacity * 0.6, 0],
              scale: [0.5, 1.2, 0.9, 0.5],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};
