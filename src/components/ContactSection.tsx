import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-surface-light relative overflow-hidden" id="contact">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-active/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Get in <span className="text-primary italic">Touch</span>
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed max-w-md">
              Have questions about our enterprise solutions? Our team is ready to help you secure your digital content infrastructure.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-surface border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400 text-sm mb-1">General Inquiries</p>
                  <a href="mailto:hello@curation.ai" className="text-primary hover:text-primary-dim transition-colors font-mono text-sm">hello@curation.ai</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-surface border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400 text-sm mb-1">Mon-Fri from 8am to 5pm PST</p>
                  <a href="tel:+15550000000" className="text-primary hover:text-primary-dim transition-colors font-mono text-sm">+1 (555) 000-0000</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-surface border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    100 Innovation Drive, Suite 500<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Work Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dim text-black font-mono text-xs font-bold py-4 tracking-widest uppercase transition-colors rounded flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
