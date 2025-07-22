import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';

interface FooterProps {
  currentService?: 'financial' | 'resource' | 'strategic';
}

export default function Footer({ currentService }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const services = [
    {
      id: 'financial',
      name: 'Financial Performance Enhancement',
      href: '/services/financial-performance'
    },
    {
      id: 'resource',
      name: 'Resource Allocation Optimization',
      href: '/services/resource-allocation'
    },
    {
      id: 'strategic',
      name: 'Strategic Guidance & Advisory',
      href: '/services/strategic-guidance'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/apex-logo.png"
                alt="APEX Stratum"
                width={200}
                height={80}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through strategic financial excellence. We partner with leaders to unlock growth potential and drive sustainable performance.
            </p>
            <div className="flex space-x-4">
              <Button 
                href="/contact" 
                variant="primary"
                size="md"
                icon="arrow"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => {
                const isActive = currentService === service.id;
                return (
                  <li key={service.id}>
                    <Link 
                      href={service.href}
                      className={`transition-colors hover:text-white ${
                        isActive 
                          ? 'text-white border-b border-blue-400 pb-1'
                          : 'text-gray-300'
                      }`}
                    >
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/#about" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/#industries" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300 mb-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white block">Email:</span>
                  <Link 
                    href="mailto:info@apexstratum.com" 
                    className="hover:text-white transition-colors"
                  >
                    info@apexstratum.com
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white block">Phone:</span>
                  <Link 
                    href="tel:+1-555-123-4567" 
                    className="hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-white block">Office:</span>
                  <address className="not-italic">
                    123 Financial District<br />
                    Suite 456<br />
                    Toronto, ON M5H 2N2
                  </address>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto container-padding py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} APEX Stratum Consulting Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}