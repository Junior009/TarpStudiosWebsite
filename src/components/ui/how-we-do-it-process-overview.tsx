import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

// Interface for individual process card props
interface ProcessCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  backgroundImage?: string;
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className, 
  backgroundImage 
}) => (
  <div 
    className={cn(
      "group relative w-full rounded-lg border border-gray-800 bg-[#1E1E1E] p-6 transition-all cursor-pointer duration-300 hover:border-[#2980B9]/60 hover:shadow-lg overflow-hidden", 
      className
    )}
  >
    {/* Background Image Overlay */}
    {backgroundImage && (
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    )}

    {/* Content Container */}
    <div className="relative z-10">
      {/* Icon Container */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg duration-300 border border-gray-800 bg-[#1E1E1E] text-[#2980B9] shadow-sm transition-colors group-hover:bg-[#2980B9] group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

// Interface for the main section props
interface ProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  items: ProcessCardProps[];
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
  subtitle,
  title,
  description,
  buttonText,
  items,
}) => {
  return (
    <section className="w-full bg-[#1E1E1E] py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-3 md:gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center text-center md:col-span-1 md:text-left">
          <span className="mb-2 text-sm font-medium uppercase tracking-widest text-[#2980B9]">
            {subtitle}
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mb-6 text-base text-gray-300">
            {description}
          </p>
          <Button 
            size="lg" 
            className="bg-[#2980B9] text-white hover:bg-blue-700 hover:scale-110 duration-300 transition-all cursor-pointer"
          >
            {buttonText}
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Right Content - Grid of Process Cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-2">
          {items.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};