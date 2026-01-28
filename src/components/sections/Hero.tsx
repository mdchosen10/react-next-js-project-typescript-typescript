'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Heart, Truck, Factory } from 'lucide-react';
import { useRef, useEffect } from 'react';

// Updated: 2026-01-26
export default function Hero() {
  const ref = useRef(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    let vantaEffect: any = null;

    // Only load Vanta on faster connections
    const connection = (navigator as any).connection;
    const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');

    if (isSlowConnection) return;

    const initVanta = async () => {
      if (typeof window !== 'undefined' && vantaRef.current) {
        const { default: VANTA } = await import('vanta/dist/vanta.net.min.js');
        const THREE = await import('three');

        vantaEffect = VANTA({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x14b8a6, // teal-500
          backgroundColor: 0x0f172a, // navy-900
          points: 5.0,
          maxDistance: 40.0,
          spacing: 30.0,
        });
      }
    };

    // Delay loading until hero is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        initVanta();
        observer.disconnect();
      }
    });

    if (vantaRef.current) {
      observer.observe(vantaRef.current);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Vanta.js 3D Neural Network Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0 opacity-60"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-navy-900/50 z-5" />

      {/* Additional accent elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10 z-5"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold-400 rounded-full mix-blend-screen filter blur-3xl opacity-30" />
      </motion.div>

      {/* Content */}
      <div className="container-max relative z-10 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badges */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-2 justify-center">
            <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/40 rounded-full text-teal-200 text-sm font-medium">
              Railway SOC2 Hosted
            </span>
            <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/40 rounded-full text-teal-200 text-sm font-medium">
              MIT Founded
            </span>
            <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/40 rounded-full text-teal-200 text-sm font-medium">
              Enterprise Ready
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-h1 text-white mb-6">
            Transform Legacy Systems
          </motion.h1>

          {/* Subheadline */}
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Into{' '}
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              Modern Powerhouses
            </span>
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Enterprise AI-powered development platform delivering systematic legacy modernization, codebase extension, and technical debt reduction across any technology stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button asChild size="lg" variant="primary">
              <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer" className="gap-2">
                Request Demo <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            variants={itemVariants}
            className="text-center text-gray-300 text-sm mb-12"
          >
            Built on Claude Code SDK • 15+ Years Founder Experience • Any Tech Stack
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-teal-500 rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-teal-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
