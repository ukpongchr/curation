import { motion } from "motion/react";
import { Newspaper, Scale, Share2, ShieldCheck } from "lucide-react";

const cases = [
  {
    icon: Newspaper,
    title: "Media & Journalism",
    description: "Verify sources and content before publishing to maintain credibility and combat misinformation.",
  },
  {
    icon: Scale,
    title: "Legal & Forensics",
    description: "Authenticate digital evidence for legal proceedings, ensuring admissibility and integrity.",
  },
  {
    icon: Share2,
    title: "Social Media Platforms",
    description: "Automated content moderation to detect and flag deepfakes and manipulated media at scale.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Services",
    description: "Prevent fraud by verifying identity documents and video KYC submissions.",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-surface-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            Industry <span className="text-primary italic">Applications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto font-light"
          >
            Protecting integrity across critical sectors with specialized detection models.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => {
             const Icon = item.icon;
             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-surface border border-white/5 rounded-lg hover:border-primary/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-primary" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
