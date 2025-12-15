import React from 'react';
import { 
  Palette,  
  Wrench,   
  TrendingUp, 
  Play, 
  Shield,
  Network,
  BookOpen,
  Laptop,
  PenTool,
  Megaphone,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { HowItWorks } from '@/components/ui/how-it-works';
import { ContactCard } from '@/components/ui/contact-card';
import { ProcessSection } from '@/components/ui/how-we-do-it-process-overview';
import Tarpad from '@/assets/videos/TARP_ad.mp4';
import TarpStudioImage from '@/assets/images/20250526_0010_Logotipo Tecnológico Destacado_remix_01jw4va3qde56912jax3tfqcb1.png'; // Importing local asset

const HomePage = () => {
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleJoinTelegram = () => {
    window.open('https://t.me/+acBe-gIbZq4zMzJk', '_blank', 'noopener,noreferrer');
  };
  
  const aboutFeatures = [
    {
      icon: <Palette className="text-[#2980B9]" size={32} />,
      title: "Creativity",
      description: "Innovative solutions that spark imagination"
    },
    {
      icon: <Wrench className="text-[#2980B9]" size={32} />,
      title: "Tools",
      description: "Cutting-edge technology at your fingertips"
    },
    {
      icon: <TrendingUp className="text-[#2980B9]" size={32} />,
      title: "Growth",
      description: "Strategies that drive continuous improvement"
    },
    {
      icon: <Shield className="text-[#2980B9]" size={32} />,
      title: "Support",
      description: "Comprehensive guidance every step of the way"
    }
  ];

  const whyChooseTarpItems = [
    {
      icon: Network,
      title: "Growth Ecosystem",
      description: "Everything connected and optimized",
      backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: TrendingUp,
      title: "Affiliate & Sales Network",
      description: "Earn while learning and growing",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: BookOpen,
      title: "Training & Education",
      description: "Content creation, ads, and editing skills",
      backgroundImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Laptop,
      title: "Tech Products",
      description: "Computers, laptops, and smartphones",
      backgroundImage: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: PenTool,
      title: "Digital Services",
      description: "Design, media, and automation solutions",
      backgroundImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Megaphone,
      title: "Business Partnerships",
      description: "Expand your sales and reach",
      backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Header />
      
     {/* New Hero Section */}
      <section className="container mx-auto pt-24 text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Your Creative and Digital Growth Starts Here.
        </h1>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
          We help individuals and businesses create better content, access great technology, 
          and grow through modern digital solutions and partnerships.
        </p>
        
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
              src="https://www.youtube.com/embed/IxC8DGnAmi0" 
              title="Tarp Studios Overview" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          )}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          {/* <Button 
            className="bg-[#2980B9] hover:bg-blue-700 text-white"
            size="lg"
          >
            Start Now
          </Button> */}
          <Button 
            onClick={handleJoinTelegram}
            variant="outline" 
            className="border-[#2980B9] text-[#2980B9] hover:bg-[#2980B9] hover:text-white"
            size="lg"
          >
            Join Our Sellers Network
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-[#2980B9] text-left">
            About Tarp Studios
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed text-left">
            At Tarp Studios, we believe growth becomes easier when you have the right tools, skills, and support. 
            We bring together digital services, technology products, and a network of sellers and partners—everything 
            created to help people and businesses thrive.
          </p>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {aboutFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex items-start space-x-4"
              >
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2980B9]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-3 text-[#2980B9]">Our Mission</h3>
              <p className="text-gray-300">
                Empower people to grow creatively, digitally, and financially.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-3 text-[#2980B9]">Our Vision</h3>
              <p className="text-gray-300">
                Build a community where anyone can learn, create, and earn.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Side - Professional Image */}
        <div className="relative group h-full">
          <div className="overflow-hidden rounded-lg shadow-2xl h-full transform transition-all duration-300 group-hover:scale-105">
            <img 
              src={TarpStudioImage} 
              alt="Tarp Studios Professional" 
              className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all"
            />
            {/* Futuristic Overlay Effect */}
            <div className="absolute inset-0 bg-[#2980B9] opacity-20 group-hover:opacity-10 transition-opacity"></div>
            
            {/* Tech Ambience Highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#2980B9]/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Tarp Studios Section */}
      <ProcessSection 
        subtitle="Our Ecosystem"
        title="Why Choose Tarp Studios?"
        description="A comprehensive platform designed to empower your digital journey through interconnected services and opportunities."
        buttonText="Explore More"
        items={whyChooseTarpItems}
      />

      {/* Remaining sections */}
      <ContactCard />
      <Footer />
    </div>
  );
};

export default HomePage;