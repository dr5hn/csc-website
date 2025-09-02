"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative container mx-auto px-4 py-6 lg:py-12 xl:py-20">
      <div className="bg-dark rounded-3xl px-4 py-10 lg:p-12 xl:p-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue/20 px-4 py-2 mb-6 md:mb-8">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-white">
            Free to start
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Ready to Build Something Amazing?
        </h2>

        {/* Subtext */}
        <p className="text-xl text-white/80 mb-6 md:mb-12 max-w-2xl mx-auto">
          Join thousands of developers using our platform to power
          location-based features. Start building today with our generous free
          tier and scale as you grow.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Zap className="w-4 h-4 text-blue" />
            <span className="text-sm font-medium text-white">
              Instant API access
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-white">
              No credit card
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Clock className="w-4 h-4 text-blue" />
            <span className="text-sm font-medium text-white">
              5-minute setup
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-orange text-white hover:bg-orange/90 font-semibold transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-4 text-lg group">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
