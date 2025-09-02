"use client";

import Link from "next/link";
import {
  Database,
  Code,
  Download,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  {
    icon: Database,
    title: "Start Free",
    subtitle: "Download open-source database",
    href: "https://github.com/dr5hn/countries-states-cities-database",
    accent: "blue",
    badge: "Free",
    external: true,
  },
  {
    icon: Code,
    title: "Try API",
    subtitle: "1,000 free requests monthly",
    href: "https://countrystatecity.in",
    accent: "green",
    badge: "API Key",
    external: true,
  },
  {
    icon: Download,
    title: "Export Data",
    subtitle: "3 free trial credits",
    href: "https://export.countrystatecity.in",
    accent: "orange",
    badge: "Trial",
    external: true,
  },
];

const guarantees = [
  "No setup fees",
  "Cancel anytime",
  "30-day money back",
  "Enterprise support available",
];

function Accent({ accent }) {
  const cls =
    accent === "green"
      ? "text-green bg-green/10"
      : accent === "orange"
      ? "text-orange bg-orange/10"
      : "text-blue bg-blue/10";
  return cls;
}

function ActionRow({ action, i }) {
  const Icon = action.icon;
  const accent = Accent({ accent: action.accent });

  return (
    <Link
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
      aria-label={action.title}
      className="group relative block focus:outline-none"
    >
      <div className="relative flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white/60">
        {/* Icon */}
        <div
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
            accent
          )}
        >
          <Icon className="h-6 w-6" />
        </div>

        {/* Texts */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-dark truncate">
              {action.title}
            </h3>
            {action.badge && (
              <span className="inline-flex items-center rounded-full bg-dark/5 text-darkgray px-2 py-0.5 text-xs font-semibold">
                {action.badge}
              </span>
            )}
          </div>
          <p className="text-darkgray">{action.subtitle}</p>
        </div>

        {/* Arrow */}
        <div className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-light/60 text-darkgray transition-all duration-300 group-hover:border-blue group-hover:text-blue">
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>

        {/* Divider line shimmer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
      </div>
    </Link>
  );
}

export default function PricingCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03] py-10 lg:py-20">
      {/* Background decor */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue/5 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-green/5 blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm"
            aria-label="Get started"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Get started
            </span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-dark">
            Ready to get started?
          </h2>
          <p className="mt-3 text-lg md:text-xl text-darkgray">
            Join thousands of developers using CSC Platform. Start free and
            scale as you grow.
          </p>
        </div>

        {/* Panel with gradient shell and command-style actions */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent">
            <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_16px_48px_rgba(2,6,23,0.08)]">
              {/* Actions */}
              <div className="divide-y divide-light/60">
                {actions.map((action, i) => (
                  <ActionRow key={i} action={action} i={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {guarantees.map((g) => (
              <div
                key={g}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1.5 text-sm text-darkgray"
              >
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="font-medium">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
