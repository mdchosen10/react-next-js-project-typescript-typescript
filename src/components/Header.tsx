'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Heart,
  Factory,
  Truck,
  Landmark,
  Zap,
  GitMerge,
  Code2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Industry {
  name: string;
  slug: string;
  icon: React.ElementType;
}

const industries: Industry[] = [
  { name: 'Financial Services', slug: 'financial-services', icon: Building2 },
  { name: 'Healthcare', slug: 'healthcare', icon: Heart },
  { name: 'Manufacturing', slug: 'manufacturing', icon: Factory },
  { name: 'Transportation', slug: 'transportation', icon: Truck },
  { name: 'Government', slug: 'government', icon: Landmark },
  { name: 'Energy', slug: 'energy', icon: Zap },
  { name: 'M&A Integration', slug: 'ma-integration', icon: GitMerge },
  { name: 'Technical Debt', slug: 'technical-debt', icon: Code2 },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [isMobileUseCasesOpen, setIsMobileUseCasesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUseCasesOpen(false);
      }
    };

    if (isUseCasesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUseCasesOpen]);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-background'
      }`}
    >
      <nav className="container-max h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="text-2xl font-bold text-navy-900">
            Go<span className="text-[#B8860B]">Bananas</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#platform"
            className="text-navy-900 hover:text-[#B8860B] transition-colors font-medium cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll('platform');
            }}
          >
            Platform
          </a>
          <a
            href="#how-it-works"
            className="text-navy-900 hover:text-[#B8860B] transition-colors font-medium cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll('how-it-works');
            }}
          >
            How it Works
          </a>

          {/* Use Cases Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-navy-900 hover:text-[#B8860B] transition-colors font-medium cursor-pointer"
              onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
              onMouseEnter={() => setIsUseCasesOpen(true)}
              aria-expanded={isUseCasesOpen}
              aria-haspopup="true"
              aria-label="Use Cases menu"
            >
              Use Cases
              <motion.div
                animate={{ rotate: isUseCasesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isUseCasesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseLeave={() => setIsUseCasesOpen(false)}
                >
                  {/* View All Link */}
                  <Link
                    href="/use-cases"
                    className="block px-4 py-2.5 text-navy-900 hover:bg-gray-50 hover:text-[#B8860B] transition-colors font-medium"
                    onClick={() => setIsUseCasesOpen(false)}
                  >
                    View All Use Cases
                  </Link>

                  {/* Separator */}
                  <div className="border-t border-gray-200 my-2" />

                  {/* Industry Options */}
                  {industries.map((industry) => {
                    const Icon = industry.icon;
                    return (
                      <Link
                        key={industry.slug}
                        href={`/use-cases?industry=${industry.slug}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-navy-900 hover:bg-gray-50 hover:text-[#B8860B] transition-colors"
                        onClick={() => setIsUseCasesOpen(false)}
                      >
                        <Icon size={18} className="text-[#B8860B]" />
                        <span>{industry.name}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#faq"
            className="text-navy-900 hover:text-[#B8860B] transition-colors font-medium cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll('faq');
            }}
          >
            FAQ
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild variant="primary">
            <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer">
              Schedule Discovery
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-navy-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              <a
                href="#platform"
                className="text-navy-900 hover:text-[#B8860B] transition-colors font-medium py-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll('platform');
                  setIsMobileMenuOpen(false);
                }}
              >
                Platform
              </a>
              <a
                href="#how-it-works"
                className="text-navy-900 hover:text-[#B8860B] transition-colors font-medium py-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll('how-it-works');
                  setIsMobileMenuOpen(false);
                }}
              >
                How it Works
              </a>

              {/* Mobile Use Cases Expandable */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-navy-900 hover:text-[#B8860B] transition-colors font-medium py-2"
                  onClick={() => setIsMobileUseCasesOpen(!isMobileUseCasesOpen)}
                  aria-expanded={isMobileUseCasesOpen}
                  aria-label="Toggle Use Cases menu"
                >
                  Use Cases
                  <motion.div
                    animate={{ rotate: isMobileUseCasesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isMobileUseCasesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 flex flex-col gap-1 pt-2">
                        <Link
                          href="/use-cases"
                          className="text-navy-900 hover:text-[#B8860B] transition-colors py-2 font-medium border-b border-gray-200"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileUseCasesOpen(false);
                          }}
                        >
                          View All Use Cases
                        </Link>

                        {industries.map((industry) => {
                          const Icon = industry.icon;
                          return (
                            <Link
                              key={industry.slug}
                              href={`/use-cases?industry=${industry.slug}`}
                              className="flex items-center gap-2 text-navy-900 hover:text-[#B8860B] transition-colors py-2"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileUseCasesOpen(false);
                              }}
                            >
                              <Icon size={16} className="text-[#B8860B]" />
                              <span className="text-sm">{industry.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button asChild variant="primary" className="w-full mt-4">
                <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Discovery
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
