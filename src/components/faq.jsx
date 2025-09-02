"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.",
    category: "Plans & Billing",
  },
  {
    question: "What happens if I exceed my request limit?",
    answer:
      "For paid plans, we'll notify you when you approach your limit. You can upgrade or purchase additional requests. Free plan requests are hard-limited.",
    category: "Usage & Limits",
  },
  {
    question: "Do unused credits expire?",
    answer:
      "No, Export Tool credits never expire. You can use them whenever you need to export data.",
    category: "Credits & Data",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees for any plan. You only pay for what you use.",
    category: "Plans & Billing",
  },
];

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="my-8 lg:my-20">
      <div className="text-center mb-6 md:mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue/10 border border-blue/20 text-blue text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-blue rounded-full mr-2 animate-pulse"></span>
          Support
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
          Frequently asked questions
        </h2>
        <p className="text-lg text-darkgray max-w-2xl mx-auto">
          Everything you need to know about our API and services. Can't find
          what you're looking for?
          <Link
            href="mailto:support@countrystatecity.in"
            className="text-blue hover:text-blue/80 font-medium ml-1"
          >
            Contact our support team
          </Link>
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openFAQ === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className="group">
      <button
        className="w-full p-4 md:p-6 text-left flex items-start justify-between bg-white/40 backdrop-blur-sm border border-light/30 rounded-2xl hover:bg-white/60 hover:border-light/50 transition-all duration-300"
        onClick={onToggle}
      >
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-blue/70 uppercase">
              {faq.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-dark group-hover:text-blue transition-colors duration-200">
            {faq.question}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center group-hover:bg-blue/20 transition-colors duration-200">
            {isOpen ? (
              <Minus className="w-4 h-4 text-blue" />
            ) : (
              <Plus className="w-4 h-4 text-blue" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 mx-4 md:mx-6">
          <div className="p-4 md:p-6 border-l-4 border-blue/30">
            <p className="text-darkgray">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
