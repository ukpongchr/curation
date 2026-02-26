import { motion } from "motion/react";
import { UseCasesSection } from "../components/UseCasesSection";
import { SEO } from "../components/SEO";

export function UseCases() {
  return (
    <>
      <SEO 
        title="Use Cases" 
        description="Discover how Curation AI protects media integrity across journalism, legal, social media, and financial sectors."
      />
      <div className="pt-20">
        <div className="py-20 px-6 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Use <span className="text-primary italic">Cases</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Protecting integrity across industries with specialized solutions.
          </p>
        </div>
        <UseCasesSection />
      </div>
    </>
  );
}
