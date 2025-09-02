"use client";

import { Button } from "@/components/ui/button";
import { Wrench, PlusCircle, Users, Bug, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const options = [
  {
    title: "Submit a Correction",
    description:
      "Found incorrect city, state, or country data? Help us fix it.",
    icon: Wrench,
    action: "Submit Correction",
    color: "blue",
    href: "#", // Placeholder link
  },
  {
    title: "Add Missing Data",
    description: "Know of a missing city or region? Add it to our database.",
    icon: PlusCircle,
    action: "Add New Entry",
    color: "green",
    href: "#",
  },
  {
    title: "Review Submissions",
    description: "Help verify and discuss submissions from other contributors.",
    icon: Users,
    action: "Start Reviewing",
    color: "orange",
    href: "#",
  },
  {
    title: "Report Issues",
    description: "Found a bug or have suggestions for improvement?",
    icon: Bug,
    action: "Report Issue",
    color: "dark",
    href: "https://github.com/dr5hn/countries-states-cities-database/issues",
  },
];

function AccentIcon({ Icon, accent }) {
  const bg =
    accent === "green"
      ? "bg-green/10"
      : accent === "orange"
      ? "bg-orange/10"
      : accent === "dark"
      ? "bg-dark/10"
      : "bg-blue/10";
  const color =
    accent === "green"
      ? "text-green"
      : accent === "orange"
      ? "text-orange"
      : accent === "dark"
      ? "text-dark"
      : "text-blue";

  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl",
        bg
      )}
    >
      <Icon className={cn("h-6 w-6", color)} />
    </div>
  );
}

function ActionRow({ option }) {
  const { icon: Icon, title, description, action, color, href } = option;

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative block focus:outline-none"
    >
      <div className="relative flex flex-col sm:flex-row items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white/70">
        <AccentIcon Icon={Icon} accent={color} />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-dark leading-tight">
            {title}
          </h3>
          <p className="text-darkgray mt-1">{description}</p>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-4">
          <Button
            size="sm"
            className={cn(
              "font-semibold transition-all duration-300 transform group-hover:-translate-y-0.5",
              color === "blue"
                ? "bg-blue text-white hover:bg-blue/90"
                : color === "green"
                ? "bg-green text-white hover:bg-green/90"
                : color === "orange"
                ? "bg-orange text-white hover:bg-orange/90"
                : "bg-dark text-white hover:bg-dark/90"
            )}
          >
            {action}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
      </div>
    </Link>
  );
}

export default function Difference() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl text-darkgray">
            Getting started is easy. Choose how you'd like to contribute to the
            global geographical database.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent">
            <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_16px_48px_rgba(2,6,23,0.08)]">
              <div className="divide-y divide-light/60">
                {options.map((option, index) => (
                  <ActionRow key={index} option={option} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
