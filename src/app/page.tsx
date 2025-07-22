'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import Button from './components/Button';
import ScrollToTop from './components/ScrollToTop';
import { TrendingUp, Shield, Target, ArrowRight, CheckCircle, Users, DollarSign, Globe, Building2, Zap, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection
        variant="home"
        title="Strategic Excellence for"
        subtitle="Growing Businesses"
        description="APEX Stratum Consulting delivers transformational results through strategic financial guidance, resource optimization, and expert advisory services. We partner with ambitious leaders to unlock growth potential and drive sustainable performance."
        primaryCta={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryCta={{
          text: "Learn More",
          href: "#about"
        }}
        image={{
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
          alt: "Strategic Business Consulting"
        }}
        stats={[
          { value: "50+", label: "Clients" },
          { value: "$100M+", label: "Value Created" },
          { value: "10+", label: "Industries" }
        ]}
        badge="✨ Transforming businesses since 2019"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              Expert Advisory Services
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive consulting solutions designed to accelerate your business growth and optimize performance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                id: 'financial',
                href: '/services/financial-performance',
                icon: TrendingUp,
                title: 'Financial Performance Enhancement',
                description: 'Strategic financial analysis, performance optimization, and sustainable growth strategies',
                color: 'blue'
              },
              {
                id: 'resource',
                href: '/services/resource-allocation',
                icon: Target,
                title: 'Resource Allocation Optimization',
                description: 'Capital efficiency, resource distribution, and operational excellence frameworks',
                color: 'green'
              },
              {
                id: 'strategic',
                href: '/services/strategic-guidance',
                icon: Shield,
                title: 'Strategic Guidance & Advisory',
                description: 'M&A advisory, funding strategy, and transformational change management',
                color: 'purple'
              }
            ].map((service) => {
              const Icon = service.icon;
              
              return (
                <Link 
                  key={service.id}
                  href={service.href}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${
                      service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      service.color === 'green' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <h3 className="heading-4 text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="body-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6">
                    <Button 
                      variant="ghost"
                      size="sm"
                      icon="arrow"
                      className={`p-0 ${service.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                        service.color === 'green' ? 'text-green-600 hover:text-green-700' :
                        'text-purple-600 hover:text-purple-700'}`}
                    >
                      Learn more
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Driving Exceptional Results Since 2019
              </h2>
              
              <p className="body-large text-gray-600 mb-8 leading-relaxed">
                At APEX Stratum Consulting, we combine deep industry expertise with innovative analytical frameworks to deliver measurable business transformation. Our proven methodology has helped over 50 organizations achieve sustainable growth and operational excellence.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Proven Track Record",
                    description: "$100M+ in value created across 50+ successful engagements"
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Experienced executives and industry specialists"
                  },
                  {
                    icon: Award,
                    title: "Tailored Solutions",
                    description: "Customized strategies aligned with your unique business objectives"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="heading-5 text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="body-base text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-10">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop"
                  alt="Professional Team Meeting"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "3.2x", label: "Avg. ROI Increase" },
                  { value: "6mo", label: "Avg. Engagement" }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="heading-4 text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="body-small text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We bring deep sector expertise and proven methodologies across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Technology",
                description: "SaaS, fintech, and emerging tech companies",
                color: "blue"
              },
              {
                icon: DollarSign,
                title: "Financial Services",
                description: "Banks, investment firms, and insurance",
                color: "green"
              },
              {
                icon: Globe,
                title: "Manufacturing",
                description: "Industrial, automotive, and consumer goods",
                color: "purple"
              },
              {
                icon: Zap,
                title: "Healthcare",
                description: "Medical devices, pharma, and healthcare services",
                color: "red"
              }
            ].map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <div key={index} className="text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    industry.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                    industry.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
                    industry.color === 'purple' ? 'bg-purple-100 group-hover:bg-purple-200' :
                    'bg-red-100 group-hover:bg-red-200'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      industry.color === 'blue' ? 'text-blue-600' :
                      industry.color === 'green' ? 'text-green-600' :
                      industry.color === 'purple' ? 'text-purple-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  
                  <h3 className="heading-5 text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="body-small text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Industries */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {[
                "Real Estate", "Energy", "Retail", "Education", "Media", "Transportation", 
                "Agriculture", "Hospitality", "Professional Services", "Non-Profit"
              ].map((industry, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full body-small font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer">
                  {industry}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="body-base text-gray-600 mb-4">Don&apos;t see your industry? We work across all sectors.</p>
              <Button
                href="/contact"
                variant="ghost"
                icon="arrow"
                className="text-blue-600 hover:text-blue-700"
              >
                Contact us to discuss your needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CaseStudies />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="body-large text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join successful organizations that have partnered with APEX Stratum to achieve exceptional growth and operational excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon="arrow"
              className="bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </Button>
            
            <Button
              href="tel:+1-555-123-4567"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              📞 Schedule a Call
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-blue-200">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span className="body-small">Quick 30-min consultation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="body-small">No commitment required</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}