import React, { useState } from 'react';
import { 
  BarChart, 
  Network, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Globe, 
  UserPlus 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ProcessSection } from '@/components/ui/how-we-do-it-process-overview';

const SalesPartners = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    productName: '',
    productPrice: '',
    location: '',
    commissionRate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Partnership Application Submitted', formData);
  };

  const howItWorksItems = [
    {
      icon: UserPlus,
      title: "Register Your Business",
      description: "Simple online application process",
      backgroundImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: CheckCircle,
      title: "Product Review",
      description: "Our team evaluates your offerings",
      backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Network,
      title: "Network Integration",
      description: "Your products added to our seller network",
      backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: TrendingUp,
      title: "Sales Promotion",
      description: "Sellers actively market your products",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Globe,
      title: "Expanded Reach",
      description: "Increase visibility and customer base",
      backgroundImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const whyPartnerItems = [
    {
      icon: Network,
      title: "Bigger Reach",
      description: "Access to our extensive seller network",
      backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Shield,
      title: "Trust & Accountability",
      description: "Verified sellers and transparent processes",
      backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused System",
      description: "Strategies designed to maximize sales",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Globe,
      title: "Marketing Support",
      description: "Comprehensive marketing resources",
      backgroundImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // Hero Section Background
  const heroBackgroundImage = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="container mx-auto pt-24 text-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.9)), url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="flex justify-center mb-8">
          <BarChart className="text-[#2980B9]" size={64} />
        </div>
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Grow Your Business with Our Seller Network
        </h1>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
          Use our trained sellers to increase your visibility and sales.
        </p>
        
        <Button 
          className="bg-[#2980B9] hover:bg-blue-700 text-white text-lg px-8 py-3"
        >
          Become a Partner
        </Button>
      </section>

      {/* How It Works Section */}
      <ProcessSection 
        subtitle="Our Partnership Model"
        title="How It Works"
        description="A streamlined process to integrate your products into our dynamic sales ecosystem."
        buttonText="Learn More"
        items={howItWorksItems}
      />

      {/* Why Partner Section */}
      <ProcessSection 
        subtitle="Our Value Proposition"
        title="Why Partner with Tarp Studios?"
        description="We offer a comprehensive platform designed to amplify your business growth and market presence."
        buttonText="Explore Benefits"
        items={whyPartnerItems}
      />

      {/* Partnership Application Form */}
      <section className="container mx-auto py-16 bg-[#1E1E1E]">
        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#2980B9] text-center">
            Submit Partnership Application
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName" className="text-white">Company Name</Label>
                <Input 
                  type="text" 
                  name="companyName" 
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="productName" className="text-white">Product Name</Label>
                <Input 
                  type="text" 
                  name="productName" 
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="Product You Want to Sell"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="productPrice" className="text-white">Product Price</Label>
                <Input 
                  type="text" 
                  name="productPrice" 
                  value={formData.productPrice}
                  onChange={handleInputChange}
                  placeholder="$0.00"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="location" className="text-white">Location</Label>
                <Input 
                  type="text" 
                  name="location" 
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Country"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="commissionRate" className="text-white">Commission Rate</Label>
                <Input 
                  type="text" 
                  name="commissionRate" 
                  value={formData.commissionRate}
                  onChange={handleInputChange}
                  placeholder="% Commission"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-[#2980B9] hover:bg-blue-700 text-white mt-6 px-8 py-3"
              >
                Submit Partnership Application
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesPartners;