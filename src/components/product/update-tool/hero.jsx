"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, FileText, Globe, Check, Trophy } from "lucide-react";

function ContributionStats() {
  const [activeContributors, setActiveContributors] = useState(1247);
  const [pendingChanges, setPendingChanges] = useState(89);
  const [verifiedChanges, setVerifiedChanges] = useState(15420);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setActiveContributors((prev) => prev + Math.floor(Math.random() * 3));
      }
      if (Math.random() > 0.8) {
        setPendingChanges((prev) =>
          Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1))
        );
      }
      setVerifiedChanges((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent">
        <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_64px_rgba(2,6,23,0.1)] overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green/10">
                <Globe className="h-5 w-5 text-green" />
              </div>
              <div>
                <div className="text-sm font-bold text-dark leading-tight">
                  Live Community Impact
                </div>
                <div className="text-xs text-lightgray">
                  Updated in real-time
                </div>
              </div>
            </div>
          </div>
          <div className="h-px bg-light/60"></div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black font-mono bg-gradient-to-r from-green to-emerald-400 bg-clip-text text-transparent mb-1">
                {activeContributors.toLocaleString()}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-lightgray">
                Active Contributors
              </div>
            </div>
            <div>
              <div className="text-3xl font-black font-mono bg-gradient-to-r from-orange to-amber-400 bg-clip-text text-transparent mb-1">
                {pendingChanges}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-lightgray">
                Pending Review
              </div>
            </div>
            <div>
              <div className="text-3xl font-black font-mono bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent mb-1">
                {verifiedChanges.toLocaleString()}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-lightgray">
                Changes Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroUpdateTool() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-green/[0.02] to-blue/[0.03]">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-green/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue/10 blur-3xl"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(16,185,129,0.05),transparent)]"></div>

        <div className="relative container mx-auto px-4 py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-green/10 to-blue/10 border border-green/20 text-green text-sm font-bold uppercase tracking-[0.1em] mb-6 shadow-md backdrop-blur-sm">
                <span
                  className="w-2 h-2 bg-green rounded-full mr-3"
                  aria-hidden
                ></span>
                Community Contribution Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-dark">
                Help Improve
                <br />
                <span className="bg-gradient-to-r from-orange to-yellow-400 bg-clip-text text-transparent">
                  Global Data
                </span>{" "}
                For Millions
              </h1>
              <p className="mt-5 text-lg md:text-xl text-darkgray/90 leading-relaxed max-w-2xl">
                Join a global community of contributors helping maintain the
                world's most accurate geographical database. Your corrections
                directly impact millions of applications and billions of users
                worldwide.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-6 h-12">
                  <Rocket className="h-5 w-5 mr-2" aria-hidden />
                  Submit First Change
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold transition-all duration-300 px-6 h-12 bg-transparent"
                >
                  <Link href="/docs/contribution-guide">
                    <FileText className="h-5 w-5 mr-2" aria-hidden />
                    View Process
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Check className="h-4 w-4 text-green" aria-hidden />
                  Free Forever
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Trophy className="h-4 w-4 text-blue" aria-hidden />
                  Contributor Recognition
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Globe className="h-4 w-4 text-green" aria-hidden />
                  Global Impact
                </span>
              </div>
            </div>

            {/* Right: Contribution Stats */}
            <ContributionStats />
          </div>
        </div>
      </section>
      <div>
        <div className="h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-green/20 to-transparent transform translate-y-[-1px]"></div>
      </div>
    </>
  );
}
