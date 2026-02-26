import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export function Platform() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Platform" 
        description="Explore our comprehensive suite of deepfake detection tools, real-time API, and blockchain verification."
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-serif mb-8 text-center"
      >
        Our <span className="text-primary italic">Platform</span>
      </motion.h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        A comprehensive suite of tools designed to detect, analyze, and verify digital media authenticity.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-surface p-8 rounded-lg border border-white/5">
          <h3 className="text-2xl font-serif mb-4">Deepfake Detection Engine</h3>
          <p className="text-gray-400">
            Our proprietary AI models analyze facial movements, lighting inconsistencies, and audio-visual synchronization to identify manipulated content with 99.8% accuracy.
          </p>
        </div>
        <div className="bg-surface p-8 rounded-lg border border-white/5">
          <h3 className="text-2xl font-serif mb-4">Real-Time API</h3>
          <p className="text-gray-400">
            Integrate our detection capabilities directly into your workflow. Our API processes media in real-time, providing instant verification results for user-generated content.
          </p>
        </div>
        <div className="bg-surface p-8 rounded-lg border border-white/5">
          <h3 className="text-2xl font-serif mb-4">Metadata Analysis</h3>
          <p className="text-gray-400">
            We examine file metadata for signs of tampering, cross-referencing with known editing software signatures and device fingerprints.
          </p>
        </div>
        <div className="bg-surface p-8 rounded-lg border border-white/5">
          <h3 className="text-2xl font-serif mb-4">Blockchain Verification</h3>
          <p className="text-gray-400">
            Create an immutable record of verified content on the blockchain, ensuring a transparent chain of custody from creation to consumption.
          </p>
        </div>
      </div>
    </div>
  );
}
