"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, Zap, Target, Package } from "lucide-react";
import Link from "next/link";

export default function CtaExportTool() {
  return (
    <section className="relative container mx-auto px-4 py-6 lg:py-12 xl:py-20">
      <div className="bg-dark rounded-3xl px-4 py-10 lg:p-12 xl:p-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-blue/20 px-4 py-2 mb-6 md:mb-8">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-white">
            Get Started
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Ready to Export Smart?
        </h2>

        {/* Subtext */}
        <p className="text-xl text-white/80 mb-6 md:mb-12 max-w-2xl mx-auto">
          Join thousands of developers who've saved hours of data processing
          time. Start with 3 free credits - no credit card required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            className="bg-orange text-white hover:bg-orange/90 font-semibold transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-4 text-lg group"
          >
            <Link href="#">
              Start Free Trial
              <Target className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-dark font-semibold transition-all duration-300 px-8 py-4 text-lg group bg-transparent"
          >
            <Link href="#">
              See Live Demo
              <Play className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Check className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-white">
              3 free credits
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Zap className="w-4 h-4 text-blue" />
            <span className="text-sm font-medium text-white">
              Instant downloads
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Target className="w-4 h-4 text-orange" />
            <span className="text-sm font-medium text-white">
              Custom selection
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Package className="w-4 h-4 text-green" />
            <span className="text-sm font-medium text-white">All formats</span>
          </div>
        </div>
      </div>
    </section>
  );
}
