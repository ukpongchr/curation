import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function StartFreeTrial() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-md mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface border border-white/10 p-8 rounded-lg shadow-2xl"
      >
        <h1 className="text-2xl font-serif mb-6 text-center">
          Start Your <span className="text-primary italic">Free Trial</span>
        </h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Full Name</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Work Email</label>
            <input
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dim text-black font-mono text-xs font-bold py-4 tracking-widest uppercase transition-colors rounded"
          >
            Create Account
          </button>
        </form>
        
        <p className="mt-6 text-center text-xs text-gray-500">
          Already have an account?{" "}
          <Link to="#" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
