import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Essential tools for individual creators.",
    features: ["5 verifications/month", "Basic deepfake detection", "Email support"],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Advanced features for professionals and small teams.",
    features: ["100 verifications/month", "Advanced deepfake analysis", "API access", "Priority support"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scalable solutions for large organizations.",
    features: ["Unlimited verifications", "Real-time API", "Dedicated account manager", "SLA", "On-premise deployment"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Pricing" 
        description="Simple, transparent pricing for individuals and enterprises. Start authenticating content today."
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-serif mb-8 text-center"
      >
        Simple <span className="text-primary italic">Pricing</span>
      </motion.h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Choose the plan that fits your needs. No hidden fees.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 bg-surface border rounded-lg relative flex flex-col ${
              plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-white/10"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-serif mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
            </div>
            <p className="text-gray-400 text-sm mb-8">{plan.description}</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/start-free-trial"
              className={`w-full py-3 text-center font-mono text-xs font-bold tracking-widest uppercase transition-colors rounded ${
                plan.popular
                  ? "bg-primary text-black hover:bg-primary-dim"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
