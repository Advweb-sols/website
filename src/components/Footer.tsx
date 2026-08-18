import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--navy-dark)] text-white">
            {/* Main Footer */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src="/logo.png" alt="Advivance" width={260} height={75} className="h-12 md:h-14 w-auto brightness-0 invert" />
                            <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#14b8a6' }}>ADVIVANCE</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premier Export-Oriented BPO partner specializing in efficient and compliant back-office solutions for International Freight Forwarders, NVOCCs, and Logistics Providers.
                        </p>
                        <div className="flex items-center gap-2 text-[var(--primary)]">
                            <Clock className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-white text-sm">24×7 / 365 Support</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'BPO Services', href: '/services' },
                                { label: 'IT Services', href: '/it-services' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Contact', href: '/contact' }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm inline-flex items-center gap-1 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Our Services</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {[
                                { label: 'Documentation & Compliance', href: '/services#documentation' },
                                { label: 'Freight Accounting', href: '/services#accounting' },
                                { label: 'Customer Service', href: '/services#customer-support' },
                                { label: 'Web Development', href: '/it-services#solutions' },
                                { label: 'IT Maintenance', href: '/it-services' }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-400 hover:text-[var(--primary)] transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contact Us</h3>
                        <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    36, 14th Main Rd, E- block extension, Sahakar Nagar, Hebbal, Bengaluru - 560092
                                </span>
                            </li>
                            <li>
                                <a href="tel:+919777779932" className="flex items-center gap-3 text-gray-400 hover:text-[var(--primary)] transition-colors">
                                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)] flex-shrink-0" />
                                    <span className="text-sm">+91 9777 79932</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@advivance.com" className="flex items-center gap-3 text-gray-400 hover:text-[var(--primary)] transition-colors">
                                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)] flex-shrink-0" />
                                    <span className="text-sm">info@advivance.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-4 md:py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <p className="text-gray-500 text-xs md:text-sm">
                            © {new Date().getFullYear()} Advivance Solutions Private Limited. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                            Based in India • Serving globally
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
