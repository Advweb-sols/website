'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, FileText, Settings, Headphones, Code, Wrench, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bpoServices = [
    { name: 'Documentation & Compliance', href: '/services#documentation', icon: FileText },
    { name: 'Operations & Coordination', href: '/services#accounting', icon: Settings },
    { name: 'Customer & Partner Support', href: '/services#customer-support', icon: Headphones },
  ];

  const itServices = [
    { name: 'Web & Application Development', href: '/it-services#solutions', icon: Code },
    { name: 'Maintenance & Support', href: '/it-services', icon: Wrench },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-sm'
      } border-b border-gray-100`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="Advivance" width={280} height={80} className="h-14 md:h-16 w-auto" priority />
            <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#14b8a6' }}>ADVIVANCE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-sm xl:text-base">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-sm xl:text-base">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[550px] transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-5 grid grid-cols-2 gap-5">
                  {/* BPO Services */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Back-Office & BPO Support
                    </h3>
                    <div className="space-y-2">
                      {bpoServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors flex-shrink-0">
                            <service.icon className="w-4 h-4 text-[var(--primary)]" />
                          </div>
                          <span className="text-gray-700 group-hover:text-[var(--primary)] font-medium text-sm">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* IT Services */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      IT & Technology Services
                    </h3>
                    <div className="space-y-2">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors flex-shrink-0">
                            <service.icon className="w-4 h-4 text-[var(--accent)]" />
                          </div>
                          <span className="text-gray-700 group-hover:text-[var(--accent)] font-medium text-sm">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="col-span-2 pt-3 border-t border-gray-100">
                    <Link
                      href="/services"
                      className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium text-sm"
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[var(--primary)] font-medium transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[var(--primary)] -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 border-t border-gray-100 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              BPO Services
            </Link>
            <Link
              href="/it-services"
              className="block px-4 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              IT Services
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 px-4">
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
