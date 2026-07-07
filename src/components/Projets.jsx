import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Fashion E-commerce',
    category: 'Comprehensive online store with inventory management and secure payments.',
    tags: ['E-commerce', 'React', 'Node.js'],
    image: '/project_ecommerce_1783440460687.png',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    category: 'Real-time data visualization tool for better decision making.',
    tags: ['Dashboard', 'Vue.js', 'Python'],
    image: '/project_dashboard_1783440487127.png',
  },
  {
    id: 3,
    title: 'Gourmet Restaurant',
    category: 'Elegant showcase website with integrated reservation system.',
    tags: ['Showcase', 'UX/UI', 'SEO'],
    image: '/project_restaurant_1783440513386.png',
  },
  {
    id: 4,
    title: 'Collaborative SaaS Platform',
    category: 'Internal project management tool for distributed teams.',
    tags: ['SaaS', 'React', 'Firebase'],
    image: '/project_webapp_1783440597099.png',
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    category: 'Secure Fintech application for personal finance management.',
    tags: ['Mobile', 'React Native', 'API'],
    image: '/project_mobile_1783440623212.png',
  },
  {
    id: 6,
    title: 'AI Customer Service Chatbot',
    category: 'Intelligent virtual assistant capable of resolving 80% of customer requests.',
    tags: ['AI', 'NLP', 'Chatbot'],
    image: '/project_chatbot_1783440570981.png',
  },
];

export default function Projets() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-project-index');
            setVisibleCards((prev) => new Set([...prev, idx]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.projet-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projets-section" id="projets" ref={sectionRef}>
      <div className="projets-container">
        {/* Header */}
        <div className="projets-header">
          <span className="projets-badge">Our Work</span>
          <h2 className="projets-title">Project Examples</h2>
          <div className="projets-red-bar" />
          <p className="projets-subtitle">
            Discover how we've helped our clients achieve their goals with innovative, custom digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="projets-grid">
          {projects.map((project, i) => (
            <div
              className={`projet-card ${visibleCards.has(String(i)) ? 'projet-card--visible' : ''}`}
              key={project.id}
              data-project-index={i}
              style={{ '--card-delay': `${(i % 3) * 0.15}s` }}
            >
              {/* Image container */}
              <div className="projet-img-wrap">
                <img src={project.image} alt={project.title} className="projet-img" loading="lazy" />
                <div className="projet-overlay">
                  <a href="#contact" className="projet-btn">View Project →</a>
                </div>
              </div>
              
              {/* Content */}
              <div className="projet-content">
                <h3 className="projet-title">{project.title}</h3>
                <p className="projet-category">{project.category}</p>
                <div className="projet-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="projet-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
