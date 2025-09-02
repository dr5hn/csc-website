"use client";

import { Globe, Zap, Code, RefreshCw, Heart, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Complete data for every country, state, and city worldwide with weekly updates and community verification.",
    color: "from-blue to-blue/90",
    details: [
      "250+ Countries",
      "5,000+ States",
      "151,000+ Cities",
      "Monthly Updates",
    ],
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Sub-200ms response times with 99.9% uptime backed by global CDN and enterprise infrastructure.",
    color: "from-orange to-orange/90",
    details: ["<200ms Response", "99.9% Uptime", "Global CDN", "Auto-scaling"],
  },
  {
    icon: Code,
    title: "Developer First",
    description:
      "RESTful APIs, comprehensive docs, and tools designed by developers for developers.",
    color: "from-blue to-green",
    details: ["REST APIs", "Live Docs", "Code Examples", "SDKs"],
  },
  {
    icon: RefreshCw,
    title: "Always Updated",
    description:
      "Community-driven updates, automated sync, and real-time data validation ensure maximum accuracy.",
    color: "from-blue to-blue/90",
    details: [
      "Auto Sync",
      "Community Updates",
      "Data Validation",
      "Version Control",
    ],
  },
  {
    icon: Heart,
    title: "Open Source",
    description:
      "MIT licensed core database with transparent development, community contributions, and full access.",
    color: "from-green to-green/90",
    details: ["MIT License", "Open Source", "Community Driven", "Transparent"],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-6 lg:py-12">
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm transition-shadow hover:shadow-md"
          aria-label="Why Choose Us"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse"
            aria-hidden="true"
          ></span>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
            Why Choose Us
          </span>
        </div>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-dark">
          Built for developers, by developers
        </h2>
        <p className="mt-3 text-darkgray">
          Everything you need for geographical data in one comprehensive
          platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            {/* Gradient border shell */}
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent group-hover:from-blue/20 group-hover:to-green/10 transition-colors duration-300">
              {/* Card surface */}
              <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_16px_40px_rgba(2,6,23,0.08)] transition-all duration-300">
                <div className="relative p-6 sm:p-7 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="relative flex items-start gap-4 mb-4">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-dark">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-darkgray leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-sm text-darkgray font-medium">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
