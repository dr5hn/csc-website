"use client";

import { Globe, Users, GitBranch, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const whyContribute = [
  {
    title: "Global Impact",
    description:
      "Your corrections improve data used by millions of applications and billions of users worldwide.",
    icon: Globe,
    stats: "1B+ users affected",
    color: "from-blue to-blue/90",
  },
  {
    title: "Developer Community",
    description:
      "Help thousands of fellow developers build better applications with accurate geographical data.",
    icon: Users,
    stats: "10K+ developers helped",
    color: "from-green to-green/90",
  },
  {
    title: "Open Source Legacy",
    description:
      "Contribute to one of the most comprehensive open-source geographical databases ever created.",
    icon: GitBranch,
    stats: "250+ countries covered",
    color: "from-orange to-orange/90",
  },
  {
    title: "Personal Recognition",
    description:
      "Build your reputation in the developer community while making meaningful contributions.",
    icon: Trophy,
    stats: "Public contributor profile",
    color: "from-blue to-green",
  },
];

export default function WhyContribute() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-green"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Community Impact
            </span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Why Your Contributions Matter
          </h2>
          <p className="text-lg md:text-xl text-darkgray">
            Every correction you make has a ripple effect, improving data
            accuracy for countless applications and users worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyContribute.map((reason, index) => (
            <div key={index} className="group relative">
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent group-hover:from-blue/20 group-hover:to-green/10 transition-colors duration-300 h-full">
                <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_16px_40px_rgba(2,6,23,0.08)] transition-all duration-300 h-full">
                  <div className="relative p-6 sm:p-7 flex flex-col items-center text-center h-full">
                    <div
                      className={cn(
                        "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r group-hover:scale-110 transition-transform duration-300 shadow-lg mb-5",
                        reason.color
                      )}
                    >
                      <reason.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-darkgray leading-relaxed flex-grow">
                      {reason.description}
                    </p>
                    <div className="mt-4">
                      <span
                        className={cn(
                          "inline-block rounded-full px-4 py-2 text-sm font-bold text-white",
                          reason.color
                        )}
                      >
                        {reason.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
