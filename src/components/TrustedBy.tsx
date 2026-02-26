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
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">
          Trusted by leading organizations worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-lg font-serif font-bold text-white/60 flex items-center gap-2"
            >
              {/* Placeholder logo icon */}
              <div className="w-6 h-6 bg-white/20 rounded-full" />
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
