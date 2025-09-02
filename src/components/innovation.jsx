"use client";

import { cn } from "@/lib/utils";
import {
  Target,
  Users,
  Heart,
  Globe,
  Shield,
  Zap,
  Cpu,
  Cloud,
  RefreshCw,
  Server,
  Activity,
} from "lucide-react";

const innovationItems = [
  {
    icon: Cpu,
    title: "AI-Powered Validation",
    description:
      "Machine learning validates and cross‑references geographical data from multiple sources for maximum accuracy.",
    kind: "Innovation",
    accent: "green",
  },
  {
    icon: Cloud,
    title: "Global CDN Infrastructure",
    description:
      "Distributed architecture delivers sub‑200ms responses worldwide with enterprise‑grade reliability.",
    kind: "Innovation",
    accent: "blue",
  },
  {
    icon: RefreshCw,
    title: "Real-time Synchronization",
    description:
      "Automated systems keep data consistent across platforms and tools with seamless, continuous updates.",
    kind: "Innovation",
    accent: "green",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Hardened infrastructure with rate limiting, API key controls, domain restrictions, and continuous monitoring.",
    kind: "Innovation",
    accent: "orange",
  },
];

const valuesItems = [
  {
    icon: Target,
    title: "Accuracy First",
    description:
      "Every data point is verified through layered reviews and automated checks. Precision over speed.",
    kind: "Value",
    accent: "blue",
  },
  {
    icon: Users,
    title: "Community Ownership",
    description:
      "Built by the community, for the community. Open-source foundation ensures transparency and trust.",
    kind: "Value",
    accent: "green",
  },
  {
    icon: Heart,
    title: "Developer Empathy",
    description:
      "We are developers. Every API and tool is designed with developer experience at the center.",
    kind: "Value",
    accent: "blue",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Reliable geographical data for everyone, everywhere—no barriers, no restrictions.",
    kind: "Value",
    accent: "green",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description:
      "99.9% uptime, robust security, and transparent operations that teams can depend on.",
    kind: "Value",
    accent: "blue",
  },
  {
    icon: Zap,
    title: "Innovation Drive",
    description:
      "We continually push geodata forward—from AI‑powered validation to real‑time sync systems.",
    kind: "Value",
    accent: "green",
  },
];

function AccentIcon({ Icon, accent }) {
  const bg =
    accent === "green"
      ? "bg-green/10"
      : accent === "orange"
      ? "bg-orange/10"
      : "bg-blue/10";
  const color =
    accent === "green"
      ? "text-green"
      : accent === "orange"
      ? "text-orange"
      : "text-blue";

  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl",
        bg
      )}
    >
      <Icon className={cn("h-6 w-6", color)} />
    </div>
  );
}

function ItemRow({ item }) {
  const rail =
    item.accent === "green"
      ? "from-green/40 to-green/0"
      : item.accent === "orange"
      ? "from-orange/40 to-orange/0"
      : "from-blue/40 to-blue/0";

  const badge =
    item.kind === "Innovation"
      ? "bg-blue/10 border-blue/20 text-blue"
      : "bg-green/10 border-green/20 text-green";

  return (
    <div className="relative pl-5">
      {/* Rail */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b",
          rail
        )}
      ></div>

      <div className="flex items-start gap-4 py-5">
        <AccentIcon Icon={item.icon} accent={item.accent} />
        <div className="flex-1">
          <div className="mb-1">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                badge
              )}
            >
              {item.kind}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-dark leading-snug">
            {item.title}
          </h3>
          <p className="mt-1.5 text-darkgray leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
      {/* Divider */}
      <div className="h-px bg-light/60"></div>
    </div>
  );
}

function StatsRibbon() {
  const stats = [
    { icon: Server, value: "99.9%", label: "Uptime SLA" },
    { icon: Zap, value: "<200ms", label: "Response Time" },
    { icon: Globe, value: "50+", label: "CDN Locations" },
    { icon: Activity, value: "24/7", label: "Monitoring" },
  ];

  return (
    <div className="relative mt-10">
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-blue/30 to-green/30">
        <div className="bg-gradient-to-r from-blue to-blue/90 rounded-[calc(1rem-1px)] p-3 md:px-6 md:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-white/20 p-2.5 rounded-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black font-mono leading-none">
                      {s.value}
                    </div>
                    <div className="text-xs opacity-90">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* soft glows */}
      <div className="hidden md:block pointer-events-none absolute -top-6 -right-6 w-28 h-28 bg-blue/30 blur-2xl rounded-full"></div>
      <div className="hidden md:block pointer-events-none absolute -bottom-6 -left-6 w-28 h-28 bg-green/30 blur-2xl rounded-full"></div>
    </div>
  );
}

export default function InnovationValues() {
  return (
    <section className="relative bg-gradient-to-br from-white via-light/30 to-blue/5">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        {/* Unified header */}
        <div className="text-center mb-10 md:mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm"
            aria-label="Our DNA"
          >
            <span
              className="h-2 w-2 rounded-full bg-gradient-to-r from-blue to-green"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Our DNA
            </span>
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-dark tracking-tight leading-tight">
            Innovation at our core, guided by values
          </h2>
          <p className="mt-3 text-lg md:text-xl text-darkgray">
            A unified approach: cutting‑edge capabilities shaped by principles
            that serve developers first.
          </p>
        </div>

        {/* Single unified layout (no cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Innovation list */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-light/60 p-4 sm:p-6">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-lightgray">
              Innovation
            </div>
            <div className="divide-y divide-light/60">
              {innovationItems.map((item, i) => (
                <ItemRow key={`inno-${i}`} item={item} />
              ))}
            </div>
          </div>

          {/* Values list */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-light/60 p-4 sm:p-6">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-lightgray">
              Core Values
            </div>
            <div className="divide-y divide-light/60">
              {valuesItems.map((item, i) => (
                <ItemRow key={`val-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Unified stats ribbon */}
        <StatsRibbon />
      </div>
    </section>
  );
}
