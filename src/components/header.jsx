"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Code,
  BookOpen,
  Users,
  DollarSign,
  User,
  Database,
  Download,
  PencilLine,
  CircleHelp,
  MessageCircleQuestion,
  MessageCircle,
  LogIn,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border border-transparent ${
          isScrolled
            ? "backdrop-blur-xl border-light/50 shadow-2xl shadow-blue/5"
            : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between transition-all duration-300 h-16`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue via-blue to-green rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-blue to-green rounded-sm"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-dark">NexusAPI</span>
                <span className="text-xs text-lightgray -mt-1">
                  by Nexus Labs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/about"
                className="flex items-center space-x-1 px-4 py-2 text-darkgray hover:text-blue transition-all duration-200 font-medium rounded-lg hover:bg-blue/5"
              >
                <User className="w-4 h-4" />
                <span>About</span>
              </Link>

              <div className="relative group">
                <button className="cursor-pointer flex items-center space-x-1 px-4 py-2 text-darkgray hover:text-blue transition-all duration-200 font-medium rounded-lg hover:bg-blue/5">
                  <Code className="w-4 h-4" />
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-light/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link
                      href="/product/database"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue/10 transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 bg-blue/10 group-hover:bg-blue/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                        <Database className="w-4 h-4 text-blue" />
                      </div>
                      <div>
                        <div className="font-medium text-dark">Database</div>
                        <div className="text-sm text-lightgray">
                          Geographical database
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/product/api"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue/10 transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 bg-green/10 group-hover:bg-green/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                        <Code className="w-4 h-4 text-green" />
                      </div>
                      <div>
                        <div className="font-medium text-dark">API Service</div>
                        <div className="text-sm text-lightgray">
                          RESTful endpoints
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/product/export-tool"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue/10 transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 bg-blue/10 group-hover:bg-blue/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                        <Download className="w-4 h-4 text-blue" />
                      </div>
                      <div>
                        <div className="font-medium text-dark">Export Tool</div>
                        <div className="text-sm text-lightgray">
                          Flexible queries
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/product/update-tool"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green/10 transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 bg-green/10 group-hover:bg-green/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                        <PencilLine className="w-4 h-4 text-green" />
                      </div>
                      <div>
                        <div className="font-medium text-dark">Update Tool</div>
                        <div className="text-sm text-lightgray">
                          Flexible queries
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/pricing"
                className="flex items-center space-x-1 px-4 py-2 text-darkgray hover:text-blue transition-all duration-200 font-medium rounded-lg hover:bg-blue/5"
              >
                <DollarSign className="w-4 h-4" />
                <span>Pricing</span>
              </Link>

              <Link
                href="/faqs"
                className="flex items-center space-x-1 px-4 py-2 text-darkgray hover:text-blue transition-all duration-200 font-medium rounded-lg hover:bg-blue/5"
              >
                <MessageCircleQuestion className="w-4 h-4" />
                <span>FAQs</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center space-x-1 px-4 py-2 text-darkgray hover:text-blue transition-all duration-200 font-medium rounded-lg hover:bg-blue/5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Support</span>
              </Link>
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Login Dropdown */}
              <div className="relative group">
                <Button
                  variant="ghost"
                  className="text-darkgray hover:text-blue hover:bg-blue/5 font-medium flex items-center space-x-1"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </Button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-light/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link
                      href="/api"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue/10 transition-colors duration-200"
                    >
                      <Code className="w-4 h-4 text-blue" />
                      <span className="font-medium text-dark">API</span>
                    </Link>
                    <Link
                      href="/product/export-tool"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue/10 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4 text-blue" />
                      <span className="font-medium text-dark">Export Tool</span>
                    </Link>
                    <Link
                      href="/product/update-tool"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue/10 transition-colors duration-200"
                    >
                      <PencilLine className="w-4 h-4 text-blue" />
                      <span className="font-medium text-dark">Update Tool</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-gradient-to-r from-blue to-blue/90 hover:from-blue/90 hover:to-blue text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-6"
              >
                <Link href="/docs" className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Docs</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`cursor-pointer lg:hidden p-2 text-darkgray transition-colors duration-200 rounded-lg ${
                isMenuOpen
                  ? "hover:bg-danger/5 hover:text-danger"
                  : "hover:bg-blue/5 hover:text-blue"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-light/50 bg-white/95 backdrop-blur-xl rounded-b-xl">
              <nav className="py-6 space-y-2">
                <div className="px-4 py-2">
                  <div className="text-sm font-semibold text-lightgray uppercase mb-3">
                    Products
                  </div>
                  <Link
                    href="/api"
                    className="flex items-center space-x-3 px-4 py-3 text-darkgray hover:text-blue hover:bg-blue/5 transition-all duration-200 font-medium rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Code className="w-5 h-5" />
                    <span>REST API</span>
                  </Link>
                  <Link
                    href="/graphql"
                    className="flex items-center space-x-3 px-4 py-3 text-darkgray hover:text-blue hover:bg-blue/5 transition-all duration-200 font-medium rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Zap className="w-5 h-5" />
                    <span>GraphQL</span>
                  </Link>
                </div>

                <div className="border-t border-light/50 pt-4">
                  <Link
                    href="/pricing"
                    className="flex items-center space-x-3 px-4 py-3 text-darkgray hover:text-blue hover:bg-blue/5 transition-all duration-200 font-medium rounded-lg mx-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <DollarSign className="w-5 h-5" />
                    <span>Pricing</span>
                  </Link>
                  <Link
                    href="/docs"
                    className="flex items-center space-x-3 px-4 py-3 text-darkgray hover:text-blue hover:bg-blue/5 transition-all duration-200 font-medium rounded-lg mx-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Documentation</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center space-x-3 px-4 py-3 text-darkgray hover:text-blue hover:bg-blue/5 transition-all duration-200 font-medium rounded-lg mx-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users className="w-5 h-5" />
                    <span>Contact</span>
                  </Link>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="px-4 pt-6 space-y-3 border-t border-light/50">
                  <Button
                    variant="ghost"
                    className="w-full text-darkgray hover:text-blue hover:bg-blue/5 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-blue to-blue/90 hover:from-blue/90 hover:to-blue text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
