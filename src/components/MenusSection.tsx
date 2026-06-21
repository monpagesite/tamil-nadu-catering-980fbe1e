import React from 'react';
import { Users } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function MenusSection() {
  return (
    <section id="menus" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">
            {siteContent.menus.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mt-3 font-heading">
            {siteContent.menus.headline}
          </h2>
          <p className="text-xl text-text-muted mt-4 leading-relaxed">
            {siteContent.menus.subtext}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.menus.items.map((menu, index) => (
            <div
              key={menu.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-reveal
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Serves Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-text">{menu.serves}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-text mb-2 font-heading">
                  {menu.name}
                </h3>
                <p className="text-text-muted mb-4 leading-relaxed">
                  {menu.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {menu.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-text-muted">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Download Link */}
                <button className="text-primary font-medium hover:underline inline-flex items-center gap-1 group">
                  {siteContent.menus.downloadText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Menu CTA */}
        <div
          className="mt-16 text-center bg-surface rounded-3xl p-8 md:p-12 border border-border"
          data-reveal
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 font-heading">
            Need a Custom Menu?
          </h3>
          <p className="text-lg text-text-muted mb-6 max-w-2xl mx-auto">
            We're happy to work with you to create a personalized menu that fits your event, dietary requirements, and budget.
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
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 hover:shadow-lg"
          >
            Request Custom Menu →
          </button>
        </div>
      </div>
    </section>
  );
}
