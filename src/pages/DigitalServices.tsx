import React from 'react';
import { 
  Palette, 
  Video, 
  Globe, 
  Megaphone, 
  Bot 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SparksCarousel, SparkItem } from '@/components/ui/sparks-carousel';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Link } from 'react-router-dom';

const DigitalServices = () => {
  const servicesData: SparkItem[] = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      title: "Branding & Design",
      count: 5,
      countLabel: "Core Services"
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      title: "Video & Content Editing",
      count: 4,
      countLabel: "Editing Styles"
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      title: "Websites & Landing Pages",
      count: 6,
      countLabel: "Design Types"
    },
    {
      id: 4,
      imageSrc: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      title: "Social Media & Paid Ads",
      count: 4,
      countLabel: "Marketing Channels"
    },
    {
      id: 5,
      imageSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      title: "AI & Automation",
      count: 5,
      countLabel: "Automation Tools"
    }
  ];

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto pt-24 text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Digital Work That Helps You Grow
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Comprehensive digital solutions designed to elevate your business and personal brand in the digital landscape.
        </p>
      </section>

      {/* Services Carousel */}
      <SparksCarousel 
        title="Our Digital Services" 
        subtitle="Comprehensive solutions for your digital needs"
        items={servicesData} 
      />

      {/* CTA Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#2980B9]">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Let's discuss how our digital services can help you achieve your goals and drive growth.
        </p>
        <Link to="/request-quote">
          <Button className="bg-[#2980B9] hover:bg-blue-700 text-white">
            Request a Quote
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalServices;