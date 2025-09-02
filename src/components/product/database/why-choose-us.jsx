"use client";

import {
  Globe,
  RefreshCw,
  LockOpen,
  Package,
  Archive,
  Users,
} from "lucide-react";

const dbFeatures = [
  {
    icon: LockOpen,
    title: "Completely Open Source",
    description:
      "Licensed under ODbL — commercial use with proper attribution. No vendor lock‑in and full transparency.",
  },
  {
    icon: Package,
    title: "9 Ready‑to‑Use Formats",
    description:
      "Pick the shape you need, from relational databases to documents and flat files.",
    tags: [
      "JSON",
      "CSV",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "XML",
      "YAML",
      "SQL Server",
    ],
  },
  {
    icon: Globe,
    title: "Complete Global Coverage",
    description:
      "250+ countries, 5,000+ states/regions, and 150,000+ cities with coordinates, codes, and metadata.",
  },
  {
    icon: RefreshCw,
    title: "Regular Weekly Updates",
    description:
      "Automated and community‑verified updates ensure accuracy and freshness across the entire dataset.",
  },
  {
    icon: Archive,
    title: "Optimized File Sizes",
    description:
      "Compressed, right‑sized downloads so you only pull what you need — no unnecessary overhead.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built and maintained by a global community of developers with an open contribution model.",
  },
];

export default function WhyChooseUsDatabase() {
  return (
    <section className="container mx-auto px-4 py-12 lg:py-16">
      {/* Header - copied badge/typography */}
      <div className="text-center mb-10 lg:mb-12">
        <div
          className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm"
          aria-label="Why choose our database"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-green"
            aria-hidden="true"
          ></span>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
            Why choose our database
          </span>
        </div>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-dark">
          The foundation for your product’s location data
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg md:text-xl text-darkgray">
          Powers the entire CSC ecosystem — open source and free forever, with
          accuracy you can trust.
        </p>
      </div>

      {/* Cards: copied shell with alternating blue/green accents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {dbFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          const isBlue = idx % 2 === 0;
          const accent = isBlue
            ? "from-blue to-blue/90"
            : "from-green to-green/90";

          return (
            <div key={idx} className="group relative">
              {/* Gradient border shell */}
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent group-hover:from-blue/20 group-hover:to-green/10 transition-colors duration-300 h-full">
                {/* Card surface */}
                <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_16px_40px_rgba(2,6,23,0.08)] transition-all duration-300 h-full">
                  <div className="relative p-6 sm:p-7 flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="relative flex items-start gap-4 mb-4">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${accent} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-dark">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-darkgray leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Optional tags (formats) */}
                    {feature.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {feature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full border border-light text-darkgray bg-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
