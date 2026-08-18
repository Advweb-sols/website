import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
    Target, Users, Globe, Award, ArrowRight, CheckCircle,
    Shield, Clock, Briefcase, TrendingUp, Building2, MapPin
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us - Advivance | Strategic BPO & ITES Partner',
    description: 'Learn about Advivance Solutions - your premier Export-Oriented BPO partner specializing in compliant back-office solutions for the global logistics industry.',
};

export default function AboutPage() {
    const values = [
        { icon: Target, title: 'Precision', description: 'Zero tolerance for errors in every process we handle. Accuracy is our standard.' },
        { icon: Users, title: 'Partnership', description: 'We work as an extension of your team, fully aligned with your goals.' },
        { icon: Globe, title: 'Global Reach', description: 'Serving clients across North America, Europe, and Asia 24/7.' },
        { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest quality service consistently.' }
    ];

    const stats = [
        { value: '24/7', label: 'Operations', icon: Clock },
        { value: '99.9%', label: 'Accuracy Rate', icon: Target },
        { value: '365', label: 'Days Support', icon: Shield },
        { value: '3', label: 'Continents Served', icon: Globe }
    ];

    const team = [
        {
            title: 'Logistics Experts',
            description: 'Our BPO associates are trained specifically in freight forwarding and NVOCC operations.',
            icon: Briefcase
        },
        {
            title: 'Tech Specialists',
            description: 'Skilled developers with expertise in modern web technologies and enterprise solutions.',
            icon: TrendingUp
        },
        {
            title: 'Support Team',
            description: 'Dedicated customer support professionals available around the clock.',
            icon: Users
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-[var(--navy-dark)] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-[var(--primary)] rounded-full blur-3xl opacity-15"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--accent)] rounded-full blur-3xl opacity-10"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                            <div className="badge badge-white mb-6">
                                <Building2 className="w-4 h-4" />
                                About Advivance
                            </div>
                            <h1 className="text-hero font-bold text-white mb-6">
                                Your Strategic Partner in{' '}
                                <span className="text-gradient">Global Logistics Excellence</span>
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
                                We are a premier Export-Oriented BPO partner specializing in highly efficient and
                                compliant back-office solutions for International Freight Forwarders, NVOCCs, and
                                Logistics Providers worldwide. With offices in Bangalore and Ranchi, we serve clients
                                across three continents with round-the-clock operational support.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="btn-primary gap-2">
                                    Get In Touch
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/services" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--navy-dark)] gap-2">
                                    Our Services
                                </Link>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="relative aspect-[4/3] max-w-[500px] mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Advivance Team"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
                                    <div className="text-2xl font-bold text-[var(--primary)]">Since</div>
                                    <div className="text-gray-600">2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 md:py-16 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <stat.icon className="w-5 h-5 text-[var(--primary)]" />
                                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--navy-dark)]">{stat.value}</span>
                                </div>
                                <div className="text-gray-500 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                    alt="Our Mission"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-[var(--primary)] rounded-2xl -z-10"></div>
                            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-[var(--accent)] rounded-xl -z-10 opacity-50"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="badge badge-primary mb-6">
                                Our Mission
                            </div>
                            <h2 className="text-section font-bold text-[var(--navy-dark)] mb-6">
                                Transforming Back-Office Operations
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                In a domain where efficiency dictates profitability and regulatory compliance is paramount,
                                we transform transactional bottlenecks into scalable, secure, and fully compliant operational streams.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our logistics-trained expertise helps accelerate documentation, minimize demurrage,
                                and maximize your core focus: <strong className="text-[var(--navy-dark)]">moving cargo efficiently and compliantly</strong>.
                            </p>

                            <div className="space-y-3">
                                {['Compliance-driven operations with zero-error tolerance', 'Logistics-trained professionals with industry expertise', 'Scalable solutions that grow with your business', '24/7/365 support across all time zones'].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="section-padding gradient-subtle">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="badge badge-primary mx-auto mb-4">
                            What We Do
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
                            Comprehensive Business Solutions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer a complete range of services to support your logistics and technology needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="feature-card card-hover">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="icon-box bg-[var(--primary)]/10">
                                    <Briefcase className="w-6 h-6 text-[var(--primary)]" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[var(--navy-dark)]">BPO & Back-Office Services</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Comprehensive documentation, freight accounting, and customer service solutions for the logistics industry.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Bill of Lading Management', 'Customs Documentation', 'Freight Accounting', 'Customer Track & Trace'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/services" className="text-[var(--primary)] font-medium hover:text-[var(--primary-dark)] inline-flex items-center gap-1">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="feature-card card-hover">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="icon-box bg-[var(--accent)]/10">
                                    <TrendingUp className="w-6 h-6 text-[var(--accent)]" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[var(--navy-dark)]">IT & Technology Services</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Modern web development and custom software solutions to power your digital transformation.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {['Web & App Development', 'Custom ERP Solutions', 'System Maintenance', '24/7 Technical Support'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/it-services" className="text-[var(--accent)] font-medium hover:text-[var(--primary-dark)] inline-flex items-center gap-1">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="badge badge-primary mx-auto mb-4">
                            Our Values
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)]">
                            What Drives Us
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="bg-[var(--gray-50)] p-6 md:p-8 rounded-xl text-center card-hover">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                    <value.icon className="w-6 h-6 md:w-7 md:h-7 text-[var(--primary)]" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-[var(--navy-dark)] mb-2 md:mb-3">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding gradient-subtle">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="badge badge-primary mx-auto mb-4">
                            Our Team
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
                            Experts You Can Trust
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our team brings together industry expertise, technical skills, and a commitment to excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {team.map((member) => (
                            <div key={member.title} className="bg-white p-6 md:p-8 rounded-xl shadow-sm text-center card-hover">
                                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <member.icon className="w-7 h-7 text-[var(--primary)]" />
                                </div>
                                <h3 className="text-lg font-bold text-[var(--navy-dark)] mb-2">{member.title}</h3>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-12">
                        <div className="badge badge-primary mx-auto mb-4">
                            <MapPin className="w-4 h-4" />
                            Our Locations
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)]">
                            Where We Operate
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="feature-card text-center">
                            <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-6 h-6 text-[var(--primary)]" />
                            </div>
                            <h3 className="font-bold text-[var(--navy-dark)] mb-2">Bangalore Office</h3>
                            <p className="text-gray-600 text-sm">
                                140, 7th Main Road, 1st Cross<br />
                                Gandhinagar, Yelahanka<br />
                                Bangalore North, Karnataka – 560064
                            </p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-6 h-6 text-[var(--accent)]" />
                            </div>
                            <h3 className="font-bold text-[var(--navy-dark)] mb-2">Ranchi Office</h3>
                            <p className="text-gray-600 text-sm">
                                503, 5th Floor, Srinath Square<br />
                                Kutchery Chowk, Harmu Road<br />
                                Ranchi, Jharkhand – 834001
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding gradient-primary relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom text-center relative z-10">
                    <h2 className="text-section font-bold text-white mb-4 md:mb-6">
                        Ready to Partner With Us?
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10">
                        Let&apos;s discuss how we can transform your logistics operations and help you achieve your business goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-[var(--primary-dark)] px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2 shadow-lg">
                            Get in Touch
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/services" className="border-2 border-white/30 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-[var(--primary-dark)] transition-all inline-flex items-center justify-center gap-2">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
