import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Determine active section
      const sections = ['hero', 'services', 'menus', 'process', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border text-text shadow-sm'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Flame className="w-7 h-7 text-primary" />
              <span className="text-2xl font-bold font-heading">
                {siteContent.header.logo}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {siteContent.header.nav.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-base font-medium transition-colors duration-200 hover:text-primary relative ${
                      isActive ? 'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary' : ''
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden md:block bg-accent text-white font-semibold px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-200 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              {siteContent.header.cta}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-current"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-text/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {siteContent.header.nav.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-bold text-white hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-accent text-white font-semibold px-8 py-3 rounded-full text-xl mt-4"
            >
              {siteContent.header.cta}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
