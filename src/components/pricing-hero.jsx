"use client";

import { Check, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Check,
    backgroundColor: "bg-success/10",
    color: "text-success",
    title: "No Hidden Fees",
    description: "Transparent pricing",
  },
  {
    icon: Zap,
    backgroundColor: "bg-blue/10",
    color: "text-blue",
    title: "Instant Access",
    description: "Start immediately",
  },
  {
    icon: Shield,
    backgroundColor: "bg-green/10",
    color: "text-green",
    title: "Cancel Anytime",
    description: "No commitments",
  },
  {
    icon: Globe,
    backgroundColor: "bg-blue/10",
    color: "text-blue",
    title: "Global Scale",
    description: "Worldwide coverage",
  },
];

function FeatureCard({ feature }) {
  return (
    <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-light/50 shadow-sm hover:shadow-md transition-all duration-300">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.backgroundColor}`}
      >
        <feature.icon className={`w-5 h-5 ${feature.color}`} />
      </div>
      <div className="text-left">
        <div className="text-sm font-bold text-dark">{feature.title}</div>
        <div className="text-xs text-lightgray">{feature.description}</div>
      </div>
    </div>
  );
}

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03] py-10 lg:py-32">
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue/10 to-green/10 border border-blue/20 text-blue text-sm font-bold uppercase tracking-[0.1em] mb-8 shadow-md backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
            Simple, Transparent Pricing
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark mb-6 tracking-tight">
            Choose Your Plan
            <br />
            <span className="bg-gradient-to-r from-blue via-blue to-green bg-clip-text text-transparent p-2">
              Scale as You Grow
            </span>
          </h1>

          {/* Meta Description */}
          <p className="text-xl md:text-2xl text-darkgray/90 leading-relaxed font-medium mb-12 max-w-4xl mx-auto">
            Start free and upgrade when you need more. No hidden fees, no
            surprises. Pay only for what you use with transparent pricing for
            every product.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
