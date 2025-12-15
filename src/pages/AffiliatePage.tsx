import React, { useState } from 'react';
import { 
  Handshake, 
  Play,
  Star,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { HowItWorks } from '@/components/ui/how-it-works';
import { PricingSection } from '@/components/ui/pricing-section';
import { Link } from 'react-router-dom';

const AffiliatePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const affiliateTiers = [
    {
      name: "Starter",
      price: {
        monthly: 0,
        yearly: 0,
      },
      description: "Entry-level affiliate program for newcomers",
      icon: (
        <div className="relative">
          <Star className="w-7 h-7 relative z-10 text-gray-400" />
        </div>
      ),
      features: [
        {
          name: "Basic Digital Marketing Training",
          description: "Introductory courses on affiliate marketing",
          included: true,
        },
        {
          name: "Community Access",
          description: "Join our exclusive Telegram affiliate group",
          included: true,
        },
        {
          name: "Starter Resource Kit",
          description: "Basic marketing templates and guides",
          included: true,
        },
        {
          name: "Performance Tracking",
          description: "Basic sales and commission tracking",
          included: true,
        },
        {
          name: "Advanced Workshops",
          description: "Premium training and masterclasses",
          included: false,
        },
      ],
    },
    {
      name: "Pro Affiliate",
      price: {
        monthly: 25,
        yearly: 470,
      },
      description: "Comprehensive program for serious digital entrepreneurs",
      highlight: true,
      badge: "Most Popular",
      icon: (
        <div className="relative">
          <TrendingUp className="w-7 h-7 relative z-10" />
        </div>
      ),
      features: [
        {
          name: "Advanced Digital Marketing Training",
          description: "Comprehensive courses across multiple platforms",
          included: true,
        },
        {
          name: "Exclusive Resource Library",
          description: "Advanced marketing materials, scripts, and templates",
          included: true,
        },
        {
          name: "Priority Support",
          description: "Dedicated affiliate manager and 24/7 support",
          included: true,
        },
        {
          name: "High-Ticket Affiliate Strategies",
          description: "Training on selling premium digital products",
          included: true,
        },
        {
          name: "Personal Mentorship",
          description: "Monthly 1-on-1 coaching sessions",
          included: true,
        },
        {
          name: "Advanced Analytics Dashboard",
          description: "Detailed performance insights and optimization tools",
          included: true,
        },
      ],
    }
  ];

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto pt-24 text-center">
        <div className="flex justify-center mb-8">
          <Handshake className="text-[#2980B9]" size={64} />
        </div>
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Earn, Learn, and Grow with Tarp Studios
        </h1>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
          Join our network of motivated sellers and start earning with tech sales.
        </p>

        {/* Value Proposition */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <ShieldCheck className="text-[#2980B9]" size={32} />
          <p className="text-xl text-gray-300 italic">
            "If you don't get your money back in two weeks, we'll refund it."
          </p>
        </div>

        {/* Video Placeholder with Play Button */}
        <div className="max-w-4xl mx-auto mb-12 relative group">
          {!isVideoPlaying ? (
            <div 
              className="bg-gray-800 h-[500px] rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={handleVideoPlay}
            >
              <div className="bg-[#2980B9] p-6 rounded-full animate-pulse hover:animate-none">
                <Play size={64} className="text-white" />
              </div>
              <span className="absolute bottom-4 text-gray-400">
                Watch Our Story
              </span>
            </div>
          ) : (
            <iframe 
              width="100%" 
              height="500" 
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
              title="Tarp Studios Affiliate Program Overview" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          )}
        </div>
        
        <Link to="/affiliate-application">
          <Button 
            className="bg-[#2980B9] hover:bg-blue-700 text-white text-lg px-8 py-3"
          >
            Apply Now
          </Button>
        </Link>
      </section>

      {/* Rest of the page remains the same */}
      <HowItWorks />

      {/* Pricing/Tiers Section */}
      <PricingSection tiers={affiliateTiers} />
      
      {/* Other sections... */}
      <Footer />
    </div>
  );
};

export default AffiliatePage;