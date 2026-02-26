import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How accurate is the deepfake detection?",
    answer: "Our models achieve 99.8% accuracy on standard benchmarks. We utilize a multi-modal approach analyzing visual artifacts, audio inconsistencies, and metadata anomalies to provide the highest level of confidence.",
  },
  {
    question: "Can I integrate Curation AI into my existing workflow?",
    answer: "Yes, we offer a robust REST API and SDKs for Python, Node.js, and other major languages, allowing seamless integration into your content management systems and moderation pipelines.",
  },
  {
    question: "What file formats do you support?",
    answer: "We support all major image (JPG, PNG, WEBP, TIFF), video (MP4, MOV, AVI, MKV), and audio (MP3, WAV, AAC) formats. We also support document analysis for PDF and DOCX.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We are SOC2 Type II compliant and ISO 27001 certified. All data is encrypted in transit and at rest. We do not use your data to train our models without explicit permission.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on our Pro plan, and a forever-free Starter plan for individual creators with limited verification needs.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/5 rounded-lg bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-serif text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
