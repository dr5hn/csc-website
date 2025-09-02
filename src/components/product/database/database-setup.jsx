"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  LinkIcon,
  Download,
  Package,
  Rocket,
  CopyIcon,
  CheckIcon,
} from "lucide-react";

const GUIDES = {
  clone: {
    title: "Git Clone",
    icon: LinkIcon,
    code: `# Clone the repository
git clone https://github.com/dr5hn/countries-states-cities-database.git
cd countries-states-cities-database

# Navigate to your preferred format
cd json  # or mysql, postgresql, mongodb, etc.

# Use the data files in your project
cp countries.json /path/to/your/project/`,
  },
  download: {
    title: "Direct Download",
    icon: Download,
    code: `# Download specific format (replace 'json' with your format)
wget https://github.com/dr5hn/countries-states-cities-database/raw/master/json/countries.json
wget https://github.com/dr5hn/countries-states-cities-database/raw/master/json/states.json
wget https://github.com/dr5hn/countries-states-cities-database/raw/master/json/cities.json

# Or download the complete ZIP
curl -L https://github.com/dr5hn/countries-states-cities-database/archive/master.zip -o csc-database.zip`,
  },
  npm: {
    title: "NPM Package",
    icon: Package,
    code: `# Install via npm (community package)
npm install country-state-city

# Usage in JavaScript/Node.js
const csc = require('country-state-city');

// Get all countries
const countries = csc.getAllCountries();
console.log(countries);

// Get states of a country
const states = csc.getStatesOfCountry('IN');
console.log(states);`,
  },
};

function sanitizeCommands(raw) {
  if (!raw) return "";

  // remove block comments
  const text = raw.replace(/\/\*[\s\S]*?\*\//g, "");

  // split and normalize CRLF
  const lines = text.split("\n").map((l) => l.replace(/\r/g, ""));

  // helper to remove shell prompts and inline comments
  const cleanLine = (l) => {
    let s = l;

    // remove leading prompts: $, >, PS >, (venv) $
    s = s.replace(/^\s*(?:PS\s*>\s*|$$venv$$\s*\$\s*|\$\s*|>\s*)/, "");

    // remove full-line comments
    if (/^\s*#/.test(s) || /^\s*\/\//.test(s)) return "";

    // remove inline bash comments " # ...", but keep URLs with anchors
    if (!/^https?:\/\//.test(s) && s.includes(" # ")) {
      s = s.split(" # ")[0];
    }

    return s.trim();
  };

  // allowlist of command starters we consider "runnable"
  const isCommand = (s) =>
    /^(git|cd|cp|mv|rm|mkdir|wget|curl|npm|yarn|pnpm|npx|node|psql|mysql|mongo|docker|kubectl|helm|tar|unzip)\b/.test(
      s
    );

  // build commands, merging lines that end with "\" as a single command
  const output = [];
  let cont = "";

  for (const rawLine of lines) {
    const s = cleanLine(rawLine);
    if (!s) continue;

    const endsWithBackslash = /\\\s*$/.test(s);
    const withoutBackslash = s.replace(/\\\s*$/, "").trim();

    if (cont) {
      cont += " " + withoutBackslash;
      if (!endsWithBackslash) {
        // end of continuation
        if (isCommand(cont)) output.push(cont);
        cont = "";
      }
      continue;
    }

    if (endsWithBackslash) {
      cont = withoutBackslash;
      continue;
    }

    if (isCommand(s)) output.push(s);
  }

  // if something remained in continuation, push it
  if (cont && isCommand(cont)) output.push(cont);

  // collapse blank lines and trim
  return output.join("\n").trim();
}

export default function DatabaseSetup() {
  const [active, setActive] = useState("clone");
  const code = useMemo(() => GUIDES[active].code, [active]);
  const copyText = useMemo(() => sanitizeCommands(code), [code]);

  return (
    <section className="relative bg-gradient-to-br from-white via-light/30 to-blue/5">
      <div className="container mx-auto px-4 py-10 lg:py-20">
        {/* Header */}
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm"
            aria-label="Setup"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-green"
              aria-hidden="true"
            />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Setup
            </span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">Easy Installation & Setup</span>
          </h2>
          <p className="mt-2 max-w-prose mx-auto text-darkgray">
            Multiple ways to integrate the database into your project. Choose
            the method that works best for you.
          </p>
        </div>

        {/* Tabs + Code */}
        <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] overflow-hidden">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Installation methods"
            className="flex flex-wrap items-center gap-2 border-b border-light/60 bg-white/80 p-2"
          >
            {Object.keys(GUIDES).map((key, i) => {
              const k = key;
              const isActive = active === k;
              const isBlue = i % 2 === 0;
              const Icon = GUIDES[k].icon;
              return (
                <button
                  key={k}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${k}`}
                  id={`tab-${k}`}
                  onClick={() => setActive(k)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors focus:outline-none",
                    isActive
                      ? isBlue
                        ? "bg-blue/10 text-blue ring-1 ring-blue"
                        : "bg-green/10 text-green ring-1 ring-green"
                      : "text-darkgray hover:bg-white"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4",
                      isActive
                        ? isBlue
                          ? "text-blue"
                          : "text-green"
                        : "text-darkgray"
                    )}
                    aria-hidden="true"
                  />
                  {GUIDES[k].title}
                </button>
              );
            })}
          </div>

          {/* Code panel */}
          <div
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="relative"
          >
            <CopyButton text={copyText} />
            <pre className="m-0 overflow-x-auto p-4 md:p-6 text-sm leading-6 text-white bg-dark">
              <code>{code}</code>
            </pre>
          </div>
        </div>

        {/* Helper note */}
        <p className="mt-4 text-center text-sm text-darkgray">
          Tip: Replace <span className="font-mono">json</span> in paths with
          your preferred format (mysql, postgresql, mongodb, csv, sql, etc.).
        </p>
      </div>
    </section>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // no-op
    }
  }

  return (
    <div className="absolute right-3 top-3 z-10">
      <button
        onClick={handleCopy}
        className={cn(
          "inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs font-semibold shadow-sm transition-colors",
          "border-light/60 bg-white/90 text-dark hover:bg-white",
          copied
            ? "ring-2 ring-green"
            : "focus:outline-none focus:ring-2 focus:ring-blue"
        )}
        aria-live="polite"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green" aria-hidden="true" />
        ) : (
          <CopyIcon className="h-4 w-4 text-blue" aria-hidden="true" />
        )}
        <span className={copied ? "text-green" : "text-blue"}>
          {copied ? "Copied" : "Copy"}
        </span>
      </button>
    </div>
  );
}
