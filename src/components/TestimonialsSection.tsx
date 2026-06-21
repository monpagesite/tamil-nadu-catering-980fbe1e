import React from 'react';
import { Star, Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">
            {siteContent.testimonials.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mt-3 font-heading">
            {siteContent.testimonials.headline}
          </h2>
          <p className="text-xl text-text-muted mt-4 leading-relaxed">
            {siteContent.testimonials.subtext}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-reveal
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-lg text-text leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-text">{testimonial.author}</p>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div
          className="mt-16 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-center text-white"
          data-reveal
          style={{ animationDelay: '0.4s' }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Join 200+ Happy Clients
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-95">
              From intimate gatherings to grand celebrations, we bring authentic Tamil cuisine and warm hospitality to every event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm opacity-90">Events Catered</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm opacity-90">Authentic Recipes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
