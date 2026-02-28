import { motion } from "motion/react";
import { AnalysisCard } from "./AnalysisCard";
import { Link } from "react-router-dom";

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-light -z-20" />
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-15 translate-x-1/2 -translate-y-1/2" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2], 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-active/10 rounded-full blur-[100px] -z-15 -translate-x-1/2 translate-y-1/2" 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-8 md:w-12 bg-primary" />
              <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Real-Time Content Intelligence
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-4 md:mb-6">
              <motion.span custom={0} variants={textVariants} initial="hidden" animate="visible" className="block">
                Authenticate
              </motion.span>
              <motion.span custom={1} variants={textVariants} initial="hidden" animate="visible" className="block italic text-primary">
                Reality
              </motion.span>
              <motion.span custom={2} variants={textVariants} initial="hidden" animate="visible" className="block">
                Instantly.
              </motion.span>
            </h1>
            
            <motion.p 
              custom={3} 
              variants={textVariants} 
              initial="hidden" 
              animate="visible"
              className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base font-light mb-6"
            >
              Curation AI™ verifies images, video, audio, documents, and text in seconds. 
              Detect deepfakes, AI-generated content, and misinformation before it spreads.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/start-free-trial"
              className="bg-white text-black px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors inline-block text-center rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Get Started
            </Link>
            <Link 
              to="/demo"
              className="border border-white/20 text-white px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors inline-block text-center rounded-sm"
            >
              View Demo
            </Link>
          </motion.div>

          {/* Conversion Micro-copy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-4 text-[10px] md:text-xs text-gray-500 font-mono"
          >
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> 14-day free trial
            </span>
            <span className="flex items-center gap-1">
              <span className="text-primary">✓</span> No credit card required
            </span>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="pt-8 border-t border-white/5 flex gap-6 md:gap-8"
          >
            {["SOC2 Compliant", "GDPR Ready", "ISO 27001"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 font-mono uppercase">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Interactive Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <AnalysisCard />
        </motion.div>
        
        {/* Mobile-only scaled card (optional, or just hide it to save space if needed, but user wants faces) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative lg:hidden mt-8"
        >
           <AnalysisCard />
        </motion.div>

      </div>
    </section>
  );
}
