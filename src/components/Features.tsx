import { motion } from "motion/react";
import { Shield, Zap, Eye, Lock, FileSearch, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Deepfake Detection",
    description: "Advanced neural networks analyze facial artifacts and inconsistencies to identify manipulated media.",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Process hours of video content in minutes with our optimized edge-computing architecture.",
  },
  {
    icon: Eye,
    title: "Visual Forensics",
    description: "Detailed heatmaps showing manipulated regions within images and video frames.",
  },
  {
    icon: Lock,
    title: "Chain of Custody",
    description: "Blockchain-backed immutable logs ensuring the integrity of verified content.",
  },
  {
    icon: FileSearch,
    title: "Metadata Verification",
    description: "Cross-reference file metadata with global registries to validate origin and history.",
  },
  {
    icon: Globe,
    title: "Global Intelligence",
    description: "Connected to a worldwide network of threat intelligence for emerging synthesis techniques.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Enterprise-Grade <span className="text-primary italic">Protection</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Our platform provides a comprehensive suite of tools to authenticate content and protect your organization from disinformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-white/5 bg-surface/50 backdrop-blur-sm hover:bg-surface-light hover:border-primary/30 transition-all duration-300 rounded-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
