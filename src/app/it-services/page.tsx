import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
    Code, Wrench, Hotel, Building2, GraduationCap, Database,
    CheckCircle, ArrowRight, Bug, Gauge, ShieldCheck, Headphones,
    Search, Lightbulb, Rocket, Gift, Smartphone, Globe, Palette,
    Server, Lock, Zap
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'IT Services - Advivance | Web Development & Technology Solutions',
    description: 'Modern IT and digital solutions. From custom web applications to ongoing maintenance, we deliver quality technology services with agile methodology.',
};

export default function ITServicesPage() {
    const industries = [
        {
            number: '01',
            icon: Hotel,
            title: 'Hotel & Hospitality Websites',
            description: 'We design and develop high-conversion hotel and hospitality websites focused on bookings, branding, and user experience.',
            features: ['Online booking integration', 'Mobile-friendly design', 'Gallery & room management', 'SEO-ready structure'],
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
        },
        {
            number: '02',
            icon: Building2,
            title: 'Company & Corporate Websites',
            description: 'Professional corporate websites that represent your brand, services, and credibility in the digital world.',
            features: ['Modern UI/UX design', 'Services & portfolio pages', 'CMS-based management', 'Performance optimized'],
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
        },
        {
            number: '03',
            icon: GraduationCap,
            title: 'School & College Websites',
            description: 'Educational websites tailored for schools and colleges with easy content management and communication tools.',
            features: ['Admission & course pages', 'Notice systems', 'Faculty sections', 'Responsive design'],
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80'
        },
        {
            number: '04',
            icon: Database,
            title: 'ERP & Custom Software',
            description: 'Custom ERP and business software designed to automate operations and improve efficiency.',
            features: ['Role-based dashboards', 'Process automation', 'Secure data handling', 'Scalable architecture'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
        }
    ];

    const processSteps = [
        { icon: Search, title: 'Discovery', description: 'Understanding your requirements and business goals through detailed consultation.' },
        { icon: Lightbulb, title: 'Design', description: 'Creating wireframes and designs that align with your brand identity.' },
        { icon: Code, title: 'Development', description: 'Agile development with regular updates, reviews, and iterations.' },
        { icon: Bug, title: 'Testing', description: 'Comprehensive QA, security testing, and performance optimization.' },
        { icon: Rocket, title: 'Deployment', description: 'Smooth deployment with documentation and training.' },
        { icon: Headphones, title: 'Support', description: 'Ongoing maintenance, updates, and 24/7 support options.' }
    ];

    const techStack = [
        { name: 'React', icon: Code },
        { name: 'Next.js', icon: Zap },
        { name: 'Node.js', icon: Server },
        { name: 'TypeScript', icon: Lock },
        { name: 'Responsive', icon: Smartphone },
        { name: 'SEO Ready', icon: Globe }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-[var(--navy-dark)] overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-64 md:w-96 h-64 md:h-96 bg-[var(--accent)] rounded-full blur-3xl opacity-15"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--primary)] rounded-full blur-3xl opacity-10"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <div className="badge badge-white mb-6">
                                <Code className="w-4 h-4" />
                                IT & Technology Services
                            </div>

                            <h1 className="text-hero font-bold text-white mb-6">
                                Technology Solutions That{' '}
                                <span className="text-gradient">Scale With You</span>
                            </h1>

                            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
                                We support global companies with modern IT and digital solutions. From custom web
                                applications to ongoing maintenance, we deliver quality technology services with agile methodology.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link href="/contact" className="btn-primary gap-2">
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <a href="#solutions" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--navy-dark)] gap-2">
                                    View All Services
                                </a>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <div key={tech.name} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                                        <tech.icon className="w-4 h-4 text-[var(--primary)]" />
                                        <span className="text-white text-sm">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="relative aspect-square max-w-[450px] mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                                    alt="Web Development"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl animate-float">
                                    <div className="text-2xl font-bold text-[var(--primary)]">1 Year</div>
                                    <div className="text-gray-600 text-sm">Free Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-12">
                        <div className="badge badge-primary mx-auto mb-4">
                            Core Services
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
                            What We Offer
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Web Development */}
                        <div className="feature-card card-hover">
                            <div className="icon-box bg-[var(--primary)]/10 mb-6">
                                <Code className="w-6 h-6 md:w-7 md:h-7 text-[var(--primary)]" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-dark)] mb-4">
                                Web & Application Development
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Modern, scalable applications using the latest technologies to power your business growth.
                                We build responsive, fast, and secure web applications tailored to your needs.
                            </p>
                            <ul className="grid grid-cols-2 gap-3">
                                {['React / Next.js', 'API Integration', 'Secure Architecture', 'Responsive Design', 'Performance Optimization', 'SEO Ready'].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Maintenance */}
                        <div className="feature-card card-hover">
                            <div className="icon-box bg-[var(--accent)]/10 mb-6">
                                <Wrench className="w-6 h-6 md:w-7 md:h-7 text-[var(--accent)]" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-dark)] mb-4">
                                Maintenance & Support
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Ongoing support and system optimization to keep your applications running smoothly and securely.
                                We provide comprehensive maintenance packages for peace of mind.
                            </p>
                            <ul className="grid grid-cols-2 gap-3">
                                {['Bug Fixes & Patches', 'Performance Tuning', 'System Monitoring', 'Security Updates', '24/7 Support Options', 'Regular Backups'].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Solutions */}
            <section id="solutions" className="section-padding gradient-subtle">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="badge badge-primary mx-auto mb-4">
                            Industry-Specific Solutions
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
                            Tailored Digital Solutions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From stunning websites to powerful enterprise software, we craft solutions tailored to your industry and business needs.
                        </p>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        {industries.map((industry, index) => (
                            <div key={industry.title} className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                        <Image
                                            src={industry.image}
                                            alt={industry.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl md:text-4xl font-bold text-[var(--primary)]/20">{industry.number}</span>
                                        <div className="icon-box bg-[var(--primary)]/10">
                                            <industry.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary)]" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-dark)] mb-3">{industry.title}</h3>
                                    <p className="text-gray-600 mb-6">{industry.description}</p>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {industry.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Support Offer */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy)] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-full mb-6">
                                    <Gift className="w-5 h-5" />
                                    <span className="font-medium">Special Offer</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                                    Build With Us & Get Free Support for 1 Year
                                </h2>
                                <p className="text-gray-300 text-base md:text-lg mb-8">
                                    When you choose us to build your website or software, we don&apos;t just deliver and leave.
                                    We stand by our work with complimentary support and maintenance for a full year — at no additional cost.
                                </p>
                                <Link href="/contact" className="btn-primary gap-2">
                                    Start Your Project Today
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="glass p-5 md:p-6 rounded-xl">
                                    <Bug className="w-7 h-7 md:w-8 md:h-8 text-[var(--primary)] mb-4" />
                                    <h4 className="font-semibold text-white mb-2">Free Bug Fixes</h4>
                                    <p className="text-gray-400 text-sm">Any issues or small changes at no extra charge.</p>
                                </div>
                                <div className="glass p-5 md:p-6 rounded-xl">
                                    <Gauge className="w-7 h-7 md:w-8 md:h-8 text-[var(--primary)] mb-4" />
                                    <h4 className="font-semibold text-white mb-2">Free Maintenance</h4>
                                    <p className="text-gray-400 text-sm">Keep your system running smoothly all year.</p>
                                </div>
                                <div className="glass p-5 md:p-6 rounded-xl">
                                    <Headphones className="w-7 h-7 md:w-8 md:h-8 text-[var(--primary)] mb-4" />
                                    <h4 className="font-semibold text-white mb-2">Priority Support</h4>
                                    <p className="text-gray-400 text-sm">Quick responses when you need assistance.</p>
                                </div>
                                <div className="glass p-5 md:p-6 rounded-xl">
                                    <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-[var(--primary)] mb-4" />
                                    <h4 className="font-semibold text-white mb-2">No Hidden Costs</h4>
                                    <p className="text-gray-400 text-sm">Transparent pricing, what we quote is what you pay.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="section-padding gradient-subtle">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="badge badge-primary mx-auto mb-4">
                            Our Approach
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
                            Our Development Process
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A proven methodology that ensures quality, transparency, and timely delivery.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {processSteps.map((step, index) => (
                            <div key={step.title} className="bg-white p-6 rounded-xl shadow-sm card-hover text-center">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                                    <step.icon className="w-7 h-7 text-[var(--primary)]" />
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--primary)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding gradient-primary relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom text-center relative z-10">
                    <h2 className="text-section font-bold text-white mb-6">
                        Ready to Build Your Software?
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10">
                        Let&apos;s discuss your idea and turn it into a powerful digital solution that drives your business forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-[var(--primary-dark)] px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2 shadow-lg">
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/about" className="border-2 border-white/30 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-[var(--primary-dark)] transition-all inline-flex items-center justify-center gap-2">
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
