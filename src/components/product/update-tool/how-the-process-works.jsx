"use client";

import { useState, useEffect } from "react";
import { PencilLine, Users, CheckCircle2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Submit Change",
    description:
      "Found incorrect data? Submit a change request with detailed information.",
    icon: PencilLine,
    color: "blue",
  },
  {
    number: "02",
    title: "Community Review",
    description:
      "Fellow contributors and admins review your submission for accuracy.",
    icon: Users,
    color: "green",
  },
  {
    number: "03",
    title: "Approval & Integration",
    description:
      "Approved changes are marked for incorporation into the main database.",
    icon: CheckCircle2,
    color: "blue",
  },
  {
    number: "04",
    title: "Global Impact",
    description:
      "Your changes go live, improving data for millions of applications worldwide.",
    icon: Globe,
    color: "green",
  },
];

const StepCard = ({ step, isActive }) => {
  const { icon: Icon, color } = step;

  const colorClasses = {
    blue: {
      border: "border-blue",
      shadow: "shadow-blue/20",
      bg: "bg-blue",
      text: "text-blue",
      bgLight: "bg-blue/10",
    },
    green: {
      border: "border-green",
      shadow: "shadow-green/20",
      bg: "bg-green",
      text: "text-green",
      bgLight: "bg-green/10",
    },
  };

  const activeColor = colorClasses[color];

  return (
    <div
      className={cn(
        "relative rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent h-full transition-all duration-500",
        isActive ? "scale-105" : "scale-100"
      )}
    >
      <div
        className={cn(
          "rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 transition-all duration-500 h-full p-6 text-center",
          isActive
            ? `shadow-2xl ${activeColor.shadow} ${activeColor.border}`
            : "shadow-lg"
        )}
      >
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold text-white transition-all duration-300",
            isActive ? `scale-110 ${activeColor.bg}` : "bg-dark"
          )}
        >
          {step.number}
        </div>
        <div
          className={cn(
            "inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-4",
            activeColor.bgLight
          )}
        >
          <Icon className={cn("h-7 w-7", activeColor.text)} />
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
        <p className="text-darkgray leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handler = () => setIsDesktop(mediaQuery.matches);
    handler(); // Set initial state
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Don't start the animation on mobile

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isDesktop]);

  return (
    <section className="bg-light/40 py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Contribution Flow
            </span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            How The Process Works
          </h2>
          <p className="text-lg md:text-xl text-darkgray">
            From submission to global impact - track your contributions every
            step of the way.
          </p>
        </div>

        {/* Desktop View */}
        <div className="relative hidden lg:block">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-light -translate-y-1/2"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue to-green transition-all duration-500 -translate-y-1/2"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>
          <div className="relative grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                isActive={activeStep === index}
              />
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="relative block lg:hidden max-w-md mx-auto">
          <div className="absolute top-0 left-6 w-0.5 h-full bg-light rounded-full"></div>
          <div className="space-y-10">
            {steps.map((step, index) => {
              const { icon: Icon, color } = step;
              const colorClasses = {
                blue: { text: "text-blue", bgLight: "bg-blue/10" },
                green: { text: "text-green", bgLight: "bg-green/10" },
              };
              const currentColors = colorClasses[color];

              return (
                <div key={index} className="flex items-start gap-5">
                  <div className="relative z-10 mt-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className={cn(
                        "inline-flex h-12 w-12 items-center justify-center rounded-lg mb-3",
                        currentColors.bgLight
                      )}
                    >
                      <Icon className={cn("h-6 w-6", currentColors.text)} />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-1">
                      {step.title}
                    </h3>
                    <p className="text-darkgray leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
