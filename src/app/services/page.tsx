import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
    FileText, Calculator, Headphones, CheckCircle, ArrowRight, Shield, Clock, Target,
    FileCheck, Ship, AlertTriangle, Database, Phone, Mail, Globe, Zap
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'BPO Services - Advivance | Back-Office & Documentation Solutions',
    description: 'Precision Documentation & Financial Control for a Global Supply Chain. Compliance-driven back-office support for international logistics operations.',
};

export default function ServicesPage() {
    const documentationFeatures = [
        {
            icon: FileCheck,
            title: 'Bill of Lading (B/L) Management',
            description: 'Accurate drafting and timely submission of Master and House B/Ls across all major carriers, minimizing costly amendments and delays.'
        },
        {
            icon: Ship,
            title: 'Customs Pre-Alerts & Manifest Filing',
            description: 'Expedited preparation of essential regulatory documentation, including AMS and ISF filings, to ensure seamless port entry and clearance.'
        },
        {
            icon: Database,
            title: 'Booking and Confirmation Handling',
            description: 'End-to-end management of carrier booking requests, confirmation retrieval, and timely submission of Shipping Instructions (SIs).'
        }
    ];

    const accountingFeatures = [
        {
            icon: FileText,
            title: 'Vendor Bill Processing',
            description: 'Matching carrier/vendor invoices (ocean freight, drayage, rail) against operational records, identifying discrepancies, and ensuring timely payment cycles.'
        },
        {
            icon: AlertTriangle,
            title: 'Demurrage & Detention (D&D) Management',
            description: 'Proactive monitoring of free-time deadlines and systematic dispute resolution to mitigate unnecessary penalty costs.'
        },
        {
            icon: Calculator,
            title: 'Rate Auditing & Data Entry',
            description: 'Accurate input and verification of negotiated contract rates and spot quotes into your core Transportation Management System (TMS) or ERP platform.'
        }
    ];

    const customerFeatures = [
        {
            icon: Globe,
            title: '24/7 Track and Trace',
            description: 'Continuous, proactive monitoring of shipment milestones and real-time status updates across all global modes (Ocean, Air, Road).'
        },
        {
            icon: Headphones,
            title: 'Customer Inquiry Resolution',
            description: 'Dedicated support handling rate requests, status queries, and problem escalation via professional voice, email, and live chat channels.'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-[var(--navy-dark)] overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-[var(--primary)] rounded-full blur-3xl opacity-15"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--accent)] rounded-full blur-3xl opacity-10"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl">
                        <div className="badge badge-white mb-6">
                            <FileText className="w-4 h-4" />
                            Back-Office & BPO Services
                        </div>

                        <h1 className="text-hero font-bold text-white mb-6">
                            Precision Documentation & Financial Control for a{' '}
                            <span className="text-gradient">Global Supply Chain</span>
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                            We deliver compliance-driven back-office support for international logistics operations.
                            From documentation and trade compliance to freight accounting and customer track & trace,
                            our logistics-trained BPO associates act as an extension of your operations team—ensuring
                            accuracy, regulatory adherence, and operational continuity across every shipment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-primary gap-2">
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="#documentation" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--navy-dark)] gap-2">
                                View All Services
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/10">
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-[var(--primary)]">99.9%</div>
                                <div className="text-gray-400 text-sm md:text-base">Accuracy</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-[var(--accent)]">24/7</div>
                                <div className="text-gray-400 text-sm md:text-base">Operations</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                                <div className="text-gray-400 text-sm md:text-base">Compliance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documentation & Trade Compliance */}
            <section id="documentation" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="icon-box bg-[var(--primary)]/10">
                                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary)]" />
                                </div>
                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Service I</span>
                            </div>

                            <h2 className="text-section font-bold text-[var(--navy-dark)] mb-6">
                                Documentation & Trade Compliance Services
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                The complex regulatory landscape requires precision. Our BPO associates act as an extension
                                of your operations team, ensuring every shipment is supported by timely, accurate paperwork.
                            </p>

                            <div className="space-y-4">
                                {documentationFeatures.map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-4 p-4 bg-[var(--gray-50)] rounded-xl">
                                        <div className="icon-box bg-[var(--primary)]/10 flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-[var(--primary)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[var(--navy-dark)] mb-1">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                                    alt="Documentation Services"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-[var(--primary)] rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Freight Accounting */}
            <section id="accounting" className="section-padding gradient-subtle">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                                    alt="Freight Accounting"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-[var(--accent)] rounded-2xl -z-10"></div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="icon-box bg-[var(--accent)]/10">
                                    <Calculator className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)]" />
                                </div>
                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Service II</span>
                            </div>

                            <h2 className="text-section font-bold text-[var(--navy-dark)] mb-6">
                                Freight Accounting & Financial Back-Office
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Maintain robust financial integrity and a healthy cash flow by outsourcing your most
                                granular financial processes to our expert team. We ensure accuracy and timeliness in every transaction.
                            </p>

                            <div className="space-y-4">
                                {accountingFeatures.map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                        <div className="icon-box bg-[var(--accent)]/10 flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-[var(--accent)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[var(--navy-dark)] mb-1">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Service */}
            <section id="customer-support" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="icon-box bg-[var(--navy)]/10">
                                    <Headphones className="w-5 h-5 md:w-6 md:h-6 text-[var(--navy)]" />
                                </div>
                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Service III</span>
                            </div>

                            <h2 className="text-section font-bold text-[var(--navy-dark)] mb-6">
                                Customer Service & Track/Trace
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Provide critical shipment visibility and timely communication to your clients without
                                stretching your in-house resources. Our dedicated team ensures seamless customer experience.
                            </p>

                            <div className="space-y-4 mb-8">
                                {customerFeatures.map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-4 p-4 bg-[var(--gray-50)] rounded-xl">
                                        <div className="icon-box bg-[var(--navy)]/10 flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-[var(--navy)]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[var(--navy-dark)] mb-1">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div className="grid grid-cols-3 gap-3 md:gap-4">
                                <div className="text-center p-3 md:p-4 bg-[var(--primary)]/5 rounded-xl">
                                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary)] mx-auto mb-2" />
                                    <div className="text-xs md:text-sm font-semibold text-[var(--navy-dark)]">24/7/365</div>
                                    <div className="text-xs text-gray-500">Support</div>
                                </div>
                                <div className="text-center p-3 md:p-4 bg-[var(--primary)]/5 rounded-xl">
                                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary)] mx-auto mb-2" />
                                    <div className="text-xs md:text-sm font-semibold text-[var(--navy-dark)]">Trained</div>
                                    <div className="text-xs text-gray-500">Associates</div>
                                </div>
                                <div className="text-center p-3 md:p-4 bg-[var(--primary)]/5 rounded-xl">
                                    <Target className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary)] mx-auto mb-2" />
                                    <div className="text-xs md:text-sm font-semibold text-[var(--navy-dark)]">Multi-Channel</div>
                                    <div className="text-xs text-gray-500">Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                                    alt="Customer Service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 bg-[var(--navy)] rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-[var(--gray-50)]">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="badge badge-primary mx-auto mb-4">
                            How We Work
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
                            Our Seamless Integration Process
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We make onboarding simple and efficient, ensuring minimal disruption to your existing operations.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Discovery', desc: 'We analyze your current processes and identify optimization opportunities.' },
                            { step: '02', title: 'Integration', desc: 'Seamless connection with your existing systems and workflows.' },
                            { step: '03', title: 'Training', desc: 'Our team gets trained on your specific requirements and protocols.' },
                            { step: '04', title: 'Execution', desc: 'Continuous operations with regular reporting and quality assurance.' }
                        ].map((item) => (
                            <div key={item.step} className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="text-4xl font-bold text-[var(--primary)]/20 mb-4">{item.step}</div>
                                <h3 className="text-lg font-semibold text-[var(--navy-dark)] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section-padding gradient-primary relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-section font-bold text-white mb-4">
                                Ready to Streamline Your Operations?
                            </h2>
                            <p className="text-white/90 text-lg mb-6">
                                Partner with us to transform your back-office into a compliant, efficient operation.
                                Get in touch for a free consultation.
                            </p>
                            <Link href="/contact" className="bg-white text-[var(--primary-dark)] px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2 shadow-lg">
                                Schedule a Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-4 md:p-6 rounded-xl text-center text-white">
                                <Phone className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                                <div className="font-semibold">Call Us</div>
                                <div className="text-sm opacity-80">+91 9777 79932</div>
                            </div>
                            <div className="glass p-4 md:p-6 rounded-xl text-center text-white">
                                <Mail className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                                <div className="font-semibold">Email Us</div>
                                <div className="text-sm opacity-80">info@advivance.com</div>
                            </div>
                            <div className="glass p-4 md:p-6 rounded-xl text-center text-white">
                                <Clock className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                                <div className="font-semibold">24/7</div>
                                <div className="text-sm opacity-80">Operations</div>
                            </div>
                            <div className="glass p-4 md:p-6 rounded-xl text-center text-white">
                                <Zap className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                                <div className="font-semibold">Fast Response</div>
                                <div className="text-sm opacity-80">Within 24 hours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
