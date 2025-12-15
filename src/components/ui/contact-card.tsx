import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

export const ContactCard = ({ 
  className, 
  formSectionClassName 
}: { 
  className?: string, 
  formSectionClassName?: string 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // TODO: Implement actual form submission logic
    console.log('Form Submitted', formData);
    
    // Show success toast
    toast.success('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      contact: '',
      email: '',
      message: ''
    });
  };

  return (
    <section 
      id="contact" 
      className={cn(
        'container mx-auto grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl my-16',
        className
      )}
    >
      {/* Left Side - Contact Information */}
      <div className="bg-[#1E1E1E] text-white p-10 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-[#2980B9]">
          Get In Touch
        </h2>
        <p className="text-gray-300 mb-6">
          Have a question or want to collaborate? Fill out the form, and we'll get back to you soon.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <MapPin className="text-[#2980B9]" size={24} />
            <span>Angola, Luanda City</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-[#2980B9]" size={24} />
            <span>+244 937 882 868</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-[#2980B9]" size={24} />
            <span>junioralbert561@gmail.com</span>
          </div>
        </div>
      </div>
      
      {/* Right Side - Contact Form */}
      <div 
        className={cn(
          'bg-[#2980B9]/10 flex h-full w-full items-center border-t border-[#2980B9]/20 p-5 md:col-span-1 md:border-t-0 md:border-l',
          formSectionClassName
        )}
      >
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <Label htmlFor="name" className="text-white mb-2">Full Name</Label>
            <Input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Full Name" 
              className="mt-2 bg-gray-800 border-[#2980B9]/30 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="contact" className="text-white mb-2">Contact Number</Label>
            <Input 
              type="tel" 
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Your Phone Number" 
              className="mt-2 bg-gray-800 border-[#2980B9]/30 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-white mb-2">Email Address</Label>
            <Input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com" 
              className="mt-2 bg-gray-800 border-[#2980B9]/30 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="text-white mb-2">Your Message</Label>
            <Textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..." 
              className="mt-2 bg-gray-800 border-[#2980B9]/30 text-white min-h-[120px]"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#2980B9] hover:bg-blue-700 text-white flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Send Message</span>
          </Button>
        </form>
      </div>
    </section>
  );
};