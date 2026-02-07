import SiteShell from '@/components/SiteShell';

const services = [
  {
    title: 'Mobile App Development',
    desc: 'Cross‑platform apps with clean UX, stable releases, and scalable architecture.',
  },
  {
    title: 'Web App Development',
    desc: 'Modern web apps built for performance, security, and growth.',
  },
  {
    title: 'Website Development',
    desc: 'High‑converting websites with SEO‑ready structure and fast load times.',
  },
  {
    title: 'AI Chatbot Development',
    desc: 'Automated support, lead qualification, and knowledge‑base assistants.',
  },
  {
    title: 'Meta Ads Management',
    desc: 'Conversion‑driven ad campaigns with continuous optimization.',
  },
  {
    title: 'Social Media Packages',
    desc: 'Strategic planning, content execution, and growth tracking.',
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <h1>Services</h1>
          <p className="lead">
            End‑to‑end product and growth services for businesses that want reliable delivery and measurable ROI.
          </p>
        </div>
      </section>

      <section className="section pro-section">
        <div className="container">
          <div className="grid pro-grid">
            {services.map((service) => (
              <div key={service.title} className="card pro-card">
                <div className="card-title">{service.title}</div>
                <div className="card-desc">{service.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt pro-section">
        <div className="container">
          <h2>Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-title">01. Strategy</div>
              <div className="process-body">Define goals, scope, and success metrics.</div>
            </div>
            <div className="process-step">
              <div className="process-title">02. Design</div>
              <div className="process-body">Create wireframes, flows, and UI direction.</div>
            </div>
            <div className="process-step">
              <div className="process-title">03. Build</div>
              <div className="process-body">Implement features with clean architecture.</div>
            </div>
            <div className="process-step">
              <div className="process-title">04. Launch</div>
              <div className="process-body">Deploy, test, and monitor performance.</div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
