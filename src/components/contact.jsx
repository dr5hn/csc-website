"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GitHubIcon from "@/icons/GitHub";
import XIcon from "@/icons/XIcon";
import { cn } from "@/lib/utils";

const channels = [
  {
    key: "github",
    title: "GitHub",
    description: "Open-source project and issue tracking",
    href: "https://github.com/dr5hn/countries-states-cities-database",
    icon: GitHubIcon,
    actionLabel: "Open repository",
    external: true,
  },
  {
    key: "support",
    title: "Support",
    description: "Technical questions and API support",
    href: "mailto:support@countrystatecity.in",
    icon: Mail,
    actionLabel: "Email support",
  },
  {
    key: "sales",
    title: "Sales & Partnerships",
    description: "Enterprise solutions and custom integrations",
    href: "mailto:sales@countrystatecity.in",
    icon: Mail,
    actionLabel: "Email sales",
  },
  {
    key: "social",
    title: "Social",
    description: "Follow us for updates and announcements",
    href: "https://x.com/dr5hn",
    icon: XIcon,
    actionLabel: "X",
    external: true,
  },
];

function IconBadge({ Icon, tone = "blue" }) {
  const bg =
    tone === "green"
      ? "bg-green/10"
      : tone === "dark"
      ? "bg-dark/5"
      : "bg-blue/10";
  const color =
    tone === "green"
      ? "text-green"
      : tone === "dark"
      ? "text-dark"
      : "text-blue";

  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl",
        bg
      )}
    >
      <Icon className={cn("h-6 w-6", color)} />
    </div>
  );
}

function ChannelRow({ channel }) {
  const Icon = channel.icon;
  const tone =
    channel.key === "support" || channel.key === "sales"
      ? "green"
      : channel.key === "github"
      ? "blue"
      : "dark";

  return (
    <Link
      href={channel.href}
      target={"external" in channel && channel.external ? "_blank" : undefined}
      rel={
        "external" in channel && channel.external
          ? "noopener noreferrer"
          : undefined
      }
      className="group relative block focus:outline-none"
      aria-label={channel.actionLabel}
    >
      <div className="relative flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white/70">
        <IconBadge Icon={Icon} tone={tone} />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-dark leading-tight">
            {channel.title}
          </h3>
          <p className="text-darkgray">{channel.description}</p>

          {/* Inline link for emails/social for quick copy/scan */}
          {channel.key === "support" && (
            <div className="mt-2 text-sm">
              <span className="text-lightgray">Email: </span>
              <span className="font-medium text-dark">
                support@countrystatecity.in
              </span>
            </div>
          )}
          {channel.key === "sales" && (
            <div className="mt-2 text-sm">
              <span className="text-lightgray">Email: </span>
              <span className="font-medium text-dark">
                sales@countrystatecity.in
              </span>
            </div>
          )}
          {channel.key === "github" && (
            <div className="mt-2 text-sm">
              <span className="text-lightgray">Repo: </span>
              <span className="font-medium text-dark break-all">
                github.com/dr5hn/countries-states-cities-database
              </span>
            </div>
          )}
          {channel.key === "social" && (
            <div className="mt-2 text-sm">
              <span className="text-lightgray">Follow: </span>
              <span className="font-medium text-dark">X</span>
            </div>
          )}
        </div>

        <div className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-light/60 text-darkgray transition-all duration-300 group-hover:border-blue group-hover:text-blue">
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>

        {/* Divider shimmer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
      </div>
    </Link>
  );
}

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Contact channels panel (spans 2 columns on desktop) */}
        <div className="lg:col-span-2 rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent">
          <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_16px_48px_rgba(2,6,23,0.08)]">
            <div className="px-5 sm:px-6 pt-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse"></span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
                  Contact channels
                </span>
              </div>
            </div>

            <div className="mt-2 divide-y divide-light/60">
              {channels.map((ch) => (
                <ChannelRow key={ch.key} channel={ch} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Callout */}
        <div className="lg:col-span-1">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue/30 to-green/30">
            <div className="relative rounded-[calc(1rem-1px)] bg-gradient-to-br from-blue to-blue/90 text-white p-6 sm:p-7 overflow-hidden">
              {/* subtle glows */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 bg-white/15 blur-2xl rounded-full"></div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-28 h-28 bg-green/20 blur-2xl rounded-full"></div>

              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-white/15">
                  <GitHubIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Found an issue or request?
                  </h3>
                  <p className="mt-1 text-blue-100">
                    Help us improve by reporting it on GitHub. We actively
                    review issues and ship fixes fast.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  className="w-full bg-white text-dark hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link
                    href="https://github.com/dr5hn/countries-states-cities-database/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Report an Issue on GitHub"
                  >
                    <GitHubIcon className="w-5 h-5 mr-2" />
                    Report an Issue
                  </Link>
                </Button>

                <p className="mt-4 text-sm text-blue-100">
                  Prefer email?{" "}
                  <Link
                    href="mailto:support@countrystatecity.in"
                    className="underline-offset-4 hover:underline"
                  >
                    support@countrystatecity.in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Optional small note */}
          <div className="mt-6 text-sm text-lightgray">
            We aim to respond within 24 hours on business days.
          </div>
        </div>
      </div>
    </section>
  );
}
