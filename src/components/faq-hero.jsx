"use client";

import { Search } from "lucide-react";

function FAQSearch({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-darkgray/60" />
        <input
          type="text"
          placeholder="Search frequently asked questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // onKeyDown={(e) => e.key === "Enter" && onSearch()}
          className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border-2 border-light/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue/50 text-dark placeholder-darkgray/60 text-lg transition-all duration-300 hover:shadow-md"
        />
      </div>
    </div>
  );
}

export default function FAQHero({
  searchTerm,
  setSearchTerm,
  onSearch,
  faqCount = 25,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03] py-10 lg:py-32">
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue/10 to-green/10 border border-blue/20 text-blue text-sm font-bold uppercase tracking-[0.1em] mb-8 shadow-md backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
            Knowledge Base & Support
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark mb-6 tracking-tight">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-blue via-blue to-green bg-clip-text text-transparent p-2">
              Questions
            </span>
          </h1>

          {/* Meta Description */}
          <p className="text-xl md:text-2xl text-darkgray/90 leading-relaxed font-medium mb-12 max-w-4xl mx-auto">
            Find answers to common questions about the CSC Platform ecosystem.
            Can't find what you're looking for?
            <span className="text-blue font-semibold">We're here to help!</span>
          </p>

          {/* Search Component */}
          <FAQSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={onSearch}
          />
        </div>
      </div>
    </section>
  );
}
