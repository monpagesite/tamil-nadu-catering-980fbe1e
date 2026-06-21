import React from 'react';
import { Star } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function HeroSection() {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF8F5 0%, #F5F1EB 100%)',
      }}
    >
      {/* Decorative Background Element */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{
          background: '#C2410C',
          filter: 'blur(100px)',
          transform: 'translate(30%, -20%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center" data-reveal>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] text-sm font-medium px-4 py-1.5 rounded-full self-start">
              {siteContent.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-text mt-6 leading-[1.1] tracking-tight">
              {siteContent.hero.headline.main}
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {siteContent.hero.headline.accent}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-text-muted mt-6 max-w-xl leading-relaxed">
              {siteContent.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-200 hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)]"
              >
                {siteContent.hero.primaryCta}
              </button>
              <button
                onClick={() => scrollToSection('#menus')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                {siteContent.hero.secondaryCta}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-3 mt-8 text-sm text-text-muted">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <span>{siteContent.hero.trustText}</span>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative" data-reveal style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={siteContent.hero.heroImage}
                alt={siteContent.hero.heroImageAlt}
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(28,25,23,0.4), transparent 60%)',
                }}
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-white rounded-full px-4 py-2 shadow-lg">
              <span className="text-primary text-sm font-bold">{siteContent.hero.badge2}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
