import { Check, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GitHubIcon from "@/icons/GitHub";

const plans = [
  {
    name: "Free",
    subtitle: "Open Source",
    price: "$0",
    period: "forever",
    description: "Perfect for developers getting started",
    features: [
      "Full GitHub repository access",
      "Community supported",
      "Free to use under open license",
      "Complete dataset download",
      "Basic documentation",
    ],
    cta: "View on GitHub",
    ctaIcon: GitHubIcon,
    href: "https://github.com/dr5hn/countries-states-cities-database",
    accent: "blue",
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "API Access",
    price: "$29",
    period: "per month",
    description: "For production applications and businesses",
    features: [
      "Fast, reliable API endpoints",
      "JSON & SQL output formats",
      "Higher request limits (100k/month)",
      "Priority email support",
      "Advanced filtering options",
      "99.9% uptime SLA",
    ],
    cta: "Get API Access",
    ctaIcon: ArrowRight,
    href: "/signup",
    accent: "orange",
    popular: true,
  },
  {
    name: "Custom",
    subtitle: "Export Tool",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for enterprise needs",
    features: [
      "Any format on request (CSV, JSON, SQL, Excel)",
      "One-time or recurring exports",
      "Enterprise data requirements",
      "Dedicated account manager",
      "Custom integrations available",
      "Volume discounts",
    ],
    cta: "Contact Us",
    ctaIcon: Mail,
    href: "/contact",
    accent: "gray",
    popular: false,
  },
];

function PricingCard({ plan, index }) {
  const Icon = plan.ctaIcon;
  const isPopular = plan.popular;
  const isCustom = plan.accent === "gray";

  return (
    <div className={`relative ${isPopular ? "lg:scale-110" : ""}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange text-white text-sm font-bold uppercase shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Most Popular
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`relative h-full ${
          isCustom
            ? "bg-white border border-gray-200"
            : "bg-white border border-gray-200"
        } ${
          isPopular
            ? "border-2 border-orange/20 shadow-sm md:shadow-lg"
            : "shadow-sm"
        } rounded-2xl p-8`}
      >
        {/* Content */}
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
            <p className="text-sm font-semibold text-lightgray uppercase mb-4">
              {plan.subtitle}
            </p>

            {/* Price */}
            <div className="mb-4">
              <span className="text-4xl lg:text-5xl font-black text-dark font-mono">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-lightgray ml-2">/ {plan.period}</span>
              )}
            </div>

            <p className="text-darkgray">{plan.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <ul className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-darkgray">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            {plan.accent === "orange" ? (
              <Button
                asChild
                className="w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-4 text-lg"
              >
                <Link href={plan.href}>
                  {plan.cta}
                  <Icon className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            ) : plan.accent === "blue" ? (
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-blue text-blue hover:bg-blue hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-4 text-lg bg-transparent"
              >
                <Link href={plan.href}>
                  <Icon className="w-5 h-5 mr-2" />
                  {plan.cta}
                </Link>
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-darkgray text-darkgray hover:bg-darkgray hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-4 text-lg bg-transparent"
              >
                <Link href={plan.href}>
                  <Icon className="w-5 h-5 mr-2" />
                  {plan.cta}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <>
      <div>
        <div className="h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent transform translate-y-[-1px]"></div>
      </div>
      <section className="py-10 lg:py-20 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue via-blue to-green bg-clip-text text-transparent">
              Simple, transparent pricing
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-xl text-darkgray md:mb-8 max-w-4xl mx-auto">
            Start free with our open-source data, or unlock the full API for
            production use. Need a special format? We've got you covered.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10 md:mt-16">
          <p className="text-lightgray">
            All plans include our comprehensive documentation and community
            support.{" "}
            <Link
              href="/contact"
              className="text-blue hover:text-blue/80 font-semibold"
            >
              Questions? Contact us
            </Link>
          </p>
        </div>
      </section>
      <div>
        <div className="h-px bg-gradient-to-r from-transparent via-light to-transparent"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent transform translate-y-[-1px]"></div>
      </div>
    </>
  );
}
