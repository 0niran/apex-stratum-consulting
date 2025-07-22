'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Shield, Target, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// import { usePathname } from 'next/navigation'; // Available for future use

interface NavigationProps {
  currentService?: 'financial' | 'resource' | 'strategic';
}

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

  const services = [
    {
      id: 'financial',
      href: '/services/financial-performance',
      icon: TrendingUp,
      title: 'Financial Performance',
      description: 'Strategic financial analysis & optimization',
      color: 'blue'
    },
    {
      id: 'resource',
      href: '/services/resource-allocation',
      icon: Target,
      title: 'Resource Allocation',
      description: 'Capital optimization & risk management',
      color: 'green'
    },
    {
      id: 'strategic',
      href: '/services/strategic-guidance',
      icon: Shield,
      title: 'Strategic Guidance',
      description: 'M&A, funding & transformation advisory',
      color: 'purple'
    }
  ];

  const getServiceColorClasses = (color: string, isActive: boolean) => {
    if (isActive) {
      switch (color) {
        case 'blue':
          return 'bg-blue-50 border-2 border-blue-200 text-blue-700';
        case 'green':
          return 'bg-green-50 border-2 border-green-200 text-green-700';
        case 'purple':
          return 'bg-purple-50 border-2 border-purple-200 text-purple-700';
        default:
          return '';
      }
    }
    
    switch (color) {
      case 'blue':
        return 'hover:bg-blue-50 text-gray-900 hover:text-blue-600';
      case 'green':
        return 'hover:bg-green-50 text-gray-900 hover:text-green-600';
      case 'purple':
        return 'hover:bg-purple-50 text-gray-900 hover:text-purple-600';
      default:
        return 'hover:bg-gray-50 text-gray-900';
    }
  };

  const getIconColorClasses = (color: string, isActive: boolean) => {
    if (isActive) {
      switch (color) {
        case 'blue':
          return 'bg-blue-200 text-blue-700';
        case 'green':
          return 'bg-green-200 text-green-700';
        case 'purple':
          return 'bg-purple-200 text-purple-700';
        default:
          return '';
      }
    }
    
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-600 group-hover/item:bg-blue-200';
      case 'green':
        return 'bg-green-100 text-green-600 group-hover/item:bg-green-200';
      case 'purple':
        return 'bg-purple-100 text-purple-600 group-hover/item:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-600 group-hover/item:bg-gray-200';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto container-padding">
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
                <div className="p-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const isActive = currentService === service.id;
                    
                    return (
                      <Link
                        key={service.id}
                        href={service.href}
                        className={`flex items-start p-4 rounded-lg transition-colors group/item ${
                          getServiceColorClasses(service.color, isActive)
                        }`}
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
                              ? service.color === 'blue' ? 'text-blue-700' :
                                service.color === 'green' ? 'text-green-700' :
                                'text-purple-700'
                              : `group-hover/item:${service.color === 'blue' ? 'text-blue-600' :
                                  service.color === 'green' ? 'text-green-600' :
                                  'text-purple-600'}`
                          }`}>
                            {service.title}
                          </h3>
                          <p className={`text-xs mt-1 ${
                            isActive 
                              ? service.color === 'blue' ? 'text-blue-600' :
                                service.color === 'green' ? 'text-green-600' :
                                'text-purple-600'
                              : 'text-gray-500'
                          }`}>
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
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
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200">
            {/* Mobile Services */}
            <div className="space-y-1">
              <div className="text-gray-500 px-3 py-2 text-xs font-semibold uppercase tracking-wider">
                Services
              </div>
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = currentService === service.id;
                
                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive 
                        ? service.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                          service.color === 'green' ? 'bg-green-50 text-green-700' :
                          'bg-purple-50 text-purple-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className={`h-5 w-5 mr-3 ${
                      service.color === 'blue' ? 'text-blue-600' :
                      service.color === 'green' ? 'text-green-600' :
                      'text-purple-600'
                    }`} />
                    {service.title}
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile Other Links */}
            <div className="border-t border-gray-200 pt-4 space-y-1">
              <Link
                href="/#industries"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
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