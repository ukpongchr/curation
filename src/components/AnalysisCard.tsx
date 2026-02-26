import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, FileVideo, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnalysisResult {
  fileName: string;
  aiProbability: number;
  deepfakeSignal: number;
  metadataIntegrity: number;
  confidence: number;
  analysisTime: number;
  isAiGenerated: boolean;
}

export function AnalysisCard() {
  const [status, setStatus] = useState<"idle" | "scanning" | "complete">("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleUpload = (file: File) => {
    setStatus("scanning");
    setProgress(0);
    
    // Simulate scanning process
    const duration = 2000; // 2 seconds
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        setResult({
          fileName: file.name,
          aiProbability: Math.random() > 0.5 ? 92 : 12,
          deepfakeSignal: Math.random() > 0.5 ? 88 : 5,
          metadataIntegrity: Math.random() > 0.5 ? 15 : 98,
          confidence: 97,
          analysisTime: 1.4,
          isAiGenerated: Math.random() > 0.5,
        });
        setStatus("complete");
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Card Container */}
      <div className="bg-surface/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <h3 className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase">
            Content Authentication — Live Analysis
          </h3>
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            <div className="w-1 h-1 rounded-full bg-gray-600" />
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6 min-h-[300px]">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full py-12 border-2 border-dashed border-white/10 rounded-lg hover:border-primary/50 transition-colors cursor-pointer group"
                onClick={() => {
                  // Simulate file selection
                  const file = new File([""], "executive_statement_final.mp4", { type: "video/mp4" });
                  handleUpload(file);
                }}
              >
                <Upload className="w-8 h-8 text-gray-500 group-hover:text-primary mb-4 transition-colors" />
                <p className="text-xs font-mono text-gray-400">DRAG & DROP OR CLICK TO UPLOAD</p>
                <p className="text-[10px] text-gray-600 mt-2">Supports MP4, MOV, JPG, PNG, WAV</p>
              </motion.div>
            )}

            {status === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="relative aspect-square w-full max-w-[200px] mx-auto rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80" 
                    alt="Scanning Subject"
                    className="w-full h-full object-cover opacity-50 grayscale"
                  />
                  
                  {/* Scanning Line */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-primary shadow-[0_0_20px_rgba(0,163,218,0.8)] z-10"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                  />
                  
                  {/* Face Detection Box Overlay */}
                  <motion.div 
                    className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-primary/50 rounded-sm"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: [0, 1, 0], scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-gray-400">
                    <span>ANALYZING BIOMETRICS...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {status === "complete" && result && (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* File Info */}
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                  <FileVideo className="w-4 h-4 text-primary" />
                  <span>Uploaded: {result.fileName}</span>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <MetricBar label="AI GENERATION PROBABILITY" value={result.aiProbability} color={result.isAiGenerated ? "text-red-500" : "text-green-500"} barColor={result.isAiGenerated ? "bg-red-500" : "bg-green-500"} />
                  <MetricBar label="DEEPFAKE SIGNAL" value={result.deepfakeSignal} color={result.isAiGenerated ? "text-red-500" : "text-green-500"} barColor={result.isAiGenerated ? "bg-red-500" : "bg-green-500"} />
                  <MetricBar label="METADATA INTEGRITY" value={result.metadataIntegrity} color={!result.isAiGenerated ? "text-green-500" : "text-red-500"} barColor={!result.isAiGenerated ? "bg-green-500" : "bg-red-500"} />
                </div>

                <div className="h-px bg-white/10" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded">
                    <div className="text-xl font-serif text-primary">{result.confidence}%</div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase mt-1">Confidence</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded">
                    <div className="text-xl font-serif text-primary">{result.analysisTime}s</div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase mt-1">Analysis Time</div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={cn(
                  "flex items-center justify-center gap-2 p-3 rounded text-[10px] font-mono tracking-widest uppercase",
                  result.isAiGenerated ? "bg-red-500/10 text-red-500 border border-red-500/20" : "bg-green-500/10 text-green-500 border border-green-500/20"
                )}>
                  <div className={cn("w-2 h-2 rounded-full animate-pulse", result.isAiGenerated ? "bg-red-500" : "bg-green-500")} />
                  {result.isAiGenerated ? "Likely AI-Generated — Flagged for Review" : "Authentic Content — Verified"}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}

function MetricBar({ label, value, color, barColor }: { label: string; value: number; color: string; barColor: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
        <span>{label}</span>
        <span className={color}>{value}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full", barColor)}
        />
      </div>
    </div>
  );
}
