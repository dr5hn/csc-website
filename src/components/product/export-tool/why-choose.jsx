"use client";

import { XCircle, CheckCircle, Frown, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const beforeItems = [
  "Download 44MB+ database files",
  "Write custom parsing scripts",
  "Filter unnecessary data manually",
  "Convert between formats yourself",
  "Spend hours on data processing",
  "Deal with inconsistent structures",
  "Update data sources regularly",
];

const afterItems = [
  "Select only the data you need",
  "Get clean, ready-to-use datasets",
  "Choose from 5 export formats",
  "Custom field selection available",
  "Download in seconds, not hours",
  "Consistent, well-structured data",
  "Always up-to-date information",
];

function ComparisonCard({ title, items, theme }) {
  const isPositive = theme === "positive";
  const Icon = isPositive ? Rocket : Frown;
  const ListItemIcon = isPositive ? CheckCircle : XCircle;

  const cardClasses = cn(
    "rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border h-full p-6 sm:p-8",
    isPositive ? "border-green/30" : "border-danger/30"
  );

  const titleColor = isPositive ? "text-green" : "text-danger";
  const iconColor = isPositive ? "text-green" : "text-danger";
  const iconBg = isPositive ? "bg-green/10" : "bg-danger/10";
  const itemTextColor = isPositive ? "text-emerald-900" : "text-red-900/90";

  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent h-full">
      <div className={cardClasses}>
        <div className="text-center mb-6">
          <div
            className={cn(
              "inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-4",
              iconBg
            )}
          >
            <Icon className={cn("h-8 w-8", iconColor)} />
          </div>
          <h3 className={cn("text-2xl font-bold", titleColor)}>{title}</h3>
        </div>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <ListItemIcon
                className={cn("h-5 w-5 mt-0.5 flex-shrink-0", iconColor)}
              />
              <span className={cn("font-medium text-darkgray", itemTextColor)}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-orange"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              The Difference
            </span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Stop Wasting Time on Data Processing
          </h2>
          <p className="text-lg md:text-xl text-darkgray">
            Traditional geographical databases are massive, unstructured, and
            require hours of processing. Our Export Tool changes that.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ComparisonCard
            title="Before CSC Export Tool"
            items={beforeItems}
            theme="negative"
          />
          <ComparisonCard
            title="With CSC Export Tool"
            items={afterItems}
            theme="positive"
          />
        </div>
      </div>
    </section>
  );
}
