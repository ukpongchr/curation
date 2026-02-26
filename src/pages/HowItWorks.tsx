import { motion } from "motion/react";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { SEO } from "../components/SEO";

export function HowItWorks() {
  return (
    <>
      <SEO 
        title="How It Works" 
        description="Learn about our multi-modal AI analysis workflow, from media upload to blockchain certification."
      />
      <div className="pt-20">
        <div className="py-20 px-6 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            How It <span className="text-primary italic">Works</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our proprietary deepfake detection pipeline explained.
          </p>
        </div>
        <HowItWorksSection />
      </div>
    </>
  );
}
