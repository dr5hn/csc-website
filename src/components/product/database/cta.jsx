"use client";
import { Button } from "@/components/ui/button";
import {
  Star,
  Bug,
  Database,
  MessagesSquare,
  GitBranch,
  Users,
  Download,
  Trophy,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    icon: Star,
    title: "Star the Repository",
    description: "Show your support and stay updated with new releases",
    action: "Star on GitHub",
    href: "https://github.com/dr5hn/countries-states-cities-database",
    accent: "blue",
  },
  {
    icon: Bug,
    title: "Report Issues",
    description: "Found a bug or incorrect data? Help us improve",
    action: "Create Issue",
    href: "https://github.com/dr5hn/countries-states-cities-database/issues",
    accent: "green",
  },
  {
    icon: Database,
    title: "Contribute Data",
    description: "Submit corrections and additions through our update tool",
    action: "Submit Changes",
    href: "https://manager.countrystatecity.in",
    accent: "blue",
  },
  {
    icon: MessagesSquare,
    title: "Join Discussions",
    description: "Share ideas, ask questions, and connect with the community",
    action: "Start Discussion",
    href: "https://github.com/dr5hn/countries-states-cities-database/discussions",
    accent: "green",
  },
];

const stats = [
  { label: "GitHub Stars", value: "6.8K+", icon: Star, accent: "blue" },
  { label: "Forks", value: "2.3K+", icon: GitBranch, accent: "green" },
  { label: "Contributors", value: "127", icon: Users, accent: "green" },
  { label: "Downloads", value: "50M+", icon: Download, accent: "blue" },
];

export default function DatabaseCTA() {
  return (
    <section className="relative container mx-auto px-4 py-6 md:py-10 xl:py-16">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm">
        <span
          className="h-1.5 w-1.5 rounded-full bg-green"
          aria-hidden="true"
        />
        <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
          Community
        </span>
      </div>

      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-balance">
        <span className="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
          Join Our Growing Community
        </span>
      </h2>
      <p className="mt-2 max-w-2xl text-lg leading-relaxed text-darkgray">
        {
          "Thousands of developers worldwide contribute to and benefit from this open-source project"
        }
      </p>

      {/* actions grid - light cards aligned with Products/Community shells */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-10">
        {actions.map((item, idx) => {
          const Icon = item.icon;
          const isBlue = item.accent === "blue";
          return (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.action}
              className="group relative block rounded-2xl p-[1px] bg-gradient-to-r from-blue/10 to-green/10 hover:from-blue/20 hover:to-green/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:-translate-y-0.5 duration-300"
            >
              <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-light/60 shadow-sm transition-all duration-300 group-hover:shadow-lg h-full p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`min-w-12 h-12 rounded-xl flex items-center justify-center ring-1 ring-light shadow-sm transition-colors duration-300 ${
                      isBlue
                        ? "bg-blue/10 group-hover:bg-blue/20"
                        : "bg-green/10 group-hover:bg-green/20"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isBlue ? "text-blue" : "text-green"
                      }`}
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-dark">
                      {item.title}
                    </h3>
                    <p className="text-sm text-darkgray">{item.description}</p>
                  </div>
                </div>

                <Button
                  size="sm"
                  className="h-8 rounded-full px-3 text-xs font-semibold bg-dark text-white hover:bg-dark/90"
                >
                  {item.action}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mb-4 flex items-center gap-2 mt-6 lg:mt-10">
        <Trophy className="h-4 w-4 text-blue" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-dark">Project Statistics</h3>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          const isBlue = s.accent === "blue";
          return (
            <div key={i} className="flex items-center gap-3">
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
                  isBlue ? "bg-blue/10" : "bg-green/10"
                }`}
                aria-hidden="true"
              >
                <Icon
                  className={`h-4 w-4 ${isBlue ? "text-blue" : "text-green"}`}
                />
              </span>
              <div>
                <p
                  className={`text-lg font-semibold ${
                    isBlue ? "text-blue" : "text-green"
                  }`}
                >
                  {s.value}
                </p>
                <p className="text-xs text-darkgray">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
