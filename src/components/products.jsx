"use client";

import Link from "next/link";
import {
  MessageSquare,
  Download,
  SquareTerminal,
  ArrowRight,
  Star,
} from "lucide-react";

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

function CTA({ href, accent = "blue", label = "Get started" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200";
  const coloring =
    accent === "green"
      ? "bg-dark text-white hover:bg-dark/90"
      : "bg-dark text-white hover:bg-dark/90";

  return (
    <Link href={href} className={`${base} ${coloring}`} aria-label={label}>
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

function ProductCard({
  title,
  description,
  href = "#",
  accent = "blue",
  Icon,
}) {
  return (
    <div className="border-2 border-blue/20 rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_16px_40px_rgba(2,6,23,0.08)] transition-all duration-300 h-full relative p-6 sm:p-7 flex flex-col justify-between h-full">
      {/* Make the card clickable without stealing focus from inner controls */}
      <Link
        href={href}
        aria-label={`Open ${title}`}
        className="absolute inset-0 rounded-[calc(1rem-1px)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue/40"
      />

      <div className="relative flex items-start gap-4">
        <AccentIcon Icon={Icon} accent={accent} />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-dark">{title}</h3>
          <p className="mt-2 text-darkgray leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-between">
        <Link
          href={href}
          className={`group/lnk inline-flex items-center gap-1.5 text-sm font-semibold ${
            accent === "green"
              ? "text-green hover:text-green/90"
              : "text-blue hover:text-blue/90"
          }`}
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/lnk:translate-x-0.5" />
        </Link>

        <div className="group">
          {/* separate group for arrow nudge */}
          <CTA href={href} accent={accent} label="Get started" />
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="relative bg-gradient-to-br from-white via-light/30 to-blue/5">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm"
            aria-label="Products"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-green"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Products
            </span>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
            Build with the tools you need
          </h2>
          <p className="mt-2 text-darkgray">
            A focused suite for location data: integrate, manage, and export.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-12">
          <ProductCard
            title="API Access"
            description="Query countries, states, and cities via fast REST and GraphQL endpoints with rock‑solid accuracy."
            href="/products/api"
            accent="blue"
            Icon={SquareTerminal}
          />

          <ProductCard
            title="Manager"
            description="Submit feedback, report issues, or suggest new data."
            href="/products/manager"
            accent="green"
            Icon={MessageSquare}
          />

          <ProductCard
            title="Database Repository"
            description="Open-source geographical database with global coverage, 9+ export formats (JSON, SQL, CSV, XML, YAML, MongoDB), MIT licensed for unlimited commercial use."
            href="/products/database-repo"
            accent="green"
            Icon={Star}
          />

          <ProductCard
            title="Export Tool"
            description="Download curated datasets in CSV, JSON, or SQL. Free and paid formats available."
            href="/products/export"
            accent="blue"
            Icon={Download}
          />
        </div>
      </div>
    </section>
  );
}
