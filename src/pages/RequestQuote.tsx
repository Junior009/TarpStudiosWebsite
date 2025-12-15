import React, { useState } from 'react';
import { CheckCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { showSuccess } from '@/utils/toast';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Website Development',
    'App Development', 
    'Automations',
    'Content Creation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailSubject = `New Quote Request - ${formData.service}`;
    const emailBody = `
New Quote Request from TARP Studios Website

Client Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone/WhatsApp: ${formData.phone}
- Company: ${formData.company || 'Not provided'}
- Service Requested: ${formData.service}

Project Description:
${formData.description}

---
This request was submitted through the TARP Studios website quote form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:junioralbert561@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Quote Request Submitted:', formData);
    showSuccess('Quote request submitted successfully!');
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      description: ''
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#1E1E1E] text-white min-h-screen">
        <Header />
        
        <section className="container mx-auto pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-green-500 p-4 rounded-full">
                <CheckCircle size={64} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-6 text-[#2980B9]">
              Thank You!
            </h1>
            
            <p className="text-xl mb-8 text-gray-300">
              We've received your quote request and will review it carefully. 
              Our team will get back to you within 24 hours with a personalized quote.
            </p>
            
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#2980B9]">What happens next?</h3>
              <div className="text-left space-y-3 text-gray-300">
                <p>✓ We'll review your requirements</p>
                <p>✓ Our team will prepare a detailed quote</p>
                <p>✓ You'll receive a personalized proposal within 24 hours</p>
                <p>✓ We'll schedule a call to discuss your project</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={resetForm}
                variant="outline" 
                className="border-[#2980B9] text-[#2980B9] hover:bg-[#2980B9] hover:text-white"
              >
                Submit Another Request
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-[#2980B9] hover:bg-blue-700 text-white"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto pt-24 text-center">
        <div className="flex justify-center mb-8">
          <FileText className="text-[#2980B9]" size={64} />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Request a Quote
        </h1>
        
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          Tell us what you need. We'll review your request and get back to you with a personalized quote.
        </p>
      </section>

      {/* Quote Form */}
      <section className="container mx-auto pb-16">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
            
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName" className="text-white text-lg mb-2 block">
                Full Name *
              </Label>
              <Input 
                type="text" 
                name="fullName" 
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full h-12 text-lg"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-white text-lg mb-2 block">
                Email Address *
              </Label>
              <Input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full h-12 text-lg"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-white text-lg mb-2 block">
                Phone / WhatsApp *
              </Label>
              <Input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full h-12 text-lg"
                required
              />
            </div>

            {/* Company (Optional) */}
            <div>
              <Label htmlFor="company" className="text-white text-lg mb-2 block">
                Company <span className="text-gray-400">(optional)</span>
              </Label>
              <Input 
                type="text" 
                name="company" 
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
                className="w-full h-12 text-lg"
              />
            </div>

            {/* Service Selection */}
            <div>
              <Label className="text-white text-lg mb-2 block">
                Service Needed *
              </Label>
              <Select onValueChange={handleServiceChange} required>
                <SelectTrigger className="w-full h-12 text-lg">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description" className="text-white text-lg mb-2 block">
                Brief Description of Your Need *
              </Label>
              <Textarea 
                name="description" 
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                className="w-full min-h-[120px] text-lg resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#2980B9] hover:bg-blue-700 text-white text-lg py-4 h-auto"
              >
                {isSubmitting ? 'Submitting...' : 'Request Quote'}
              </Button>
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-gray-400 text-center">
              We respect your privacy. Your information will only be used to provide you with a quote.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestQuote;