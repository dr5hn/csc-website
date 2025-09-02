"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Target,
  FileText,
  Check,
  Zap,
  CreditCard,
  Calculator,
} from "lucide-react";
import { cn } from "@/lib/utils";

function CreditCalculator() {
  const [selectedData, setSelectedData] = useState({
    countries: false,
    states: false,
    cities: false,
  });
  const [selectedFormat, setSelectedFormat] = useState("json");

  const formatCosts = { json: 0, csv: 1, xml: 2, yaml: 2, sql: 3 };
  const dataCosts = { countries: 1, states: 2, cities: 3 };

  const calculateCredits = () => {
    let total = Object.keys(selectedData).reduce((acc, key) => {
      return acc + (selectedData[key] ? dataCosts[key] : 0);
    }, 0);
    total += formatCosts[selectedFormat];
    return total;
  };

  const totalCredits = calculateCredits();

  return (
    <div className="relative">
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent">
        <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_64px_rgba(2,6,23,0.1)] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
                <Calculator className="h-5 w-5 text-blue" />
              </div>
              <div>
                <div className="text-sm font-bold text-dark leading-tight">
                  Credit Calculator
                </div>
                <div className="text-xs text-lightgray">Estimate your cost</div>
              </div>
            </div>
          </div>
          <div className="h-px bg-light/60"></div>

          {/* Form */}
          <div className="p-6 space-y-5">
            <div>
              <label className="text-sm font-semibold text-dark mb-2 block">
                Select Data Types:
              </label>
              <div className="space-y-2">
                {Object.keys(dataCosts).map((dataType) => (
                  <label
                    key={dataType}
                    className="flex items-center gap-2 p-3 rounded-lg bg-white/70 border border-light/60 cursor-pointer has-[:checked]:bg-blue/10 has-[:checked]:border-blue/30 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedData[dataType]}
                      onChange={(e) =>
                        setSelectedData({
                          ...selectedData,
                          [dataType]: e.target.checked,
                        })
                      }
                      className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                    />
                    <span className="flex-1 capitalize font-medium text-dark">
                      {dataType}
                    </span>
                    <span className="text-xs font-semibold text-darkgray bg-light/80 rounded-full px-2 py-0.5">
                      {dataCosts[dataType]} credit
                      {dataCosts[dataType] > 1 ? "s" : ""}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="format-select"
                className="text-sm font-semibold text-dark mb-2 block"
              >
                Export Format:
              </label>
              <select
                id="format-select"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-full p-3 rounded-lg border border-light/80 bg-white/70 text-dark focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
              >
                {Object.keys(formatCosts).map((format) => (
                  <option key={format} value={format}>
                    {format.toUpperCase()}{" "}
                    {formatCosts[format] > 0
                      ? `(+${formatCosts[format]} credit${
                          formatCosts[format] > 1 ? "s" : ""
                        })`
                      : "(FREE)"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-light/60 p-6">
            <div className="rounded-xl border-2 border-blue/40 bg-blue/10 p-4 text-center">
              <div className="text-sm font-semibold text-blue mb-1">
                Total Cost:
              </div>
              <div className="text-4xl font-black font-mono text-blue">
                {totalCredits} Credit{totalCredits !== 1 ? "s" : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroExportTool() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03]">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-blue/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-green/10 blur-3xl"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(34,150,243,0.05),transparent)]"></div>

        <div className="relative container mx-auto px-4 py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue/10 to-green/10 border border-blue/20 text-blue text-sm font-bold uppercase tracking-[0.1em] mb-6 shadow-md backdrop-blur-sm">
                <span
                  className="w-2 h-2 bg-blue rounded-full mr-3 animate-pulse"
                  aria-hidden
                ></span>
                Smart Data Export Solution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-dark">
                Get Exactly The
                <br />
                <span className="bg-gradient-to-r from-orange to-yellow-400 bg-clip-text text-transparent">
                  Data You Need
                </span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-darkgray/90 leading-relaxed max-w-2xl">
                Stop downloading massive 44MB+ databases and writing custom
                parsing scripts. Export clean, customized geographical datasets
                in seconds with our credit-based system.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button className="bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-6 h-12">
                  <Target className="h-5 w-5 mr-2" aria-hidden />
                  Start Free Trial
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-dark text-dark hover:bg-dark hover:text-white font-semibold transition-all duration-300 px-6 h-12 bg-transparent"
                >
                  <Link href="/docs/export-tool">
                    <FileText className="h-5 w-5 mr-2" aria-hidden />
                    See Examples
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Check className="h-4 w-4 text-green" aria-hidden />3 Free
                  Credits
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Zap className="h-4 w-4 text-blue" aria-hidden />
                  Instant Downloads
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-light/60 px-3 py-1 text-sm font-semibold text-dark">
                  <Target className="h-4 w-4 text-green" aria-hidden />
                  Custom Selection
                </span>
              </div>
            </div>

            {/* Right: Credit Calculator */}
            <CreditCalculator />
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
