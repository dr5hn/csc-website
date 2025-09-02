"use client";

import { useState, useEffect, useRef } from "react";
import {
  Target,
  Zap,
  Wrench,
  Package,
  CreditCard,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Target,
    title: "Precision Data Selection",
    description:
      "Choose exactly what you need - countries only, specific regions, or complete datasets. No unnecessary data, no waste.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Instant Export Generation",
    description:
      "Get your custom dataset in seconds, not hours. Our optimized system processes and packages your data instantly.",
    color: "orange",
  },
  {
    icon: Wrench,
    title: "Custom Field Selection",
    description:
      "Select from 24+ available fields including coordinates, currencies, phone codes, timezones, and more.",
    color: "green",
  },
  {
    icon: Package,
    title: "Multiple Export Formats",
    description:
      "JSON, CSV, XML, YAML, and SQL formats. Choose the format that fits perfectly with your tech stack.",
    color: "blue",
  },
  {
    icon: CreditCard,
    title: "Fair Credit System",
    description:
      "Pay only for what you use. Credits never expire, and our transparent pricing has no hidden fees.",
    color: "orange",
  },
  {
    icon: RefreshCw,
    title: "Always Fresh Data",
    description:
      "All exports use the latest data version. Track exactly which version you downloaded for consistency.",
    color: "green",
  },
];

const accentClasses = {
  blue: {
    bg: "bg-blue/10",
    text: "text-blue",
    border: "border-blue/20",
    shadow: "shadow-blue/20",
    stroke: "stroke-blue",
  },
  orange: {
    bg: "bg-orange/10",
    text: "text-orange",
    border: "border-orange/20",
    shadow: "shadow-orange/20",
    stroke: "stroke-orange",
  },
  green: {
    bg: "bg-green/10",
    text: "text-green",
    border: "border-green/20",
    shadow: "shadow-green/20",
    stroke: "stroke-green",
  },
};

export default function ExportToolFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeFeature = features[activeIndex];
  const accent = accentClasses[activeFeature.color] || accentClasses.blue;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03] py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-dark mb-4">
            Powerful Export Features
          </h2>
          <p className="text-lg md:text-xl text-darkgray">
            Everything you need to get clean, customized geographical data in
            seconds
          </p>
        </div>

        {/* Desktop Interactive Infographic */}
        <div className="hidden lg:block relative w-full max-w-[600px] mx-auto aspect-square">
          {/* Connecting Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {features.map((feature, index) => {
              const angle = (index / features.length) * 360 - 90;
              const lineRadiusPercent = 40; // (280px icon center radius - 40px icon radius) / (600px container width / 2) * 100%
              const x =
                50 + Math.cos((angle * Math.PI) / 180) * lineRadiusPercent;
              const y =
                50 + Math.sin((angle * Math.PI) / 180) * lineRadiusPercent;
              const isActive = activeIndex === index;
              const featureAccent =
                accentClasses[feature.color] || accentClasses.blue;

              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  className={cn(
                    "transition-all duration-500",
                    isActive
                      ? cn("stroke-[2.5px]", featureAccent.stroke)
                      : "stroke-light/80 stroke-[2px]"
                  )}
                />
              );
            })}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "relative w-80 h-80 rounded-full flex items-center justify-center text-center transition-colors duration-500",
                accent.bg
              )}
            >
              <div className="absolute inset-2 rounded-full bg-white/50 backdrop-blur-md"></div>
              <div
                key={activeIndex}
                className="relative z-10 px-8 animate-fadeInUp"
                style={{ animationDuration: "500ms" }}
              >
                <h3
                  className={cn(
                    "text-2xl font-bold mb-2 transition-colors duration-500",
                    accent.text
                  )}
                >
                  {activeFeature.title}
                </h3>
                <p className="text-darkgray leading-relaxed">
                  {activeFeature.description}
                </p>
              </div>
            </div>
          </div>

          {/* Icons positioned in a circle */}
          <div className="absolute inset-0 w-full h-full">
            {features.map((feature, index) => {
              const angle = (index / features.length) * 360 - 90;
              const radius = 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const featureAccent =
                accentClasses[feature.color] || accentClasses.blue;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <button
                    onMouseEnter={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "w-20 h-20 rounded-full flex items-center justify-center bg-white border-2 transition-all duration-300",
                      activeIndex === index
                        ? cn(
                            "scale-110 shadow-2xl",
                            featureAccent.border,
                            featureAccent.shadow
                          )
                        : "border-light/80 shadow-lg hover:border-light"
                    )}
                  >
                    <feature.icon
                      className={cn(
                        "w-9 h-9 transition-colors duration-300",
                        activeIndex === index
                          ? featureAccent.text
                          : "text-darkgray"
                      )}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile List View */}
        <div className="block lg:hidden space-y-4 max-w-xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const featureAccent =
              accentClasses[feature.color] || accentClasses.blue;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-light/60 rounded-xl p-5 flex items-start gap-4"
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg",
                    featureAccent.bg
                  )}
                >
                  <Icon className={cn("w-6 h-6", featureAccent.text)} />
                </div>
                <div>
                  <h3 className="font-bold text-dark">{feature.title}</h3>
                  <p className="text-sm text-darkgray">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
