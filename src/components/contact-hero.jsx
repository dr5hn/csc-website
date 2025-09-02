"use client";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03] py-10 lg:py-32">
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue/10 to-green/10 border border-blue/20 text-blue text-sm font-bold uppercase tracking-[0.1em] mb-8 shadow-md backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue rounded-full mr-3"></span>
            Contact & Support
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-dark mb-6 tracking-tight">
            Get in touch
            <br />
            <span className="bg-gradient-to-r from-blue via-blue to-green bg-clip-text text-transparent p-2">
              We're here to help
            </span>
          </h1>

          {/* Meta Description */}
          <p className="text-xl md:text-2xl text-darkgray/90 leading-relaxed font-medium max-w-4xl mx-auto">
            Reach our team for support, sales, or partnership inquiries. You can
            also search topics to find quick answers before contacting us.
          </p>
        </div>
      </div>
    </section>
  );
}
