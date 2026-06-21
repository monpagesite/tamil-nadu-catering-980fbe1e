import React from 'react';
import { Sparkles, Briefcase, Users, Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Sparkles,
  Briefcase,
  Users,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">
            {siteContent.services.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mt-3 font-heading">
            {siteContent.services.headline}
          </h2>
          <p className="text-xl text-text-muted mt-4 leading-relaxed">
            {siteContent.services.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-300"
                data-reveal
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(194,65,12,0.1), rgba(220,38,38,0.1))',
                  }}
                >
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-text mb-3 font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1 group"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
