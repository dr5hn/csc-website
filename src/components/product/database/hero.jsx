"use client";

import Link from "next/link";
import {
  Download,
  Star,
  Database,
  FileCode2,
  FileJson,
  FileStack,
  Boxes,
  Globe,
} from "lucide-react";
import GitHubIcon from "@/icons/GitHub";
import GitHubStats from "@/components/github-stats";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const repoUrl = "https://github.com/dr5hn/countries-states-cities-database";

const stats = [
  { label: "Countries", value: "250+" },
  { label: "States", value: "5,000+" },
  { label: "Cities", value: "150,000+" },
  { label: "Size", value: "44MB+" },
  { label: "Formats", value: "9" },
];

const formats = [
  { label: "JSON", Icon: FileJson },
  { label: "SQL", Icon: FileCode2 },
  { label: "CSV", Icon: FileStack },
  { label: "XML", Icon: FileCode2 },
  { label: "YAML", Icon: FileCode2 },
  { label: "MongoDB", Icon: Database },
];

function Pill({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark",
        className
      )}
    >
      {children}
    </span>
  );
}

function FormatPill({ label, Icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-dark/5 px-3 py-1.5 text-sm text-darkgray border border-light/60">
      <Icon className="h-4 w-4 text-blue" />
      <span className="font-medium">{label}</span>
    </div>
  );
}

export default function ProductDatabaseHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-green/10 blur-3xl"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(34,150,243,0.05),transparent)]"></div>

        <div className="relative container mx-auto px-4 py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: copy + CTAs */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue/10 to-green/10 border border-blue/20 text-blue text-sm font-bold uppercase tracking-[0.1em] mb-6 shadow-md backdrop-blur-sm">
                <span className="w-2 h-2 bg-blue rounded-full mr-3 animate-pulse"></span>
                Open Source • Free Forever
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-dark">
                The world's most
                <br />
                <span className="bg-gradient-to-r from-blue via-blue to-green bg-clip-text text-transparent">
                  complete open-source
                </span>{" "}
                geographical database
              </h1>

              {/* Description */}
              <p className="mt-5 text-lg md:text-xl text-darkgray/90 leading-relaxed max-w-2xl">
                44MB+ of comprehensive geographical data covering 250+
                countries, 5,000+ states, and 150,000+ cities. Available in 9
                formats, trusted by thousands of developers worldwide.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue to-blue/90 hover:from-blue/90 hover:to-blue text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-6 h-12"
                >
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download database"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Now
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold transition-all duration-300 px-6 h-12 bg-transparent"
                >
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Star on GitHub"
                  >
                    <GitHubIcon className="h-5 w-5 mr-2" />
                    Star on GitHub
                  </Link>
                </Button>
              </div>

              {/* Guarantees / qualities */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Pill>
                  <Globe className="h-4 w-4 text-blue" />
                  Global coverage
                </Pill>
                <Pill>
                  <Boxes className="h-4 w-4 text-green" />
                  Weekly updates
                </Pill>
                <Pill>
                  <Star className="h-4 w-4 text-orange" />
                  MIT License
                </Pill>
              </div>
            </div>

            {/* Right: formats + stats in a modern glass panel */}
            <div className="relative">
              {/* Shell */}
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent">
                <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_64px_rgba(2,6,23,0.1)] overflow-hidden">
                  {/* Header ribbon */}
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                        <Database className="h-5 w-5 text-blue" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-dark leading-tight">
                          Formats & Stats
                        </div>
                        <div className="text-xs text-lightgray">
                          All the essentials at a glance
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm text-darkgray">
                      <GitHubIcon className="h-4 w-4" />
                      <span className="font-mono">Open-source</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-light/60"></div>

                  {/* Formats grid */}
                  <div className="px-6 py-5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {formats.map((f) => (
                        <FormatPill
                          key={f.label}
                          label={f.label}
                          Icon={f.Icon}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-light/60"></div>

                  {/* Stats rail */}
                  <div className="px-6 py-5">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                      {stats.map((s) => (
                        <div key={s.label} className="group">
                          <div className="text-2xl font-black font-mono text-dark leading-none">
                            {s.value}
                          </div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-lightgray mt-1">
                            {s.label}
                          </div>
                        </div>
                      ))}
                      {/* Last cell spans for visual rhythm */}
                      <div className="col-span-2 md:col-span-3 mt-3 grid grid-cols-3 gap-3">
                        <div className="h-1 rounded-full bg-gradient-to-r from-blue to-blue/40"></div>
                        <div className="h-1 rounded-full bg-gradient-to-r from-green to-green/40"></div>
                        <div className="h-1 rounded-full bg-gradient-to-r from-blue to-green"></div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-light/60"></div>

                  {/* GitHub repository metrics */}
                  <div className="px-6 py-5">
                    <GitHubStats />
                  </div>
                </div>
              </div>

              {/* floating accents */}
              <div className="pointer-events-none absolute -top-3 -right-3 h-8 w-8 rounded-full bg-blue/20 animate-pulse"></div>
              <div className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-green/20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent transform translate-y-[-1px]"></div>
      </div>
    </>
  );
}
