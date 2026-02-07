import SiteShell from '@/components/SiteShell';

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <h1>About Prajjwal Parajuli</h1>
          <p className="lead">
            Software Developer, Digital Marketing Expert, Meta Ads Specialist, and AI Skilled Person focused on
            building products and growth systems with measurable results.
          </p>
        </div>
      </section>

      <section className="section pro-section">
        <div className="container section-grid">
          <div>
            <h2>Experience</h2>
            <p>
              5 years in software development, 3 years in digital marketing, and 2 years running Meta Ads campaigns.
              I also have strong knowledge of AI prompting and automation for business workflows.
            </p>
          </div>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-title">Founder & Owner</div>
              <div className="info-body">aoneskills.com.np</div>
            </div>
            <div className="info-card">
              <div className="info-title">Solo Build</div>
              <div className="info-body">saathi.io (end‑to‑end development)</div>
            </div>
            <div className="info-card">
              <div className="info-title">Core Focus</div>
              <div className="info-body">Product Development + Growth Marketing</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt pro-section">
        <div className="container">
          <h2>How I Work</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-title">Discovery</div>
              <div className="timeline-body">
                We clarify goals, target audience, and success metrics to define the right build.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">Design & Architecture</div>
              <div className="timeline-body">
                I map the UI, flows, and technical plan for stable delivery.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">Build & Launch</div>
              <div className="timeline-body">
                Development, QA, and deployment with transparent updates.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-title">Growth</div>
              <div className="timeline-body">
                Meta Ads, SEO, and analytics optimization to scale results.
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
