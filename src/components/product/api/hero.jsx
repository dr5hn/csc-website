import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  BookOpen,
  Check,
  Zap,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import APIStatusWidget from "../database/api-status-widget";

export function HeroApi() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03]">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-green/10 blur-3xl"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(34,150,243,0.05),transparent)]"></div>

        <div className="relative container mx-auto px-4 py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Pill */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue/10 to-green/10 border border-blue/20 text-blue text-sm font-bold uppercase tracking-[0.1em] mb-6 shadow-md backdrop-blur-sm">
                <span
                  className="w-2 h-2 bg-blue rounded-full mr-3 animate-pulse"
                  aria-hidden
                ></span>
                Production-Ready API Service
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-dark">
                Enterprise-Grade
                <br />
                <span className="bg-gradient-to-r from-blue via-blue to-green bg-clip-text text-transparent">
                  Geographical API
                </span>
              </h1>

              {/* Subtext */}
              <p className="mt-5 text-lg md:text-xl text-darkgray/90 leading-relaxed max-w-2xl">
                Power your applications with the world&apos;s most comprehensive
                geographical data API. Trusted by thousands of developers,
                handling 1B+ requests monthly with 99.9% uptime.
              </p>

              {/* Status */}
              <div className="mt-6">
                <APIStatusWidget />
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button className="bg-gradient-to-r from-blue to-blue/90 hover:from-blue/90 hover:to-blue text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-6 h-12">
                  <Rocket className="h-5 w-5 mr-2" aria-hidden />
                  Get Free API Key
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold transition-all duration-300 px-6 h-12 bg-transparent"
                >
                  <Link href="/docs">
                    <BookOpen className="h-5 w-5 mr-2" aria-hidden />
                    View Documentation
                  </Link>
                </Button>
              </div>

              {/* Feature points */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Check className="h-4 w-4 text-green" aria-hidden />
                  1,000 Free Requests
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Zap className="h-4 w-4 text-blue" aria-hidden />
                  5-Minute Setup
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <ShieldCheck className="h-4 w-4 text-green" aria-hidden />
                  Enterprise Security
                </span>
              </div>
            </div>

            {/* Right: Live API Response */}
            <div className="relative">
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent">
                <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_64px_rgba(2,6,23,0.1)] overflow-hidden">
                  {/* Header */}
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                        <TerminalSquare
                          className="h-5 w-5 text-blue"
                          aria-hidden
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-dark leading-tight">
                          Live API Response
                        </div>
                        <div className="text-xs text-lightgray">
                          Updated moments ago
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm text-darkgray">
                      <span
                        className="inline-flex h-2 w-2 rounded-full bg-green"
                        aria-hidden
                      ></span>
                      <span className="font-medium">200 OK</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-light/60"></div>

                  {/* Code block */}
                  <div className="px-6 py-5">
                    <div className="rounded-md bg-dark p-4 md:p-5 text-xs md:text-sm text-white overflow-auto">
                      <div className="text-green">HTTP/1.1 200 OK</div>
                      <div className="text-darkgray">Response-Time: 89ms</div>
                      <div className="text-darkgray">
                        Content-Type: application/json
                      </div>
                      <br />
                      <pre className="whitespace-pre-wrap">
                        {`{
  "id": 101,
  "name": "India",
  "iso2": "IN",
  "capital": "New Delhi",
  "currency": "INR",
  "phone_code": "91",
  "emoji": "🇮🇳"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating accents */}
              <div className="pointer-events-none absolute -top-3 -right-3 h-8 w-8 rounded-full bg-blue/20 animate-pulse"></div>
              <div className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-green/20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent transform translate-y-[-1px]"></div>
      </div>
    </>
  );
}

export default HeroApi;
