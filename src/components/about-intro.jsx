export default function AboutIntro() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03] py-10 lg:py-20">
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* About Us Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue/10 border border-blue/20 text-blue text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue rounded-full mr-2 animate-pulse"></span>
          About Us
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl lg:text-7xl font-black text-dark mb-8 leading-[0.9] transition-all duration-1000 delay-300">
          Accurate location data,{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-blue via-blue to-green bg-clip-text text-transparent">
              made simple
            </span>
            {/* Underline decoration */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue/60 to-green/60 rounded-full transform scale-x-0 transition-transform duration-1000 delay-700 origin-left group-hover:scale-x-100"></div>
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-xl text-darkgray mb-4 md:mb-6 w-full md:w-3/4 mx-auto">
          We built the CountryStateCity API and tools to take the pain out of
          working with global location data.
        </p>
        <p className="md:text-lg text-lightgray w-full md:w-3/4 mx-auto">
          Whether you're a developer, analyst, or enterprise, we help you focus
          on building, not cleaning data.
        </p>

        {/* Decorative Elements */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue to-transparent rounded-full"></div>
            <div className="text-sm font-medium text-lightgray uppercase">
              Est. 2018
            </div>
          </div>
          <div className="w-1 h-1 bg-lightgray rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium text-lightgray uppercase">
              35K+ Developers
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
