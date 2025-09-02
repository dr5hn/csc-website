import Link from "next/link";
import { BookOpen, MessageCircle, Heart } from "lucide-react";

import GitHubIcon from "@/icons/GitHub";

export default function CommunitySection() {
  return (
    <section className="relative container mx-auto px-4 py-6 lg:py-12 !pt-0">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 tracking-tight">
            Community & Support
          </h2>
          <p className="text-lg text-darkgray">
            Join our community of developers and get the help you need
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 md:mb-12">
          {/* GitHub */}
          <Link
            href="https://github.com"
            className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-light/50 hover:border-light transition-all duration-300 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-dark/10 rounded-xl flex items-center justify-center group-hover:bg-dark/20 transition-colors duration-300">
                <GitHubIcon className="w-6 h-6 text-dark" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark">Open Source</h3>
                <p className="text-sm text-darkgray">
                  Contribute to our GitHub repo
                </p>
              </div>
            </div>
            <p className="text-darkgray">
              Explore our codebase, report issues, and contribute to making
              location data more accessible for everyone.
            </p>
          </Link>

          {/* Support Docs */}
          <Link
            href="/docs/support"
            className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-light/50 hover:border-light transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center group-hover:bg-blue/20 transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark">
                  Support Docs
                </h3>
                <p className="text-sm text-darkgray">
                  Get help when you need it
                </p>
              </div>
            </div>
            <p className="text-darkgray">
              Comprehensive guides, API references, and troubleshooting tips to
              help you integrate quickly.
            </p>
          </Link>
        </div>

        {/* Response Time & Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-success" />
              <span className="text-2xl font-bold text-dark">&lt; 2h</span>
            </div>
            <p className="text-sm text-darkgray">Average response time</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GitHubIcon className="w-5 h-5 text-dark" />
              <span className="text-2xl font-bold text-dark">50+</span>
            </div>
            <p className="text-sm text-darkgray">Open source contributions</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-danger" />
              <span className="text-2xl font-bold text-dark">99%</span>
            </div>
            <p className="text-sm text-darkgray">Developer satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
