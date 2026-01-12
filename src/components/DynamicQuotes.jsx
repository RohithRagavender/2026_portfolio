import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Quotes from "../data/Quotes";

const DynamicQuote = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[40px] text-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="text-gray-400 italic"
        >
          “{Quotes[index]}”
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default DynamicQuote;
