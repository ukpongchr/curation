import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Demo() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-serif mb-8 text-center"
      >
        Interactive <span className="text-primary italic">Demo</span>
      </motion.h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Experience our detection engine in action. Upload a file to see the analysis.
      </p>
      
      <div className="w-full max-w-4xl aspect-video bg-surface border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Demo Environment Loading...</p>
        </div>
        {/* In a real app, this would be the actual demo interface */}
      </div>

      <div className="mt-12 text-center">
        <Link to="/start-free-trial" className="text-primary hover:underline font-mono text-sm uppercase tracking-widest">
          Get Full Access &rarr;
        </Link>
      </div>
    </div>
  );
}
