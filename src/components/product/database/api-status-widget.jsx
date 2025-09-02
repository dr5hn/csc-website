import { CheckCircle2 } from "lucide-react";

export default function APIStatusWidget() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-green/60 bg-white/70 p-3 md:p-4">
      {/* Status Dot */}
      <span aria-hidden className="relative inline-flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green/60 opacity-60"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green"></span>
      </span>

      <div className="space-y-0.5">
        <div className="flex items-center gap-2 text-sm font-semibold text-green">
          <CheckCircle2 className="h-4 w-4" aria-hidden />
          <span className="sr-only">API status:</span>
          <span>All Systems Operational</span>
        </div>
        <div className="text-xs md:text-sm text-darkgray">Uptime: 99.98%</div>
      </div>
    </div>
  );
}
