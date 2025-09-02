"use client";

import { X } from "lucide-react";

const painPoints = [
  "Manually collecting country, state, and city data",
  "Constantly fixing outdated location info",
  "Dealing with inconsistent formats (CSV, JSON, SQL)",
  "Writing your own location lookup logic",
  "Hunting for API endpoints from unreliable sources",
];

export default function SkipTheHassle() {
  return (
    <section className="relative container mx-auto px-4 py-6 lg:py-12">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
        {/* Left Column - Pain Points */}
        <div className="space-y-4 order-2 lg:order-1">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-light/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-danger/10 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-danger stroke-[3]" />
                </div>
                <div className="relative">
                  <p className="text-lightgray leading-relaxed font-medium">
                    {point}
                  </p>
                  {/* Strike-through line */}
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-orange/60 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Solution */}
        <div className="order-1 lg:order-2">
          {/* Reliability Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange text-white text-sm font-bold uppercase tracking-wider mb-6">
            Reliability
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 tracking-tight leading-tight">
            Skip the hassle
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-darkgray leading-relaxed mb-4">
            Stop wasting time wrangling location data. Whether you’re building
            an app, analyzing trends, or preparing a report, our API delivers
            accurate, up-to-date country, state, and city information in one
            request — ready in the format you need.
          </p>

          {/* Optional Proof */}
          <p className="text-sm text-lightgray">
            Trusted by thousands of developers, analysts, and businesses
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
