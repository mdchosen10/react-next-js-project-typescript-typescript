import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Zap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Sinan AI | Founder & Mission',
  description: 'Learn about Sinan AI, our founder Mustafa, and our mission to close the execution gap in enterprise transformation.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1765729003706-355ca161736d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTEyMDN8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBza3lsaW5lJTIwcHJvZmVzc2lvbmFsfGVufDB8MHx8fDE3Njg5Mzg2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Corporate office background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-h1 mb-6">About Sinan AI</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We exist to solve one problem: the gap between identified and realized transformation value. A problem
              Fortune 500 companies have been living with for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Founder Photo */}
            <div>
              <div className="relative">
                <Image
                  src="/mustafa-headshot.png"
                  alt="Mustafa Dafalla, Founder & CEO of Sinan AI"
                  width={500}
                  height={600}
                  className="rounded-xl shadow-lg"
                  priority
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>
            </div>

            {/* Founder Bio */}
            <div>
              <div className="inline-block px-4 py-2 bg-teal-100 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6">
                Founder & CEO
              </div>
              <h2 className="text-h2 text-navy-900 mb-6">Mustafa Dafalla</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                MIT Engineer with 15+ years transforming Fortune 500 operations. Previously led execution infrastructure
                at global consulting firms, managing $3B+ in transformation value across 50+ enterprise engagements.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After seeing the same pattern repeatedly—brilliant strategy followed by execution failure—Mustafa founded
                Sinan AI to specialize exclusively in the execution gap. The problem wasn't strategy quality, it was the
                missing infrastructure to turn strategy into realized results.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sinan AI builds the governance, accountability, and capability systems that close transformation value at scale.
                We turn identified dollars into realized dollars.
              </p>
            </div>
          </div>

          {/* Company Experience Logos */}
          <div className="text-center mb-16">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">Previously Built Execution Systems At</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-2xl font-bold text-gray-700">PALANTIR</div>
              <div className="text-2xl font-bold text-gray-700">STRATEGY&</div>
              <div className="text-2xl font-bold text-gray-700">BOOZ ALLEN</div>
              <div className="text-2xl font-bold text-gray-700">DUPONT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-max">
          {/* Strategy Meeting Image */}
          <div className="mb-16 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTEyMDN8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBzdHJhdGVneSUyMGJvYXJkcm9vbXxlbnwwfDB8fHwxNzY4OTM4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Strategic business meeting"
              width={1080}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">Strategic execution where most transformations fail</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left - Text */}
            <div>
              <h2 className="text-h2 text-navy-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Most transformation initiatives fail not because strategy is weak, but because execution infrastructure is
                absent. Organizations identify massive value, but capture only a fraction because they lack:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Clear governance structures that enable cross-functional decision-making',
                  'Real-time visibility into value realization vs. plans',
                  'Capability building in the teams responsible for execution',
                  'Change management that addresses frontline resistance',
                  'Accountability mechanisms that tie success to business outcomes',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sinan AI was founded to build this missing infrastructure. We specialize in turning strategy into
                realized dollars through structured execution.
              </p>
            </div>

            {/* Right - Visual */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-lg border-2 border-teal-200">
                <Award className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Execution-Focused</h3>
                <p className="text-gray-700">We don&apos;t do strategy consulting. We come in after strategy is set and focus exclusively on closing the execution gap.</p>
              </div>
              <div className="bg-gradient-to-br from-gold-50 to-orange-50 p-8 rounded-lg border-2 border-gold-200">
                <Zap className="w-12 h-12 text-gold-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Outcomes-Driven</h3>
                <p className="text-gray-700">We measure success by realized value and business impact, not deliverables or recommendations.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border-2 border-green-200">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Embedded Partnership</h3>
                <p className="text-gray-700">We embed in your organization, build capability in your teams, and stay through value realization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding-lg bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-h2 text-navy-900 text-center mb-12">Our Philosophy</h2>

          <div className="space-y-8">
            {[
              {
                title: 'Strategy is Table Stakes',
                description:
                  'We assume your strategy is good. If it isn&apos;t, we&apos;ll tell you—but that&apos;s not our focus. We come in when strategy is set and focus on execution.',
              },
              {
                title: 'Execution Infrastructure Matters More Than Consultants',
                description:
                  'Our job isn&apos;t to be smart in the room. It&apos;s to build capability in your teams so they remain effective after we leave. We embed, we teach, we build.',
              },
              {
                title: 'Measurement is Everything',
                description:
                  'We tie everything to realized value. Not activity completion, not deliverables, not recommendations—actual business impact measured on your P&L.',
              },
              {
                title: 'Speed Matters',
                description:
                  'Every month of execution delay is value at risk. We focus on quick wins to build momentum, then sustain through longer-term initiatives.',
              },
              {
                title: 'People Make or Break Execution',
                description:
                  'Systems fail when frontline people resist change. We spend significant time understanding frontline concerns and co-designing solutions, not imposing them.',
              },
              {
                title: 'Execution Partnership, Not Consulting',
                description:
                  'We&apos;re not hired to create a report that sits on a shelf. We&apos;re accountable for outcomes. We stay embedded, we remove blockers, we coach leaders.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding-lg bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-h2 text-center mb-12">Why Engage Sinan AI</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Specialized Expertise',
                description:
                  'We focus exclusively on execution infrastructure. This is our only business. We&apos;ve built more transformation governance systems than anyone.',
              },
              {
                title: 'Proven Track Record',
                description:
                  'We&apos;ve realized $890M+ for Fortune 500 clients. That&apos;s not consulting output—that&apos;s bottom-line business impact.',
              },
              {
                title: 'Embedded Approach',
                description:
                  'We embed in your organization, not parachute in. We build capability your teams keep after we leave.',
              },
              {
                title: 'Outcomes Accountability',
                description:
                  'Our compensation is tied to value realization. When you win, we win. We&apos;re motivated by the same metric.',
              },
              {
                title: 'Fortune 500 Experience',
                description:
                  'We&apos;ve worked inside the world&apos;s most complex organizations. We understand your constraints, politics, and execution challenges.',
              },
              {
                title: 'Speed to Impact',
                description:
                  'Average time to first wins: 4 months. We focus on quick momentum to prove concept, then scale.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-500 mb-2">15+</div>
              <p className="text-gray-600 text-lg">Years of Enterprise Leadership</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-500 mb-2">50+</div>
              <p className="text-gray-600 text-lg">Transformation Engagements</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-500 mb-2">$3B+</div>
              <p className="text-gray-600 text-lg">Transformation Value Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-white">
        <div className="container-max text-center">
          <h2 className="text-h2 text-navy-900 mb-6">Ready to Close Your Execution Gap?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If your organization has identified significant value but struggle with execution, let&apos;s talk.
          </p>
          <Button asChild size="lg" variant="primary">
            <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer" className="gap-2">
              Schedule Discovery Call <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
