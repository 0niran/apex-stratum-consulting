'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { SERVICES } from '@/constants/services';
import { getServiceColorClasses, getIconColorClasses } from '@/utils/colorUtils';
import type { NavigationProps, Service } from '@/types';

export default function Navigation({ currentService }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const pathname = usePathname(); // Currently unused but available for future active states

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const renderServiceDropdown = (services: Service[], isMobile = false) => (
    <div className={isMobile ? "space-y-2" : "p-2"}>
      {services.map((service) => {
        const Icon = service.icon;
        const isActive = currentService === service.id;
        
        return (
          <Link
            key={service.id}
            href={service.href}
            className={`flex items-start p-4 rounded-lg transition-colors group/item ${
              getServiceColorClasses(service.color, isActive)
            } ${isMobile ? 'w-full' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex-shrink-0">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                getIconColorClasses(service.color, isActive)
              }`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className={`text-sm font-semibold ${
                isActive 
                  ? service.color === 'emerald' ? 'text-apex-emerald-dark' :
                    service.color === 'green' ? 'text-apex-green-dark' :
                    'text-apex-teal-dark'
                  : `group-hover/item:${service.color === 'emerald' ? 'text-apex-emerald' :
                      service.color === 'green' ? 'text-apex-green' :
                      'text-apex-teal'}`
              }`}>
                {service.title}
              </h3>
              <p className={`text-xs mt-1 ${
                isActive 
                  ? service.color === 'emerald' ? 'text-apex-emerald' :
                    service.color === 'green' ? 'text-apex-green' :
                    'text-apex-teal'
                  : 'text-gray-500'
              }`}>
                {service.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Image
                src="/apex-logo.png"
                alt="APEX Stratum"
                width={240}
                height={96}
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium flex items-center rounded-lg hover:bg-gray-50 transition-all duration-200">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              {/* Dropdown menu */}
              <div className="absolute left-0 mt-1 w-80 rounded-xl shadow-xl bg-white ring-1 ring-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                {renderServiceDropdown(SERVICES)}
              </div>
            </div>

            {/* Regular Navigation Links */}
            <Link 
              href="/#industries" 
              className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Industries
            </Link>
            <Link 
              href="/#about" 
              className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pt-4 pb-3 space-y-3">
            {/* Mobile Services */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Services
              </div>
              {renderServiceDropdown(SERVICES, true)}
            </div>

            {/* Mobile Navigation Links */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Link
                href="/#industries"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}