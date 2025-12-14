import React from "react";
import { ClipboardList, ExternalLink, X } from 'lucide-react';

const SurveyBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary-100 via-blue-600 to-primary-100 text-white py-8 px-6 lg:px-12 mx-4 sm:mx-6 lg:mx-10 my-12 rounded-2xl shadow-2xl overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <ClipboardList className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow space-y-3 md:space-y-4">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Your Voice Matters – Take Our Regional Welfare Survey!
              </h2>
              <div className="h-1 w-20 bg-white/40 rounded"></div>
            </div>

            <div className="text-white/95 text-sm md:text-base space-y-2 md:space-y-3 leading-relaxed">
              <p>
                The National Seafarers' Welfare Board of Nigeria (NSWBN) invites all seafarers—serving and retired—to participate in a short regional survey on the availability, quality, and impact of welfare services and facilities across West African seaports. Your experiences and insights are vital in helping us identify existing gaps, strengthen shore-based support, and advocate for better welfare conditions in line with the Maritime Labour Convention (MLC, 2006).
              </p>
              <p>
                By taking just a few minutes to complete the survey, you are directly contributing to improving communication, recreation, medical access, counselling, transport, and overall wellbeing services for seafarers calling at our ports. Your voice matters, and this is your opportunity to shape real, positive change for the global seafaring community.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="https://forms.gle/gQE8g6tv9sYAeUPG7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 md:gap-3 bg-white text-primary-100 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 group"
              >
                <span>Take the Survey Now</span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="text-xs md:text-sm text-white/80 italic">
              Survey takes approximately 5-10 minutes to complete
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
};

export default SurveyBanner;
