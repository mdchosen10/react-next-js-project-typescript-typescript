'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';

export default function EnterpriseHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      {/* Background pattern - Different geometric pattern from Sinan AI */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(184,134,11,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="container-max relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            SOC2 Type II Certified • MIT Founded • Enterprise Ready
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Legacy Systems
            <br />
            <span className="text-teal-400">Into Modern Powerhouses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Enterprise AI-powered development platform delivering systematic legacy modernization,
            <br className="hidden md:block" />
            codebase extension, and technical debt reduction across any technology stack.
          </p>

          {/* Key value props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <div className="flex items-center justify-center w-10 h-10 bg-teal-500/20 rounded-lg">
                <Zap className="w-5 h-5 text-teal-400" />
              </div>
              <span className="font-medium">10x Faster Migration Speed</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <div className="flex items-center justify-center w-10 h-10 bg-gold-500/20 rounded-lg">
                <Shield className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-medium">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <div className="flex items-center justify-center w-10 h-10 bg-navy-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-navy-300" />
              </div>
              <span className="font-medium">75% Cost Reduction</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <Link href="#lead-capture">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              <Link href="#lead-capture">
                Talk to Sales
              </Link>
            </Button>
          </div>

          {/* Social proof stat */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-lg">
              Trusted by Fortune 500 • <span className="text-white font-semibold">15+</span> Years Enterprise Experience • Any Tech Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}