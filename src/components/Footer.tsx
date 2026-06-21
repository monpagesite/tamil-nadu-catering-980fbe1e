import React from 'react';
import { Flame, Facebook, Instagram, Phone } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Facebook,
  Instagram,
  Phone,
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-text text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-heading">
                {siteContent.header.logo}
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              {siteContent.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {siteContent.footer.social.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    aria-label={social.platform}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">
              {siteContent.footer.services.title}
            </h3>
            <ul className="space-y-2">
              {siteContent.footer.services.links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">
              {siteContent.footer.company.title}
            </h3>
            <ul className="space-y-2">
              {siteContent.footer.company.links.map((link) => {
                const href = link === 'Sample Menus' ? '#menus' : 
                             link === 'Testimonials' ? '#testimonials' :
                             link === 'Contact' ? '#contact' : '#hero';
                return (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(href)}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Service Area */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-2 font-heading">
            {siteContent.footer.serviceArea.title}
          </h3>
          <p className="text-white/70">
            {siteContent.footer.serviceArea.text}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
