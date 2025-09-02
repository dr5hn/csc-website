"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Smartphone, Database, BarChart4 } from "lucide-react";

const useCases = [
  {
    key: "frontend",
    title: "Frontend Developers",
    icon: Code,
    problem: "Need clean country/state dropdown data without the bloat.",
    solution: "Export only `name` and `iso2` for countries and states in JSON.",
    credits: "3 credits",
    savings: "vs 44MB database download",
    color: "blue",
  },
  {
    key: "mobile",
    title: "Mobile App Developers",
    icon: Smartphone,
    problem: "Require lightweight city data for local services.",
    solution:
      "Filter specific regions and cities, exporting only coordinates and names.",
    credits: "5-8 credits",
    savings: "vs processing 150k+ city records",
    color: "green",
  },
  {
    key: "dba",
    title: "Database Administrators",
    icon: Database,
    problem: "Need a ready-to-use SQL schema for new geo-tables.",
    solution: "Export complete dataset as a ready-to-import SQL file.",
    credits: "9 credits",
    savings: "vs writing custom import scripts",
    color: "orange",
  },
  {
    key: "data-scientist",
    title: "Data Scientists",
    icon: BarChart4,
    problem: "Analyze demographic or regional data without noise.",
    solution:
      "Custom field selection (e.g., population, timezone) for targeted analysis.",
    credits: "4-7 credits",
    savings: "vs cleaning messy, oversized datasets",
    color: "blue",
  },
];

const accentClasses = {
  blue: {
    bg: "bg-blue/10",
    text: "text-blue",
    border: "border-blue/20",
    ring: "ring-blue/50",
  },
  green: {
    bg: "bg-green/10",
    text: "text-green",
    border: "border-green/20",
    ring: "ring-green/50",
  },
  orange: {
    bg: "bg-orange/10",
    text: "text-orange",
    border: "border-orange/20",
    ring: "ring-orange/50",
  },
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeUseCase = useCases.find((uc) => uc.key === activeTab);
  const accent = accentClasses[activeUseCase.color] || accentClasses.blue;

  return (
    <section className="relative bg-dark text-white py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perfect For Every Developer
          </h2>
          <p className="text-lg md:text-xl text-white/80">
            See how different developers save time and money with targeted
            exports.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {useCases.map((useCase) => (
              <button
                key={useCase.key}
                onClick={() => setActiveTab(useCase.key)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  activeTab === useCase.key
                    ? `bg-white/10 ${accent.text} shadow-lg`
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                <useCase.icon className="h-5 w-5" />
                {useCase.title}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          {activeUseCase && (
            <div
              key={activeUseCase.key}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl p-6 sm:p-8 animate-fadeInUp"
              style={{ animationDuration: "500ms" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Problem */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-2">
                    Problem
                  </h3>
                  <p className="text-lg text-white/90">
                    {activeUseCase.problem}
                  </p>
                </div>
                {/* Solution */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400 mb-2">
                    Solution
                  </h3>
                  <p className="text-lg text-white/90">
                    {activeUseCase.solution}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold",
                    accent.bg,
                    accent.text
                  )}
                >
                  Cost: {activeUseCase.credits}
                </div>
                <div className="text-sm text-white/60 text-center sm:text-right">
                  {activeUseCase.savings}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
