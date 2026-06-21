import React from 'react';
import { MessageSquare, ChefHat, Truck } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  MessageSquare,
  ChefHat,
  Truck,
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">
            {siteContent.process.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mt-3 font-heading">
            {siteContent.process.headline}
          </h2>
          <p className="text-xl text-text-muted mt-4 leading-relaxed">
            {siteContent.process.subtext}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {siteContent.process.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={step.number}
                className="relative"
                data-reveal
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line (desktop only) */}
                {index < siteContent.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+4rem)] right-[-50%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{
                      background: 'linear-gradient(135deg, rgba(194,65,12,0.1), rgba(220,38,38,0.1))',
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-text mb-3 text-center font-heading">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-text-muted leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center" data-reveal style={{ animationDelay: '0.3s' }}>
          <p className="text-lg text-text-muted mb-6">
            Ready to get started? Let's plan your perfect event together.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth',
                });
              }
            }}
            className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200 hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)]"
          >
            Get Started Today →
          </button>
        </div>
      </div>
    </section>
  );
}
