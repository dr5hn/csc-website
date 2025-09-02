import {
  Zap,
  ShieldCheck,
  BarChart2,
  RefreshCw,
  Code,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Response",
    description:
      "Average response time under 200ms globally with our CDN network spanning 15+ locations worldwide.",
    color: "from-orange to-orange/90",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Advanced security with API key authentication, domain restrictions, rate limiting, and comprehensive audit logs.",
    color: "from-blue to-green",
  },
  {
    icon: BarChart2,
    title: "Real-Time Analytics",
    description:
      "Detailed usage analytics, performance metrics, and insights to optimize your application performance.",
    color: "from-green to-green/90",
  },
  {
    icon: RefreshCw,
    title: "Always Up-to-Date",
    description:
      "Regular data updates with automated sync processes ensuring you always have the latest geographical information.",
    color: "from-blue to-blue/90",
  },
  {
    icon: Code,
    title: "Developer-Friendly",
    description:
      "RESTful design, comprehensive documentation, code examples, and SDKs for popular programming languages.",
    color: "from-blue to-green",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Complete coverage of 250+ countries, 5,000+ states, and 150,000+ cities with detailed metadata.",
    color: "from-orange to-orange/90",
  },
];

export default function WhyChooseOurApi() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue/[0.02] to-green/[0.03] py-10 lg:py-20">
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-dark">
            Why Choose Our API?
          </h2>
          <p className="mt-3 text-lg md:text-xl text-darkgray">
            Built for scale, designed for developers, trusted by enterprises
            worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="rounded-2xl p-[1px] bg-gradient-to-br from-light to-transparent group-hover:from-blue/20 group-hover:to-green/10 transition-colors duration-300 h-full">
                <div className="rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_rgba(2,6,23,0.06)] hover:shadow-[0_1px_0_rgba(15,23,42,0.06),0_16px_40px_rgba(2,6,23,0.08)] transition-all duration-300 h-full">
                  <div className="relative p-6 sm:p-7 flex flex-col items-center text-center h-full">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-darkgray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
