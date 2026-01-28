import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-50">
      <div className="container-max py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Go<span className="text-yellow-500">Bananas</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI-powered legacy system modernization. Multiply your development team's impact with enterprise-grade automation.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#platform" className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer">
                  Platform
                </a>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-yellow-500 transition-colors cursor-pointer">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to 10x Your Migration Velocity?
              </h3>
              <p className="text-yellow-50">
                Schedule your risk-free pilot to see how GoBananas transforms legacy systems in hours, not months.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap">
              Schedule Pilot <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; 2026 Go Bananas AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
