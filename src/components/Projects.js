import styles from './Projects.module.css'
import { Github, ExternalLink, Award } from 'lucide-react'

const level3Projects = [
  {
    title: "CivicSaathi",
    tech: "Next.js, Django",
    description: "Municipality management platform to handle public complaints, workers, and civic workflows. Designed backend APIs and integrated frontend with real-time data handling.",
    achievement: "Runner-up, TiE Global Summit X Rajasthan Digifest Hackathon 2025",
    github: "https://github.com/VaibhavSoni24/CivicSaathi",
    live: null,
    id: "civicsaathi"
  },
  {
    title: "Multi-Cloud Platform Management App",
    tech: "Node.js, Django, AWS, GCP, Azure",
    description: "Unified dashboard to authenticate and manage cloud resources across AWS, GCP, and Azure from a single interface.",
    github: "https://github.com/VaibhavSoni24/Hackingly-Dashboard",
    live: null
  },
  {
    title: "Meeting / Call Analyzer",
    tech: "Flask, API Integration",
    description: "Real-time call analysis system that generates MOM and updates Google Calendar automatically.",
    achievement: "Top 7, Sphinx MNIT Jaipur Hackathon",
    github: "https://github.com/VaibhavSoni24/Call",
    live: null,
    id: "callanalyzer"
  }
]

const level2Projects = [
  {
    title: "CareConnect",
    tech: "Flask, AI",
    github: "https://github.com/VaibhavSoni24/CareConnect",
    live: null
  },
  {
    title: "FluentMate",
    tech: "Flask",
    github: "https://github.com/VaibhavSoni24/Innovastra",
    live: null
  },
  {
    title: "DreamWeaver",
    tech: "LLaMA 3 API",
    github: "https://github.com/VaibhavSoni24/DreamWeaver",
    live: "https://dreamweaverofficial.netlify.app/"
  },
  {
    title: "RealtimeChatApp",
    tech: "Socket.io",
    github: "https://github.com/VaibhavSoni24/RealtimeChatApp",
    live: null
  },
  {
    title: "Death Timer",
    tech: "Web App",
    github: "https://github.com/VaibhavSoni24/Death-Timer",
    live: "https://69724189effbf0c1b10f5678--death-timer-vaibhav.netlify.app/"
  }
]

const level1Projects = [
  {
    title: "Crypto Based Subscription Model",
    tech: "Blockchain",
    github: "https://github.com/VaibhavSoni24/CryptoBasedSubscriptionModel",
    live: null
  },
  {
    title: "To-Do App",
    tech: "Web App",
    github: "https://github.com/VaibhavSoni24/To-Do_App",
    live: "https://to-do-app-vaibhavsoni.netlify.app/"
  },
  {
    title: "Notes App",
    tech: "Web App",
    github: "https://github.com/VaibhavSoni24/Notes_App",
    live: "https://notes-app-vaibhavsoni.netlify.app/"
  },
  {
    title: "RGB Bouncing Circle",
    tech: "Canvas Animation",
    github: "https://github.com/VaibhavSoni24/RGB-Bouncing-Rings",
    live: "https://69723deb34d54d16b298d36d--rgb-bouncing-rings.netlify.app/"
  },
  {
    title: "Rotating Hexagon",
    tech: "Canvas Animation",
    github: "https://github.com/VaibhavSoni24/Rotating-Hexagon",
    live: "https://69723e3ec3dd87c99a7e6e43--rotating-hexagon.netlify.app/"
  }
]

function ProjectCard({ project, isDetailed = false }) {
  return (
    <div className={`card ${styles.projectCard}`} id={project.id}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        {project.achievement && (
          <div className={styles.achievement}>
            <Award size={16} />
          </div>
        )}
      </div>
      
      <div className={styles.projectTech}>{project.tech}</div>
      
      {isDetailed && project.description && (
        <p className={styles.projectDescription}>{project.description}</p>
      )}
      
      {project.achievement && (
        <div className={styles.achievementBadge}>
          {project.achievement}
        </div>
      )}
      
      <div className={styles.projectLinks}>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.projectLink}
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
        {project.live ? (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
        ) : (
          <span className={styles.notLive}>Not Live</span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        {/* Level 3 */}
        <div className={styles.projectLevel}>
          <div className={styles.levelHeader}>
            <h3 className={styles.levelTitle}>Level 3 — Core Engineering Projects</h3>
            <p className={styles.levelSubtitle}>Resume-grade</p>
          </div>
          <div className="grid grid-2">
            {level3Projects.map((project, index) => (
              <ProjectCard key={index} project={project} isDetailed={true} />
            ))}
          </div>
        </div>
        
        {/* Level 2 */}
        <div className={styles.projectLevel}>
          <div className={styles.levelHeader}>
            <h3 className={styles.levelTitle}>Level 2 — Advanced Full Stack Projects</h3>
          </div>
          <div className="grid grid-3">
            {level2Projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        
        {/* Level 1 */}
        <div className={styles.projectLevel}>
          <div className={styles.levelHeader}>
            <h3 className={styles.levelTitle}>Level 1 — Foundation Projects</h3>
          </div>
          <div className="grid grid-3">
            {level1Projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
