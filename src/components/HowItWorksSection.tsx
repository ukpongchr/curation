import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Upload Media",
    description: "Upload images, videos, or audio files directly to our secure platform or via API.",
  },
  {
    step: "02",
    title: "AI Analysis",
    description: "Our multi-modal AI engines analyze the content for visual, auditory, and metadata anomalies.",
  },
  {
    step: "03",
    title: "Verification Report",
    description: "Receive a detailed report with a confidence score, highlighting potential manipulation.",
  },
  {
    step: "04",
    title: "Certification",
    description: "Authentic content is cryptographically signed and registered on the blockchain.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            How It <span className="text-primary italic">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto font-light"
          >
            A seamless workflow from ingestion to authentication.
          </motion.p>
        </div>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
                <span className="text-xs font-mono font-bold text-primary">{item.step}</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-surface border border-white/5 rounded-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
