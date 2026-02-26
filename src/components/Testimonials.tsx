import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Curation AI has completely transformed our verification workflow. What used to take hours now takes seconds.",
    author: "Sarah Jenkins",
    role: "Head of Digital Forensics, Global News Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80",
  },
  {
    quote: "The deepfake detection accuracy is unmatched. It's an essential tool for maintaining trust in the age of AI.",
    author: "Marcus Thorne",
    role: "CTO, Veritas Media",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80",
  },
  {
    quote: "Implementation was seamless. The API integration allowed us to build custom workflows for our specific needs.",
    author: "Elena Rodriguez",
    role: "Director of Security, SecureStream",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            What Our Clients <span className="text-primary italic">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-surface border border-white/5 rounded-lg relative group hover:border-primary/20 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic font-serif leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.author}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[10px] text-black font-bold">
                    <span className="sr-only">Verified</span>
                    ✓
                  </div>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.author}</div>
                  <div className="text-xs text-gray-500 font-mono mt-0.5">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
