import Link from 'next/link';
import Image from 'next/image';
import {
  FileText, Calculator, Headphones, ArrowRight, CheckCircle,
  Globe, Shield, Clock, Users, Zap, BarChart3, Ship, Plane, Truck
} from 'lucide-react';

export default function Home() {
  const focusAreas = [
    {
      icon: FileText,
      title: 'Documentation & Compliance',
      description: 'Ensuring zero tolerance for errors in B/L processing, manifest filing, and customs pre-alerts. Our meticulous approach guarantees seamless port entry and clearance.',
      features: ['Bill of Lading Management', 'Customs Pre-Alerts', 'AMS/ISF Filing', 'Booking Confirmations'],
      color: 'primary'
    },
    {
      icon: Calculator,
      title: 'Freight Accounting Support',
      description: 'Accurate and expedited handling of D&D management, rate auditing, and vendor bill processing. Maintain robust financial integrity and healthy cash flow.',
      features: ['Vendor Bill Processing', 'D&D Management', 'Rate Auditing', 'TMS/ERP Data Entry'],
      color: 'accent'
    },
    {
      icon: Headphones,
      title: 'Customer Interaction',
      description: '24/7/365 Track & Trace and Customer Inquiry Management handled by logistics-trained associates. Professional support via voice, email, and live chat.',
      features: ['24/7 Track & Trace', 'Multi-Channel Support', 'Status Updates', 'Problem Escalation'],
      color: 'navy'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Accuracy Rate', icon: BarChart3 },
    { value: '24/7', label: 'Operations', icon: Clock },
    { value: '3', label: 'Continents Served', icon: Globe },
    { value: '100%', label: 'Compliance', icon: Shield }
  ];

  const modes = [
    { icon: Ship, label: 'Ocean Freight' },
    { icon: Plane, label: 'Air Freight' },
    { icon: Truck, label: 'Road Transport' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center gradient-hero overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-[var(--primary)] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-[var(--accent)] rounded-full blur-3xl opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary-dark)] rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container-custom relative z-10 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6 md:space-y-8">
              <div className="badge badge-white">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></span>
                <span>Export-Oriented BPO Partner</span>
              </div>

              <h1 className="text-hero font-bold leading-tight">
                Strategic BPO & ITES for a{' '}
                <span className="text-gradient">Compliant Global Supply Chain</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                We are the premier Export-Oriented BPO partner specializing in highly efficient and compliant
                back-office solutions for International Freight Forwarders, NVOCCs, and Logistics Providers.
              </p>

              {/* Transport Modes */}
              <div className="flex flex-wrap gap-4 py-2">
                {modes.map((mode) => (
                  <div key={mode.label} className="flex items-center gap-2 text-gray-300">
                    <mode.icon className="w-5 h-5 text-[var(--primary)]" />
                    <span className="text-sm">{mode.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary gap-2">
                  Schedule a Strategic Compliance Review
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--navy-dark)]">
                  Explore Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 md:gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-sm">Global Coverage</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-sm">100% Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-sm">Trained Associates</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Global Logistics and Supply Chain"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 md:p-5 rounded-xl shadow-xl animate-float">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--primary)]">99.9%</div>
                  <div className="text-gray-600 text-sm">Accuracy Rate</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 md:p-5 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-2xl md:text-3xl font-bold text-[var(--navy)]">24/7</div>
                  <div className="text-gray-600 text-sm">Operations</div>
                </div>
                <div className="absolute top-1/2 -right-8 bg-white p-4 md:p-5 rounded-xl shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-2xl md:text-3xl font-bold text-[var(--accent)]">365</div>
                  <div className="text-gray-600 text-sm">Days Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100 py-8 md:py-12">
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

      {/* Operational Imperative Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Operational Efficiency"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-[var(--primary)] rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-[var(--accent)] rounded-xl -z-10 opacity-50"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="badge badge-primary">
                <Zap className="w-4 h-4" />
                The Operational Imperative
              </div>

              <h2 className="text-section font-bold text-[var(--navy-dark)]">
                Transform Your Transactional Bottlenecks
              </h2>

              <p className="text-gray-600 leading-relaxed">
                In a domain where efficiency dictates profitability, and regulatory compliance is paramount,
                reliance on outdated manual processes is a liability. Our targeted BPO/ITES services transform
                your transactional bottlenecks—from documentation to finance—into scalable, secure, and fully
                compliant operational streams.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Leverage our logistics-trained expertise from India to accelerate documentation, minimize
                demurrage, and maximize your core focus: <strong className="text-[var(--navy-dark)]">moving cargo</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--navy-dark)]">Trained Experts</div>
                    <div className="text-sm text-gray-500">Logistics-specialized team</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--navy-dark)]">Compliance First</div>
                    <div className="text-sm text-gray-500">100% regulatory adherence</div>
                  </div>
                </div>
              </div>

              <Link href="/services" className="btn-primary inline-flex gap-2 mt-4">
                Learn More About Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="section-padding gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <div className="badge badge-primary mx-auto mb-4">
              Our Expertise
            </div>
            <h2 className="text-section font-bold text-[var(--navy-dark)] mb-4">
              Our Strategic Focus Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive back-office solutions tailored for the global logistics industry.
              We handle the complexity so you can focus on growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {focusAreas.map((area) => (
              <div key={area.title} className="feature-card card-hover">
                <div className={`icon-box mb-6 ${area.color === 'primary' ? 'bg-[var(--primary)]/10' :
                    area.color === 'accent' ? 'bg-[var(--accent)]/10' : 'bg-[var(--navy)]/10'
                  }`}>
                  <area.icon className={`w-6 h-6 md:w-7 md:h-7 ${area.color === 'primary' ? 'text-[var(--primary)]' :
                      area.color === 'accent' ? 'text-[var(--accent)]' : 'text-[var(--navy)]'
                    }`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--navy-dark)] mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${area.color === 'primary' ? 'text-[var(--primary)]' :
                          area.color === 'accent' ? 'text-[var(--accent)]' : 'text-[var(--navy)]'
                        }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Link href="/services" className="btn-secondary inline-flex gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="badge badge-primary">
                <Globe className="w-4 h-4" />
                Global Expertise
              </div>

              <h2 className="text-section font-bold text-[var(--navy-dark)]">
                Why Partner With Advivance?
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Based in India, we serve clients across North America, Europe, and Asia with 24/7 operational
                support. Our logistics-trained professionals understand the intricacies of global trade compliance.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[var(--gray-50)] rounded-xl">
                  <div className="icon-box bg-[var(--primary)]/10">
                    <Clock className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy-dark)] mb-1">24/7/365 Operations</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock support across all time zones for uninterrupted operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[var(--gray-50)] rounded-xl">
                  <div className="icon-box bg-[var(--accent)]/10">
                    <Shield className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy-dark)] mb-1">Compliance Guaranteed</h4>
                    <p className="text-gray-600 text-sm">Zero-error tolerance in regulatory documentation and filing processes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[var(--gray-50)] rounded-xl">
                  <div className="icon-box bg-[var(--navy)]/10">
                    <Users className="w-5 h-5 text-[var(--navy)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy-dark)] mb-1">Logistics-Trained Team</h4>
                    <p className="text-gray-600 text-sm">Associates with deep understanding of freight forwarding and NVOCC operations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-[450px] mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Our Team"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--navy)] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Teaser */}
      <section className="section-padding bg-[var(--navy-dark)] text-white">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-12">
            <div className="badge badge-white mx-auto mb-4">
              Technology Solutions
            </div>
            <h2 className="text-section font-bold mb-4">
              We Also Build <span className="text-gradient">Digital Solutions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From stunning websites to powerful enterprise software, we craft technology solutions that scale with your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {['Hotel Websites', 'Corporate Sites', 'School Portals', 'Custom ERP'].map((item) => (
              <div key={item} className="glass p-6 rounded-xl text-center">
                <div className="text-lg font-semibold">{item}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/it-services" className="btn-primary gap-2">
              Explore IT Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-section font-bold text-white mb-6">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10">
            Let&apos;s discuss how our strategic BPO services can transform your logistics operations
            and drive compliance excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[var(--primary-dark)] px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2 shadow-lg">
              Start a Conversation
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
