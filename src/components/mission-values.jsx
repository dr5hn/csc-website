"use client";
import { Target, Users, GitBranch } from "lucide-react";

function AccentIcon({ Icon, accent = "blue" }) {
  const cls =
    accent === "green" ? "text-green bg-green/10" : "text-blue bg-blue/10";

  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${cls}`}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

function MissionCard({ title, description, accent = "blue", Icon }) {
  return (
    <div className="border-2 border-blue/20 rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] transition-all duration-300 h-full relative p-6 sm:p-7 flex flex-col justify-between h-full">
      <div className="relative flex items-start gap-4">
        <AccentIcon Icon={Icon} accent={accent} />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-dark">{title}</h3>
          <p className="mt-2 text-darkgray leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function MissionValues() {
  return (
    <section className="relative bg-gradient-to-br from-white via-light/30 to-blue/5">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm"
            aria-label="Products"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-green"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Mission & Vision
            </span>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-darkgray max-w-2xl mx-auto">
            Empowering developers worldwide with accurate geographical data
            while fostering innovation and breaking down barriers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-12">
          {/* First row (Mission cards) */}
          <MissionCard
            title="Our Mission"
            description="To provide the world's most accurate, comprehensive, and accessible geographical database, empowering developers to build location-aware applications that connect people globally."
            accent="blue"
            Icon={Target}
          />

          <MissionCard
            title="Open Source & Community"
            description="Open source and community-driven development with enterprise-grade reliability and performance, accessible to developers worldwide."
            accent="green"
            Icon={Users}
          />

          <MissionCard
            title="Global Accessibility"
            description="Making geographical data accessible to developers worldwide, removing barriers to innovation and enabling global connectivity."
            accent="blue"
            Icon={GitBranch}
          />

          {/* Second row (Vision cards) */}
          <MissionCard
            title="Our Vision"
            description="A world where geographical data barriers don't exist, enabling innovation and connection across borders through technology and community collaboration."
            accent="green"
            Icon={Target}
          />

          <MissionCard
            title="Breaking Data Silos"
            description="Breaking down data silos globally while fostering innovation through accessibility and building bridges through technology."
            accent="blue"
            Icon={Users}
          />

          <MissionCard
            title="Innovation Through Access"
            description="Building bridges through technology and fostering innovation by making comprehensive geographical data freely accessible to all."
            accent="green"
            Icon={GitBranch}
          />
        </div>
      </div>
    </section>
  );
}
