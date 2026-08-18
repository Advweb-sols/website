'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin, Phone, Mail, Clock, Send, Headphones,
    Settings, Zap, Users, Globe, CheckCircle, MessageCircle, Building2
} from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        jobTitle: '',
        email: '',
        interest: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you within 24 hours.');
        setIsSubmitting(false);
        setFormData({ name: '', company: '', jobTitle: '', email: '', interest: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const whyChooseUs = [
        { icon: Headphones, title: 'Dedicated Support', description: '24/7 expert assistance for all your logistics and IT needs.' },
        { icon: Settings, title: 'Custom Solutions', description: 'Tailored services matching your specific business requirements.' },
        { icon: Zap, title: 'Fast Response', description: 'Quick turnaround time - we respond within 24 hours guaranteed.' },
        { icon: Users, title: 'Expert Team', description: 'Experienced professionals in logistics and technology operations.' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="py-12 md:py-16 gradient-subtle">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="badge badge-primary mx-auto mb-4">
                            <MessageCircle className="w-4 h-4" />
                            Get In Touch
                        </div>
                        <h1 className="text-hero font-bold text-[var(--navy-dark)] mb-4 md:mb-6">
                            Contact Us
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-600">
                            Ready to transform your operations? Get in touch with our team to discuss your needs.
                            We&apos;re here to help you succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Details */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-[var(--gray-50)] p-6 md:p-8 rounded-2xl">
                                <h2 className="text-xl md:text-2xl font-bold text-[var(--navy-dark)] mb-6">Send Us a Message</h2>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none bg-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none bg-white"
                                                placeholder="Company Inc."
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                                Job Title
                                            </label>
                                            <input
                                                type="text"
                                                id="jobTitle"
                                                name="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none bg-white"
                                                placeholder="Operations Manager"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none bg-white"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Area of Interest
                                        </label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none bg-white"
                                        >
                                            <option value="">Choose an option...</option>
                                            <option value="documentation">Documentation & Compliance</option>
                                            <option value="accounting">Freight Accounting</option>
                                            <option value="customer-service">Customer Service & Track/Trace</option>
                                            <option value="web-development">Web & App Development</option>
                                            <option value="it-support">IT Maintenance & Support</option>
                                            <option value="erp">ERP & Custom Software</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none resize-none bg-white"
                                            placeholder="Tell us about your requirements, challenges, and how we can help..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full sm:w-auto gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Start a Dialogue
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold text-[var(--navy-dark)] mb-4">Get in Touch</h2>

                            {/* Registered Office */}
                            <div className="feature-card">
                                <h3 className="font-semibold text-[var(--navy-dark)] mb-3 flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-[var(--primary)]" />
                                    Registered Office
                                </h3>
                                <address className="text-gray-600 not-italic text-sm leading-relaxed">
                                    <strong>Advivance Solutions Private Limited</strong><br />
                                    140, 7th Main Road, 1st Cross<br />
                                    Gandhinagar, Yelahanka<br />
                                    Bangalore North, Karnataka – 560064<br />
                                    India
                                </address>
                            </div>

                            {/* Branch Office */}
                            <div className="feature-card">
                                <h3 className="font-semibold text-[var(--navy-dark)] mb-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[var(--accent)]" />
                                    Branch Office
                                </h3>
                                <address className="text-gray-600 not-italic text-sm leading-relaxed">
                                    <strong>Advivance Solutions Private Limited</strong><br />
                                    503, 5th Floor, Srinath Square<br />
                                    Kutchery Chowk, Harmu Road<br />
                                    Ranchi, Jharkhand – 834001<br />
                                    India
                                </address>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <a href="mailto:info@advivance.com" className="flex items-center gap-4 p-4 bg-[var(--gray-50)] rounded-xl hover:bg-[var(--primary)]/5 transition-colors group">
                                    <div className="icon-box bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors">
                                        <Mail className="w-5 h-5 text-[var(--primary)]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Primary Email</div>
                                        <span className="text-[var(--navy-dark)] font-medium">info@advivance.com</span>
                                    </div>
                                </a>

                                <a href="mailto:operations@advivance.com" className="flex items-center gap-4 p-4 bg-[var(--gray-50)] rounded-xl hover:bg-[var(--primary)]/5 transition-colors group">
                                    <div className="icon-box bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors">
                                        <Mail className="w-5 h-5 text-[var(--primary)]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Operations Email</div>
                                        <span className="text-[var(--navy-dark)] font-medium">operations@advivance.com</span>
                                    </div>
                                </a>

                                <a href="tel:+919777779932" className="flex items-center gap-4 p-4 bg-[var(--gray-50)] rounded-xl hover:bg-[var(--accent)]/5 transition-colors group">
                                    <div className="icon-box bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-colors">
                                        <Phone className="w-5 h-5 text-[var(--accent)]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Phone Numbers</div>
                                        <span className="text-[var(--navy-dark)] font-medium">+91 9777 79932</span>
                                        <span className="mx-2 text-gray-300">|</span>
                                        <span className="text-[var(--navy-dark)] font-medium">+91 83677 38981</span>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 bg-[var(--navy)]/5 rounded-xl">
                                    <div className="icon-box bg-[var(--navy)]/10">
                                        <Clock className="w-5 h-5 text-[var(--navy)]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Operations</div>
                                        <span className="text-[var(--navy-dark)] font-medium">24×7 / 365 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding gradient-subtle">
                <div className="container-custom">
                    <div className="text-center mb-10 md:mb-12">
                        <div className="badge badge-primary mx-auto mb-4">
                            Why Advivance
                        </div>
                        <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Partner with a team that prioritizes your success with dedicated support and expertise.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {whyChooseUs.map((item) => (
                            <div key={item.title} className="bg-white p-5 md:p-6 rounded-xl shadow-sm text-center card-hover">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-[var(--primary)]" />
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-[var(--navy-dark)] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="section-padding gradient-hero relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--primary)]/20 rounded-full mb-6">
                                <Globe className="w-8 h-8 text-[var(--primary)]" />
                            </div>
                            <h2 className="text-section font-bold text-white mb-4">
                                Global Presence
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 mb-6">
                                Based in India, serving clients across North America, Europe, and Asia with 24/7 operational support.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {['North America', 'Europe', 'Asia'].map((region) => (
                                    <div key={region} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                        <span className="text-white text-sm">{region}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="relative aspect-[4/3] max-w-[400px] mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80"
                                    alt="Global Map"
                                    fill
                                    className="object-cover rounded-2xl opacity-80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links CTA */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--navy-dark)]">
                            Explore Our Services
                        </h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/services" className="btn-primary gap-2">
                            BPO Services
                        </Link>
                        <Link href="/it-services" className="btn-secondary gap-2">
                            IT Services
                        </Link>
                        <Link href="/about" className="btn-secondary gap-2">
                            About Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
