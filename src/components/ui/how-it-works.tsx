"use client";

import { cn } from "@/lib/utils";
import { Layers, Search, Zap } from "lucide-react";
import type React from "react";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border bg-gray-800 p-6 text-white transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-[#2980B9]/50"
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2980B9]/20 text-[#2980B9]">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl font-semibold text-[#2980B9]">{title}</h3>
    <p className="mb-6 text-gray-300">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#2980B9]/20">
            <div className="h-2 w-2 rounded-full bg-[#2980B9]"></div>
          </div>
          <span className="text-gray-300">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 * It is styled with shadcn/ui theme variables to support light and dark modes.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Join Our Community",
      description:
        "Connect with our network of motivated sellers and digital entrepreneurs.",
      benefits: [
        "Access to exclusive Telegram group",
        "Instant communication channels",
        "Networking opportunities",
      ],
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Complete Training",
      description:
        "Comprehensive training program to equip you with essential digital skills.",
      benefits: [
        "Learn digital marketing techniques",
        "Master sales strategies",
        "Develop content creation skills",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Start Earning",
      description:
        "Begin your journey as a digital sales partner with proven support.",
      benefits: [
        "Competitive commission rates",
        "Ongoing mentorship",
        "Performance-based incentives",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-[#1E1E1E] py-16 sm:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#2980B9] sm:text-5xl">
            How Our Affiliate Program Works
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            A step-by-step guide to becoming a successful digital sales partner
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-gray-700"
          ></div>
          {/* Use grid to align numbers with the card grid below */}
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                // Center the number within its grid column
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-gray-800 font-semibold text-white ring-4 ring-[#1E1E1E]"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};