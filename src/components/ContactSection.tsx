import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      guests: '',
      date: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
          <p className="text-sm uppercase tracking-wide text-primary font-semibold">
            {siteContent.contact.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mt-3 font-heading">
            {siteContent.contact.headline}
          </h2>
          <p className="text-xl text-text-muted mt-4 leading-relaxed">
            {siteContent.contact.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-border" data-reveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={siteContent.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={siteContent.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder={siteContent.contact.form.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
                <input
                  type="text"
                  name="eventType"
                  placeholder={siteContent.contact.form.eventTypePlaceholder}
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="guests"
                  placeholder={siteContent.contact.form.guestsPlaceholder}
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
                <input
                  type="date"
                  name="date"
                  placeholder={siteContent.contact.form.datePlaceholder}
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
              </div>

              <textarea
                name="message"
                placeholder={siteContent.contact.form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full bg-accent text-white py-4 rounded-full font-semibold hover:scale-[1.02] transition-all duration-200 hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)]"
              >
                {siteContent.contact.form.submitButton}
              </button>

              {submitted && (
                <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-xl text-center">
                  {siteContent.contact.form.successMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6" data-reveal style={{ animationDelay: '0.2s' }}>
            {/* WhatsApp Quick Contact */}
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 shadow-lg">
              <MessageSquare className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2 font-heading">
                {siteContent.contact.whatsapp.text}
              </h3>
              <p className="mb-4 opacity-95">
                {siteContent.contact.whatsapp.description}
              </p>
              <a
                href={`https://wa.me/${siteContent.contact.whatsapp.number.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-border space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text mb-1">Phone</p>
                  <a href={`tel:${siteContent.contact.info.phone}`} className="text-text-muted hover:text-primary">
                    {siteContent.contact.info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text mb-1">Email</p>
                  <a href={`mailto:${siteContent.contact.info.email}`} className="text-text-muted hover:text-primary">
                    {siteContent.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text mb-1">{siteContent.contact.info.serviceArea}</p>
                  <p className="text-text-muted">
                    {siteContent.contact.info.serviceAreaText}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-text-muted">
                  {siteContent.contact.info.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
