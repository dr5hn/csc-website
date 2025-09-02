"use client";

import Link from "next/link";
import GitHubIcon from "@/icons/GitHub";
import { Users, Code, Heart, MessageCircle } from "lucide-react";

const actions = [
  {
    icon: Users,
    title: "Contribute",
    description:
      "Help improve data accuracy and coverage by submitting updates and corrections.",
    href: "https://manager.countrystatecity.in",
    accent: "blue",
  },
  {
    icon: Code,
    title: "Develop",
    description:
      "Build applications with our APIs and tools to create location‑aware experiences.",
    href: "https://docs.countrystatecity.in",
    accent: "green",
  },
  {
    icon: Heart,
    title: "Support",
    description:
      "Sustain the project by using our paid services or sharing it with others.",
    href: "/contact",
    accent: "orange",
  },
];

function ActionCard({ action }) {
  const Icon = action.icon;
  const iconWrap =
    action.accent === "green"
      ? "bg-green/10"
      : action.accent === "orange"
      ? "bg-orange/10"
      : "bg-blue/10";
  const iconColor =
    action.accent === "green"
      ? "text-green"
      : action.accent === "orange"
      ? "text-orange"
      : "text-blue";
  const linkColor =
    action.accent === "green"
      ? "text-green hover:text-green/90"
      : action.accent === "orange"
      ? "text-orange hover:text-orange/90"
      : "text-blue hover:text-blue/90";

  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent hover:from-blue/20 hover:to-green/10 transition-colors duration-300 group relative">
      <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_16px_40px_rgba(2,6,23,0.08)] transition-all duration-300 p-8 h-full text-center">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${iconWrap} mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`h-7 w-7 ${iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-dark mb-3">{action.title}</h3>
        <p className="text-darkgray mb-6 leading-relaxed">
          {action.description}
        </p>
        <Link
          href={action.href}
          target={action.href.startsWith("http") ? "_blank" : undefined}
          rel={
            action.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className={`inline-flex items-center gap-1.5 font-semibold ${linkColor}`}
        >
          {action.title} →
        </Link>
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-20 container mx-auto px-4 text-center">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
          Join{" "}
        </span>
        Our Growing Community
      </h2>
      <p className="text-darkgray max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
        Become part of a global community of developers, contributors, and data
        enthusiasts working together to make geographical data accessible for
        everyone.
      </p>

      {/* Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-10 md:my-14">
        {actions.map((action, i) => (
          <ActionCard key={i} action={action} />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="https://github.com/dr5hn/countries-states-cities-database"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-dark rounded-full text-white hover:bg-dark/90 transition-colors duration-200"
        >
          <GitHubIcon className="w-5 h-5" />
          <span className="font-semibold">Star on GitHub</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-dark text-dark hover:bg-dark hover:text-white transition-colors duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Contact Us</span>
        </Link>
      </div>
    </section>
  );
}
