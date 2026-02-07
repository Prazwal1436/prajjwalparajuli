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
          <form className="form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Project Type" />
            <textarea placeholder="Project Details" rows={4} />
            <button type="button" className="btn primary">Send Message</button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
