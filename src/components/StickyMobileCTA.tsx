import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-lg border-t border-white/10 md:hidden"
        >
          <div className="flex gap-3">
            <Link
              to="/start-free-trial"
              className="flex-1 bg-primary text-black font-mono text-xs font-bold py-3 tracking-widest uppercase text-center rounded-sm shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="flex-1 border border-white/20 text-white font-mono text-xs font-bold py-3 tracking-widest uppercase text-center rounded-sm hover:bg-white/5"
            >
              Demo
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
