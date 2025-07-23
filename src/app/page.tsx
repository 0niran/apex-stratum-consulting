'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import Button from './components/Button';
import ScrollToTop from './components/ScrollToTop';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { SERVICES } from '@/constants/services';
import { MAIN_INDUSTRIES, ADDITIONAL_INDUSTRIES } from '@/constants/industries';
import { COMPANY_INFO, CONTENT } from '@/constants/company';
import { getIndustryColorClasses } from '@/utils/colorUtils';
import type { HeroStat } from '@/types';

export default function Home() {
  const heroStats: HeroStat[] = [
    { value: COMPANY_INFO.stats.clients, label: "Clients" },
    { value: COMPANY_INFO.stats.valueCreated, label: "Value Created" },
    { value: COMPANY_INFO.stats.industries, label: "Industries" }
  ];

  const aboutFeatures = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: `${COMPANY_INFO.stats.valueCreated} in value created across ${COMPANY_INFO.stats.projects} successful engagements`
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
  ];

  const additionalStats = [
    { value: COMPANY_INFO.stats.clientSatisfaction, label: "Client Satisfaction" },
    { value: COMPANY_INFO.stats.avgROI, label: "Avg. ROI Increase" },
    { value: COMPANY_INFO.stats.avgEngagement, label: "Avg. Engagement" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20">
      <Navigation />
      
      <HeroSection
        variant="home"
        title="Strategic Excellence for"
        subtitle="Growing Businesses"
        description={CONTENT.hero.description}
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
        stats={heroStats}
        badge={CONTENT.hero.badge}
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              Expert Advisory Services
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive consulting solutions designed to accelerate your business growth and optimize performance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              
              return (
                <Link 
                  key={service.id}
                  href={service.href}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${
                      service.color === 'emerald' ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 text-apex-emerald' :
                      service.color === 'green' ? 'bg-gradient-to-br from-green-100 to-green-200 text-apex-green' :
                      'bg-gradient-to-br from-teal-100 to-teal-200 text-apex-teal'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <h3 className="heading-4 text-gray-900 mb-3 group-hover:text-apex-green transition-colors">
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
                      className={`p-0 ${service.color === 'emerald' ? 'text-apex-emerald hover:text-apex-emerald-dark' :
                        service.color === 'green' ? 'text-apex-green hover:text-apex-green-dark' :
                        'text-apex-teal hover:text-apex-teal-dark'}`}
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
      <section id="about" className="py-20 bg-gradient-to-r from-gray-50 via-green-50/40 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                {CONTENT.about.title}
              </h2>
              
              <p className="body-large text-gray-600 mb-8 leading-relaxed">
                {CONTENT.about.description}
              </p>
              
              <div className="space-y-6">
                {aboutFeatures.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-apex-green" />
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {additionalStats.map((stat, index) => (
                  <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="heading-4 text-apex-green mb-1">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We bring deep sector expertise and proven methodologies across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAIN_INDUSTRIES.map((industry, index) => {
              const Icon = industry.icon;
              const colorClasses = getIndustryColorClasses(industry.color);
              
              return (
                <div key={index} className="text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${colorClasses.container}`}>
                    <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                  </div>
                  
                  <h3 className="heading-5 text-gray-900 mb-3 group-hover:text-apex-green transition-colors">
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
              {ADDITIONAL_INDUSTRIES.map((industry, index) => (
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
                className="text-apex-green hover:text-apex-green-dark"
              >
                Contact us to discuss your needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CaseStudies />
      
      {/* CTA Section */}
      <section className="bg-apex-gradient py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-white mb-6">
            {CONTENT.cta.title}
          </h2>
          
          <p className="body-large text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {CONTENT.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon="arrow"
              className="bg-white text-apex-green hover:bg-gray-50 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </Button>
            
            <Button
              href={`tel:${COMPANY_INFO.contact.phone}`}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-apex-green"
            >
              📞 Schedule a Call
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-green-200">
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