import { Button } from "@/components/ui/button";
import {
  FileJson,
  Database,
  DatabaseZap,
  Leaf,
  HardDrive,
  FileSpreadsheet,
  FileCode,
  Settings,
  Globe,
  Map,
  Building2,
  MapPin,
} from "lucide-react";

const formats = [
  {
    name: "JSON",
    description: "Lightweight, web-friendly format",
    icon: FileJson,
    size: "12MB",
    popular: true,
  },
  {
    name: "MySQL",
    description: "Ready-to-import SQL database",
    icon: Database,
    size: "8MB",
    popular: true,
  },
  {
    name: "PostgreSQL",
    description: "Advanced database format",
    icon: DatabaseZap,
    size: "8MB",
  },
  {
    name: "MongoDB",
    description: "NoSQL document database",
    icon: Leaf,
    size: "15MB",
    popular: true,
  },
  {
    name: "SQLite",
    description: "Serverless database file",
    icon: HardDrive,
    size: "7MB",
  },
  {
    name: "CSV",
    description: "Spreadsheet compatible format",
    icon: FileSpreadsheet,
    size: "6MB",
    popular: true,
  },
  {
    name: "XML",
    description: "Structured markup format",
    icon: FileCode,
    size: "25MB",
  },
  {
    name: "YAML",
    description: "Human-readable config format",
    icon: Settings,
    size: "18MB",
  },
];

function AccentIcon({ icon: Icon, accent = "blue" }) {
  const cls =
    accent === "green" ? "text-green bg-green/10" : "text-blue bg-blue/10";
  return (
    <div
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${cls}`}
    >
      <Icon className="h-6 w-6" aria-hidden />
    </div>
  );
}

function FormatCard({ item, index }) {
  const isBlue = index % 2 === 0;
  const accent = isBlue ? "blue" : "green";

  return (
    <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_16px_40px_rgba(2,6,23,0.08)] transition-all duration-300 relative p-6 sm:p-7 h-full flex flex-col justify-between">
      {item.popular ? (
        <span
          className={`absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[11px] font-semibold text-white ${
            isBlue ? "bg-blue" : "bg-green"
          }`}
        >
          Popular
        </span>
      ) : null}

      <div className="relative flex items-start gap-4">
        <AccentIcon icon={item.icon} accent={accent} />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-dark">{item.name}</h3>
          <p className="mt-1 text-[12px] text-darkgray">
            {item.size} compressed
          </p>
          <p className="mt-2 text-darkgray leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>

      <div className="relative mt-6">
        <Button
          className="w-full bg-dark text-white hover:bg-dark/90"
          aria-label={`Download ${item.name}`}
        >
          Download {item.name} ↓
        </Button>
      </div>
    </div>
  );
}

export default function ChooseYourFormat() {
  return (
    <section className="relative bg-gradient-to-br from-white via-light/30 to-blue/5">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        {/* Header matches Products: pill + gradient headline */}
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-light shadow-sm"
            aria-label="Formats"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-green"
              aria-hidden="true"
            ></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-darkgray">
              Download Formats
            </span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue to-green bg-clip-text text-transparent">
            Choose Your Format
          </h2>
          <p className="mt-2 text-darkgray">
            Download the complete database in your preferred format. All formats
            contain the same comprehensive data.
          </p>
        </div>

        {/* Grid of format cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-12">
          {formats.map((f, i) => (
            <FormatCard key={f.name} item={f} index={i} />
          ))}
        </div>

        {/* What's Included panel, styled like your site cards */}
        <div className="mt-8 md:mt-12 bg-white/80 backdrop-blur-sm border border-light/60 rounded-2xl p-8">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-dark">
            {"What's Included in Every Format"}
          </h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Globe className="mx-auto h-8 w-8" />
              <div className="mt-2 text-base font-semibold text-dark">
                250+ Countries
              </div>
              <div className="text-sm text-darkgray">
                Complete with ISO codes, capitals, currencies
              </div>
            </div>
            <div className="text-center">
              <Map className="mx-auto h-8 w-8" />
              <div className="mt-2 text-base font-semibold text-dark">
                5,000+ States
              </div>
              <div className="text-sm text-darkgray">
                Provinces, regions, administrative divisions
              </div>
            </div>
            <div className="text-center">
              <Building2 className="mx-auto h-8 w-8" />
              <div className="mt-2 text-base font-semibold text-dark">
                150,000+ Cities
              </div>
              <div className="text-sm text-darkgray">
                Towns, districts, with coordinates
              </div>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8" />
              <div className="mt-2 text-base font-semibold text-dark">
                Rich Metadata
              </div>
              <div className="text-sm text-darkgray">
                Coordinates, timezones, translations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
