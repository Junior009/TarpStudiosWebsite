import React, { useState } from 'react';
import { CheckCircle, Users, Upload, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { showSuccess } from '@/utils/toast';

const AffiliateApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    motivation: '',
    document: null as File | null
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      document: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailSubject = `New Affiliate Application - ${formData.fullName}`;
    const emailBody = `
New Affiliate Application from TARP Studios Website

Applicant Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Contact: ${formData.contact}
- Document: ${formData.document ? formData.document.name : 'No document uploaded'}

Motivation:
${formData.motivation}

---
This application was submitted through the TARP Studios affiliate application form.
Please review the applicant's information and uploaded document.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:junioralbert561@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Affiliate Application Submitted:', formData);
    showSuccess('Application submitted successfully!');
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      contact: '',
      motivation: '',
      document: null
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
              Application Submitted!
            </h1>
            
            <p className="text-xl mb-8 text-gray-300">
              Thank you for your interest in joining TARP Studios as an affiliate. 
              We've received your application and will review it carefully.
            </p>
            
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#2980B9]">What happens next?</h3>
              <div className="text-left space-y-3 text-gray-300">
                <p>✓ Our team will review your application and documents</p>
                <p>✓ We'll verify your information and motivation</p>
                <p>✓ You'll receive an approval decision within 3-5 business days</p>
                <p>✓ If approved, you'll get access to our affiliate portal and training materials</p>
              </div>
            </div>
            
            <div className="bg-blue-900/30 border border-[#2980B9] p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-300">
                <strong className="text-[#2980B9]">Important:</strong> Check your email regularly for updates on your application status.
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={resetForm}
                variant="outline" 
                className="border-[#2980B9] text-[#2980B9] hover:bg-[#2980B9] hover:text-white"
              >
                Submit Another Application
              </Button>
              <Button 
                onClick={() => window.location.href = '/affiliate'}
                className="bg-[#2980B9] hover:bg-blue-700 text-white"
              >
                Back to Affiliate Program
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
          <Users className="text-[#2980B9]" size={64} />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Affiliate Application
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Join TARP Studios and earn by selling tech products while learning valuable digital skills.
        </p>
        
        <div className="bg-blue-900/30 border border-[#2980B9] p-4 rounded-lg max-w-2xl mx-auto mb-12">
          <p className="text-sm text-gray-300">
            <strong className="text-[#2980B9]">Trust & Clarity:</strong> All applications are reviewed before approval.
          </p>
        </div>
      </section>

      {/* Application Form */}
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
                placeholder="Your full legal name"
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

            {/* Contact */}
            <div>
              <Label htmlFor="contact" className="text-white text-lg mb-2 block">
                Contact (Phone / WhatsApp) *
              </Label>
              <Input 
                type="tel" 
                name="contact" 
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full h-12 text-lg"
                required
              />
            </div>

            {/* Motivation */}
            <div>
              <Label htmlFor="motivation" className="text-white text-lg mb-2 block">
                Short Motivation *
              </Label>
              <Textarea 
                name="motivation" 
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Tell us why you want to become a TARP Studios affiliate and what experience you have with sales or digital marketing..."
                className="w-full min-h-[120px] text-lg resize-none"
                required
              />
              <p className="text-sm text-gray-400 mt-2">
                Minimum 50 characters. Be specific about your goals and relevant experience.
              </p>
            </div>

            {/* Document Upload */}
            <div>
              <Label htmlFor="document" className="text-white text-lg mb-2 block">
                Upload Identification Document *
              </Label>
              <div className="relative">
                <Input 
                  type="file" 
                  name="document" 
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full h-12 text-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2980B9] file:text-white hover:file:bg-blue-700"
                  required
                />
                <div className="flex items-center mt-2 text-sm text-gray-400">
                  <FileText size={16} className="mr-2" />
                  <span>Accepted formats: PDF, JPG, PNG (Max 5MB)</span>
                </div>
              </div>
              {formData.document && (
                <div className="mt-2 p-2 bg-gray-800 rounded flex items-center">
                  <Upload size={16} className="text-green-500 mr-2" />
                  <span className="text-sm text-gray-300">{formData.document.name}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#2980B9] hover:bg-blue-700 text-white text-lg py-4 h-auto"
              >
                {isSubmitting ? 'Submitting Application...' : 'Apply as Affiliate'}
              </Button>
            </div>

            {/* Privacy & Terms Note */}
            <div className="text-sm text-gray-400 text-center space-y-2">
              <p>
                By submitting this application, you agree to our terms and conditions.
              </p>
              <p>
                Your personal information will be kept confidential and used only for application review.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliateApplication;