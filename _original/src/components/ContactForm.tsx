'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  challenge: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    challenge: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        title: '',
        company: '',
        email: '',
        phone: '',
        challenge: '',
      });

      // Reset to idle after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-teal-50 border border-teal-200 rounded-xl text-center">
        <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-navy-900 mb-2">Thank you for reaching out</h3>
        <p className="text-gray-600">
          We've received your inquiry. Our team will be in touch within 24 hours to schedule your discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-sm font-semibold text-navy-900 mb-2 block">
          Full Name *
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Smith"
          required
          className="bg-white border border-gray-300 focus:border-teal-500"
        />
      </div>

      {/* Title */}
      <div>
        <Label htmlFor="title" className="text-sm font-semibold text-navy-900 mb-2 block">
          Title *
        </Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Chief Financial Officer"
          required
          className="bg-white border border-gray-300 focus:border-teal-500"
        />
      </div>

      {/* Company */}
      <div>
        <Label htmlFor="company" className="text-sm font-semibold text-navy-900 mb-2 block">
          Company *
        </Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Acme Corporation"
          required
          className="bg-white border border-gray-300 focus:border-teal-500"
        />
      </div>

      {/* Email & Phone Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="text-sm font-semibold text-navy-900 mb-2 block">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@acme.com"
            required
            className="bg-white border border-gray-300 focus:border-teal-500"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-semibold text-navy-900 mb-2 block">
            Phone (optional)
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="bg-white border border-gray-300 focus:border-teal-500"
          />
        </div>
      </div>

      {/* Challenge */}
      <div>
        <Label htmlFor="challenge" className="text-sm font-semibold text-navy-900 mb-2 block">
          Describe Your Transformation Challenge *
        </Label>
        <Textarea
          id="challenge"
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          placeholder="Tell us about your stalled transformation initiative, the value identified, and what's blocking execution..."
          required
          rows={6}
          className="bg-white border border-gray-300 focus:border-teal-500 resize-none"
        />
        <p className="text-xs text-gray-500 mt-2">Share as much detail as you're comfortable with</p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full gap-2"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>Submitting...</>
        ) : (
          <>
            Schedule Discovery Conversation <ArrowRight size={20} />
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Your information will only be used to schedule your discovery call.
      </p>
    </form>
  );
}
