'use client';

import { useState } from 'react';
import SiteShell from '@/components/SiteShell';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/prajjwalparajuli' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prajjwalparajuli20010215' },
  { label: 'X', href: 'https://x.com/Prazzwal8' },
  { label: 'GitHub', href: 'https://github.com/Prazwal1436' },
  { label: 'Instagram', href: 'https://www.instagram.com/prazwal_parazuli/' },
  { label: 'Website', href: 'https://prajjwalparajuli.com.np/' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      setStatus('sending');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.projectType || 'Project inquiry',
          message: formData.message,
          source: 'contact-page',
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('sent');
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Contact page error:', error);
      setStatus('error');
    }
  };

  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p className="lead">
            Share your project details and I’ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section alt pro-section">
        <div className="container contact-grid">
          <div>
            <h2>Let’s Build Together</h2>
            <p>
              I work with global clients on product development, marketing strategy, and AI automation.
            </p>
            <div className="contact-info">
              <div>Email: contact@prajjwalparajuli.com.np</div>
              <div>Location: Kathmandu, Nepal (Remote)</div>
            </div>
            <div className="social-grid">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="projectType"
              placeholder="Project Type"
              value={formData.projectType}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Project Details"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="form-success">Thanks! I’ll reply soon.</p>}
            {status === 'error' && <p className="form-error">Please complete all fields and try again.</p>}
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
