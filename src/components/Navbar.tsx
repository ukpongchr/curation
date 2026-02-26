import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* "C" Bubble Placeholder - optional based on request "C bubble" */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold font-mono">C</div>
          <span className="font-mono text-xl tracking-widest font-bold text-brand-dark group-hover:opacity-80 transition-opacity">
            CURATION <span className="text-primary">AI</span>™
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "HOME", path: "/" },
            { name: "PLATFORM", path: "/platform" },
            { name: "USE CASES", path: "/use-cases" },
            { name: "HOW IT WORKS", path: "/how-it-works" },
            { name: "PRICING", path: "/pricing" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-xs font-mono tracking-widest transition-colors",
                isActive(item.path) 
                  ? "text-brand-active font-bold" 
                  : "text-brand-dark hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/start-free-trial"
            className="bg-primary hover:bg-primary-dim text-black font-mono text-xs font-bold px-6 py-3 tracking-widest transition-colors uppercase inline-block rounded-sm"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-surface border-b border-white/5 p-6 flex flex-col gap-4"
        >
          {[
            { name: "HOME", path: "/" },
            { name: "PLATFORM", path: "/platform" },
            { name: "USE CASES", path: "/use-cases" },
            { name: "HOW IT WORKS", path: "/how-it-works" },
            { name: "PRICING", path: "/pricing" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-mono tracking-widest transition-colors",
                isActive(item.path) 
                  ? "text-brand-active font-bold" 
                  : "text-gray-400 hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/start-free-trial"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-black font-mono text-xs font-bold px-6 py-3 tracking-widest uppercase w-full text-center rounded-sm"
          >
            Start Free Trial
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
