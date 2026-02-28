/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { TrustedBy } from "./components/TrustedBy";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { ContactSection } from "./components/ContactSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { SEO } from "./components/SEO";

import { Platform } from "./pages/Platform";
import { UseCases } from "./pages/UseCases";
import { HowItWorks } from "./pages/HowItWorks";
import { Pricing } from "./pages/Pricing";
import { StartFreeTrial } from "./pages/StartFreeTrial";
import { Demo } from "./pages/Demo";

function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <TrustedBy />
      <Features />
      <UseCasesSection />
      <HowItWorksSection />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <ContactSection />
      <StickyMobileCTA />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/start-free-trial" element={<StartFreeTrial />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </main>
          
          <footer className="border-t border-white/5 py-12 text-center text-xs font-mono text-gray-600">
            <p>© 2024 CURATION AI INC. ALL RIGHTS RESERVED.</p>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}
