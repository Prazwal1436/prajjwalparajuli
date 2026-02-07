import SiteShell from '@/components/SiteShell';

const projects = [
  {
    name: 'AOne Skills',
    role: 'Founder & Owner',
    summary: 'Built a training platform and corporate presence for skills development.',
    link: 'https://aoneskills.com.np',
  },
  {
    name: 'Saathi.io',
    role: 'Solo Developer',
    summary: 'End‑to‑end development of the platform independently.',
    link: 'https://saathi.io',
  },
];

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container">
          <h1>Projects</h1>
          <p className="lead">
            Selected projects that showcase product delivery, marketing impact, and independent execution.
          </p>
        </div>
      </section>

      <section className="section pro-section">
        <div className="container">
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.name} className="project-card">
                <div className="project-title">{project.name}</div>
                <div className="project-role">{project.role}</div>
                <div className="project-desc">{project.summary}</div>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
