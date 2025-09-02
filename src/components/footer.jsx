import Link from "next/link";
import XIcon from "@/icons/XIcon";
import GitHubIcon from "@/icons/GitHub";
import { ExternalLink, Linkedin } from "lucide-react";
import KaggleIcon from "@/icons/KaggleIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-light/50 bg-white/80">
      <div className="container mx-auto px-4 py-6 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue via-blue to-green rounded-lg flex items-center justify-center shadow-md">
                  <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue to-green rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-dark tracking-tight">
                  NexusAPI
                </span>
              </div>
            </div>
            <p className="text-sm text-darkgray leading-relaxed mb-6">
              The world's most comprehensive geographical database, trusted by
              developers worldwide for accurate location data in their
              applications. Built by the community, for the community.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-light/50 hover:bg-light transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4 text-darkgray group-hover:text-dark transition-colors duration-200" />
              </Link>
              <Link
                href="https://twitter.com"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-light/50 hover:bg-light transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-4 h-4 text-darkgray group-hover:text-dark transition-colors duration-200" />
              </Link>
              <Link
                href="https://www.kaggle.com/datasets/darshangada/countries-states-cities-database"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-light/50 hover:bg-light transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle"
              >
                <KaggleIcon className="w-4 h-4 text-darkgray group-hover:text-dark transition-colors duration-200" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dr5hn/"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-light/50 hover:bg-light transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-darkgray group-hover:text-dark transition-colors duration-200" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/database"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Database
                </Link>
              </li>
              <li>
                <Link
                  href="/products/graphql"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  API Service
                </Link>
              </li>
              <li>
                <Link
                  href="/products/manager"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Export Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/products/export"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Update Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://status.countrystatecity.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Status
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://playground.countrystatecity.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Playground
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://demo.countrystatecity.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Database Demo
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-light/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-lightgray">
            © {currentYear} NexusAPI. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/pricing"
              className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/changelog"
              className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
            >
              Changelog
            </Link>
            <Link
              href="/support"
              className="text-sm text-darkgray hover:text-blue transition-colors duration-200"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
