import SiteShell from '@/components/SiteShell';

const skillGroups = [
  {
    title: 'Development',
    items: ['React', 'Next.js', 'Node.js', 'TypeScript', 'API Design', 'Database Modeling'],
  },
  {
    title: 'Mobile',
    items: ['Cross‑Platform Apps', 'App Store Releases', 'Push Notifications'],
  },
  {
    title: 'Marketing',
    items: ['Meta Ads', 'SEO', 'Analytics', 'Conversion Optimization'],
  },
  {
    title: 'AI',
    items: ['Prompt Engineering', 'Chatbot Design', 'Automation Workflows'],
  },
];

export default function SkillsPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <h1>Skills</h1>
          <p className="lead">
            A balanced blend of engineering, marketing, and AI skills to build and grow products.
          </p>
        </div>
      </section>

      <section className="section pro-section">
        <div className="container">
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-card">
                <div className="skill-title">{group.title}</div>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <div key={item} className="skill-item">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
