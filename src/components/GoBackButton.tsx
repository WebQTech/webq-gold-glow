import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(-1)}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-4"
    >
      <motion.span
        className="inline-flex"
        animate={{ x: [0, -4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowLeft className="w-4 h-4" />
      </motion.span>
      Go Back
    </motion.button>
  );
};
