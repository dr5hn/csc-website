"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  FileJson,
  FileText,
  FileCode2,
  Database,
  CopyIcon,
  CheckIcon,
} from "lucide-react";

const PREVIEWS = {
  json: {
    title: "JSON",
    icon: FileJson,
    code: `[
  {
    "id": 101,
    "name": "India",
    "iso2": "IN",
    "iso3": "IND",
    "capital": "New Delhi",
    "currency": "INR",
    "currency_symbol": "₹",
    "phone_code": "91",
    "region": "Asia",
    "subregion": "Southern Asia",
    "latitude": "20.00000000",
    "longitude": "77.00000000",
    "emoji": "🇮🇳"
  },
  {
    "id": 233,
    "name": "United States",
    "iso2": "US",
    "iso3": "USA",
    "capital": "Washington",
    "currency": "USD",
    "currency_symbol": "$",
    "phone_code": "1"
  }
]`,
  },
  csv: {
    title: "CSV",
    icon: FileText,
    code: `id,name,iso2,iso3,capital,currency,currency_symbol,phone_code,region,subregion,latitude,longitude,emoji
101,India,IN,IND,New Delhi,INR,₹,91,Asia,Southern Asia,20.00000000,77.00000000,🇮🇳
233,United States,US,USA,Washington,USD,$,1,North America,Northern America,38.00000000,-97.00000000,🇺🇸`,
  },
  xml: {
    title: "XML",
    icon: FileCode2,
    code: `<?xml version="1.0" encoding="UTF-8"?>
<countries>
  <country>
    <id>101</id>
    <name>India</name>
    <iso2>IN</iso2>
    <iso3>IND</iso3>
    <capital>New Delhi</capital>
    <currency>INR</currency>
    <currency_symbol>₹</currency_symbol>
    <phone_code>91</phone_code>
    <region>Asia</region>
    <subregion>Southern Asia</subregion>
    <latitude>20.00000000</latitude>
    <longitude>77.00000000</longitude>
    <emoji>🇮🇳</emoji>
  </country>
</countries>`,
  },
  sql: {
    title: "SQL",
    icon: Database,
    code: `CREATE TABLE countries (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  iso2 CHAR(2) NOT NULL,
  iso3 CHAR(3) NOT NULL,
  capital VARCHAR(100),
  currency VARCHAR(10),
  currency_symbol VARCHAR(10),
  phone_code VARCHAR(10)
);

INSERT INTO countries VALUES
(101, 'India', 'IN', 'IND', 'New Delhi', 'INR', '₹', '91'),
(233, 'United States', 'US', 'USA', 'Washington', 'USD', '$', '1');`,
  },
};

export default function ExportPreview() {
  const [active, setActive] = useState("json");
  const code = useMemo(() => PREVIEWS[active].code, [active]);

  return (
    <section className="relative bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
              Preview Export Formats
            </span>
          </h2>
          <p className="mt-2 max-w-prose mx-auto text-darkgray">
            See exactly what you'll get before you spend credits.
          </p>
        </div>

        {/* Tabs + Code */}
        <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] overflow-hidden">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Export formats"
            className="flex flex-wrap items-center gap-2 border-b border-light/60 bg-white/80 p-2"
          >
            {Object.keys(PREVIEWS).map((key, i) => {
              const k = key;
              const isActive = active === k;
              const isBlue = i % 2 === 0;
              const Icon = PREVIEWS[k].icon;
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
                  {PREVIEWS[k].title}
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
            <CopyButton text={code} />
            <pre className="m-0 overflow-x-auto p-4 md:p-6 text-sm leading-6 text-white bg-dark max-h-[300px]">
              <code>{code}</code>
            </pre>
          </div>
        </div>
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
