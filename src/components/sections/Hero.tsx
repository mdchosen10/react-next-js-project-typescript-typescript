'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// Updated: 2026-01-26 - Professional 3D with tsParticles
export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
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
      {/* Professional 3D Network Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: {
              color: { value: 'transparent' }
            },
            particles: {
              color: { value: '#14b8a6' },
              links: {
                color: '#14b8a6',
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
                triangles: {
                  enable: true,
                  opacity: 0.1
                }
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'out' }
              },
              number: {
                value: 80,
                density: { enable: true, area: 800 }
              },
              opacity: {
                value: { min: 0.3, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1
                }
              },
              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.1
                }
              },
              shadow: {
                enable: true,
                color: '#14b8a6',
                blur: 5
              }
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
                resize: true
              },
              modes: {
                grab: {
                  distance: 200,
                  links: { opacity: 0.8 }
                }
              }
            }
          }}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800/20 via-navy-900/60 to-slate-900/80 z-5" />

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-navy-900/30 z-5" />

      {/* Additional accent elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10 z-5"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"
             style={{ animationDelay: '1s' }} />
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
