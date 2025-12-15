import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: string;
  paymentLink: string;
}

export const PricingSection = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '0 AOA',
      description: 'Perfect for individuals getting started',
      features: [
        'Limited affiliate access',
        'Community forum access'
      ],
      paymentLink: 'https://pay.kuenha.com/ff2f5386-0fca-4e8d-bb9a-70fefb428e95'
    },
    {
      name: 'Pro',
      price: '19.900, 00 AOA/mo',
      description: 'Ideal for serious content creators',
      features: [
        'Advanced content tools',
        'Expanded affiliate network',
        'Priority support',
        'Monthly masterclass',
        'Analytics dashboard'
      ],
      highlight: 'border-[#2980B9] bg-[#2980B9]/10',
      paymentLink: 'https://pay.kuenha.com/ff2f5386-0fca-4e8d-bb9a-70fefb428e95'
    }
  ];

  const handleJoinNow = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#2980B9]">
          Pricing Plans
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the plan that best fits your growth journey. Flexible options for individuals and businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {pricingTiers.map((tier, index) => (
          <div 
            key={index} 
            className={cn(
              "bg-[#1E1E1E] rounded-xl border border-gray-800 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105",
              tier.highlight
            )}
          >
            <div className="p-8 pb-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-[#2980B9]">
                  {tier.name}
                </h3>
                {tier.highlight && (
                  <span className="bg-[#2980B9] text-white px-3 py-1 rounded-full text-xs">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">
                  {tier.price}
                </span>
                <p className="text-gray-400 mt-2">
                  {tier.description}
                </p>
              </div>
            </div>

            <div className="px-8 py-4 flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-gray-300"
                  >
                    <Check 
                      size={20} 
                      className="text-[#2980B9] mr-3" 
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0 mt-auto">
              <Button 
                onClick={() => handleJoinNow(tier.paymentLink)}
                className={cn(
                  "w-full relative transition-all duration-300",
                  tier.highlight 
                    ? "bg-[#2980B9] hover:bg-blue-700 text-white" 
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                )}
              >
                Join Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};