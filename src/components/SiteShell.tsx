'use client';

import Link from 'next/link';
import { Facebook, Linkedin, X, Github, Instagram, Globe, Mail } from 'lucide-react';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/prajjwalparajuli', icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prajjwalparajuli20010215', icon: Linkedin },
  { label: 'X', href: 'https://x.com/Prazzwal8', icon: X },
  { label: 'GitHub', href: 'https://github.com/Prazwal1436', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/prazwal_parazuli/', icon: Instagram },
  { label: 'Website', href: 'https://prajjwalparajuli.com.np/', icon: Globe },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-row">
          <div className="brand">
            <div className="brand-text">
              <div className="brand-name">Prajjwal Parajuli</div>
              <div className="brand-role">Software Developer</div>
            </div>
          </div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link className="cta" href="/contact">Book a Call</Link>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer pro-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="brand-text">
                <div className="brand-name">Prajjwal Parajuli</div>
                <div className="brand-role">Software Developer</div>
              </div>
            </div>
            <p className="footer-note">
              Software Development • Digital Marketing • Meta Ads • AI Chatbots
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>contact@prajjwalparajuli.com.np</span>
              </div>
              <div className="footer-contact-item">
                <Globe size={16} />
                <a href="https://prajjwalparajuli.com.np/" target="_blank" rel="noopener noreferrer">
                  prajjwalparajuli.com.np
                </a>
              </div>
            </div>
          </div>

          <div className="footer-form">
            <h3>Start a Project</h3>
            <p>Send a quick message and I’ll respond within 24 hours.</p>
            <form className="footer-contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Project Details" rows={4} />
              <button type="button" className="btn primary">Send Message</button>
            </form>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <div>© 2026 Prajjwal Parajuli. All rights reserved.</div>
          <div>Remote • Nepal • Global Clients</div>
        </div>
      </footer>
    </div>
  );
}
