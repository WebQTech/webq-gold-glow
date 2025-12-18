import { motion } from "framer-motion";

export const Hero3DVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Orbiting Rings */}
      <div className="absolute orbit-ring orbit-1" />
      <div className="absolute orbit-ring orbit-2" />
      <div className="absolute orbit-ring orbit-3" />

      {/* 3D Rotating Cube */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="cube-container z-10"
        style={{ willChange: "transform" }}
      >
        <div className="cube">
          <div className="cube-face cube-face-front" />
          <div className="cube-face cube-face-back" />
          <div className="cube-face cube-face-right" />
          <div className="cube-face cube-face-left" />
          <div className="cube-face cube-face-top" />
          <div className="cube-face cube-face-bottom" />
        </div>
      </motion.div>

      {/* Floating Nodes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute"
      >
        {/* Node 1 */}
        <div className="absolute -top-20 left-10 float-1">
          <div className="floating-node w-4 h-4" />
          <div className="node-pulse w-4 h-4 absolute top-0 left-0" />
        </div>

        {/* Node 2 */}
        <div className="absolute top-0 -right-20 float-2">
          <div className="floating-node w-3 h-3" />
          <div className="node-pulse w-3 h-3 absolute top-0 left-0" />
        </div>

        {/* Node 3 */}
        <div className="absolute -bottom-16 left-20 float-3">
          <div className="floating-node w-3.5 h-3.5" />
          <div className="node-pulse w-3.5 h-3.5 absolute top-0 left-0" />
        </div>

        {/* Node 4 */}
        <div className="absolute bottom-10 -right-16 float-4">
          <div className="floating-node w-2.5 h-2.5" />
          <div className="node-pulse w-2.5 h-2.5 absolute top-0 left-0" />
        </div>

        {/* Node 5 */}
        <div className="absolute top-20 -left-24 float-5">
          <div className="floating-node w-3 h-3" />
          <div className="node-pulse w-3 h-3 absolute top-0 left-0" />
        </div>
      </motion.div>

      {/* Floating Service Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -top-8 -left-8 service-tag float-1"
      >
        ☁️ Cloud
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute top-4 -right-12 service-tag float-2"
      >
        🤖 AI
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -bottom-4 -left-4 service-tag float-3"
      >
        🔒 Security
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-16 -right-8 service-tag float-4"
      >
        ⚡ Fast
      </motion.div>
    </div>
  );
};
