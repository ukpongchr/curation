import { motion } from "motion/react";

const companies = [
  "Global News Corp",
  "Veritas Media",
  "SecureStream",
  "TrustLens",
  "MediaGuard",
  "AuthenticLayer",
];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-mono text-gray-500 uppercase tracking-widest">
          Trusted by leading organizations worldwide
        </p>
      </div>
      
      <div className="relative flex overflow-hidden mask-image-gradient">
        {/* Gradient Masks for smooth fade in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* Double the list for seamless looping */}
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="text-xl md:text-2xl font-serif font-bold text-white/40 flex items-center gap-3 grayscale hover:grayscale-0 hover:text-primary/60 transition-all duration-300 cursor-default"
            >
              {/* Placeholder logo icon */}
              <div className="w-8 h-8 bg-white/10 rounded-full" />
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
