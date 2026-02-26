import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Ready to Secure Your <span className="text-primary italic">Content</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-10 text-lg font-light"
        >
          Join leading organizations in the fight against misinformation. 
          Start your free trial today and experience the power of Curation AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/start-free-trial"
            className="bg-primary hover:bg-primary-dim text-black px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/pricing"
            className="border border-white/20 text-white px-8 py-4 font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors"
          >
            View Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
