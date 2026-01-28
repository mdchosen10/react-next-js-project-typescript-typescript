import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Sinan AI | Schedule Discovery Call',
  description: 'Get in touch with Sinan AI to discuss your transformation challenge and execution readiness.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-max">
          <div className="max-w-2xl">
            <h1 className="text-h1 mb-6">Let&apos;s Talk About Your Execution Gap</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Share details about your transformation challenge, and we&apos;ll schedule a discovery conversation with
              someone from our team. No pressure, no pitch—just a genuine exploration of how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar Info */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-navy-900 mb-8">Get in Touch</h3>

                {/* Contact Options */}
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-teal-600" />
                      <p className="font-semibold text-navy-900">Email</p>
                    </div>
                    <p className="text-gray-600 ml-8 text-sm">hello@sinanaiconsulting.com</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5 text-teal-600" />
                      <p className="font-semibold text-navy-900">Phone</p>
                    </div>
                    <p className="text-gray-600 ml-8 text-sm">+1 (415) 555-0123</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    <strong>Response time:</strong> We typically respond to inquiries within 24 business hours.
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    <strong>What to expect:</strong> An initial discovery call to explore your situation, understand
                    your execution challenges, and determine if Sinan AI is the right partner.
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>No consultants.</strong> No tooling. Just execution expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-max max-w-3xl">
          <h2 className="text-h2 text-navy-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What's the typical duration of a discovery call?",
                a: 'Discovery calls usually run 30-45 minutes. We ask questions to understand your situation, share relevant experience, and discuss next steps if there&apos;s a fit.',
              },
              {
                q: 'Do you charge for the discovery call?',
                a: "No. Discovery conversations are complimentary. We only charge if we decide to work together on an engagement.",
              },
              {
                q: 'What industries do you serve?',
                a: 'We primarily work with Fortune 500 companies across financial services, healthcare, manufacturing, technology, and energy sectors. We focus on transformation initiatives with $50M+ identified value.',
              },
              {
                q: 'How quickly can you start?',
                a: 'After agreement on scope and terms, we typically begin within 2-4 weeks. Most engagements run 12-24 months depending on transformation size and complexity.',
              },
              {
                q: "What if we're not ready yet?",
                a: "That's okay. We're happy to discuss execution readiness, help you assess your situation, and stay in touch. Many clients come to us after initial strategy work when they realize they need execution expertise.",
              },
              {
                q: 'Do you offer strategic consulting?',
                a: "No. We focus exclusively on execution infrastructure and value realization. If you need strategy, we can recommend trusted partners. We come in after strategy is determined.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
