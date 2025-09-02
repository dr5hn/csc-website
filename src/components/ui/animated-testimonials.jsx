import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahdev",
    company: "TechFlow Inc",
    role: "Senior Developer",
    image: "/placeholder.svg",
    description:
      "The CountryStateCity API saved us weeks of development time. Clean, fast, and exactly what we needed for our global app.",
  },
  {
    name: "Marcus Rodriguez",
    handle: "@marcusbuilds",
    company: "StartupLab",
    role: "CTO",
    image: "/placeholder.svg",
    description:
      "Best location data API I've used. The documentation is excellent and the response times are incredibly fast.",
  },
  {
    name: "Emily Watson",
    handle: "@emilycodes",
    company: "DataViz Pro",
    role: "Full Stack Developer",
    image: "/placeholder.svg",
    description:
      "Switched from building our own location database to using this API. Game changer for our productivity and accuracy.",
  },
  {
    name: "David Kim",
    handle: "@davidkimdev",
    company: "GlobalTech Solutions",
    role: "Lead Engineer",
    image: "/placeholder.svg",
    description:
      "The open-source approach combined with the API service is perfect. We use both depending on our project needs.",
  },
  {
    name: "Lisa Thompson",
    handle: "@lisabuilds",
    company: "InnovateCorp",
    role: "Product Manager",
    image: "/placeholder.svg",
    description:
      "Our team loves how easy it is to integrate. The data quality is outstanding and support is responsive.",
  },
  {
    name: "Alex Johnson",
    handle: "@alexcodes",
    company: "DevStudio",
    role: "Frontend Developer",
    image: "/placeholder.svg",
    description:
      "Perfect for our e-commerce platform. The city/state/country data is always up-to-date and comprehensive.",
  },
  {
    name: "Maria Garcia",
    handle: "@mariadev",
    company: "CloudFirst",
    role: "Backend Engineer",
    image: "/placeholder.svg",
    description:
      "Reliable, fast, and well-documented. This API has become an essential part of our development stack.",
  },
  {
    name: "James Wilson",
    handle: "@jameswilson",
    company: "TechVentures",
    role: "Software Architect",
    image: "/placeholder.svg",
    description:
      "The combination of free open-source data and premium API access gives us flexibility for all our projects.",
  },
];

const Canopy = ({
  children,
  vertical = false,
  repeat = 4,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = true,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      "group/canopy relative flex h-full w-full overflow-hidden px-6 py-3 [--gap:24px] [gap:var(--gap)]",
      vertical ? "flex-col" : "flex-row",
      className
    )}
  >
    {Array.from({ length: repeat }).map((_, index) => (
      <div
        key={`item-${index}`}
        className={cn("flex shrink-0 [gap:var(--gap)]", {
          "group-hover/canopy:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
          "animate-canopy-horizontal flex-row": !vertical,
          "animate-canopy-vertical flex-col": vertical,
        })}
      >
        {children}
      </div>
    ))}
    {applyMask && (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-10 h-full w-full from-white/50 from-5% via-transparent via-50% to-white/50 to-95% dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50",
          vertical ? "bg-gradient-to-b" : "bg-gradient-to-r"
        )}
      />
    )}
  </div>
);

const TestimonialCard = ({ testimonial, className }) => (
  <div className="rounded-2xl p-[1px] group-hover:from-blue/20 group-hover:to-green/10 transition-colors duration-300 group relative">
    {/* Card surface */}
    <div
      className={cn(
        "flex w-80 shrink-0 cursor-pointer overflow-hidden rounded-[calc(1rem-1px)] bg-white/80 backdrop-blur-sm border border-light/60 transition-all duration-300 p-6 flex flex-col h-full",
        className
      )}
    >
      {/* Header with avatar and info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border-2 border-light/50 group-hover:border-blue/30 transition-colors duration-300">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-bold text-dark truncate">
              {testimonial.name}
            </span>
            <span className="text-xs text-blue font-medium">
              {testimonial.handle}
            </span>
          </div>
          <div className="text-xs text-lightgray">
            <span className="font-medium">{testimonial.role}</span>
            <span className="mx-1">•</span>
            <span>{testimonial.company}</span>
          </div>
        </div>
      </div>

      {/* Testimonial text */}
      <p className="text-sm text-darkgray leading-relaxed line-clamp-3 flex-1">
        "{testimonial.description}"
      </p>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-green/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
);

export const Testimonials = ({
  data = testimonials,
  className,
  cardClassName,
}) => (
  <>
    <section className="py-6 md:py-10 xl:py-16">
      <div className="text-center mb-6 md:mb-12 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 tracking-tight">
          Loved by developers worldwide
        </h2>
        <p className="text-lg text-darkgray">
          See what developers are saying about the CountryStateCity API and
          tools
        </p>
      </div>
      <div className={cn("w-full overflow-x-hidden", className)}>
        {[false, true].map((reverse, index) => (
          <Canopy
            key={`Canopy-${index}`}
            reverse={reverse}
            className="[--duration:25s]"
            pauseOnHover
            applyMask={false}
            repeat={3}
          >
            {data.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                className={cardClassName}
              />
            ))}
          </Canopy>
        ))}
      </div>
    </section>
  </>
);
