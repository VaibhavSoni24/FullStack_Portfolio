import styles from './Projects.module.css'
import { Github, ExternalLink, Award } from 'lucide-react'

const level3Projects = [
  {
    id: 'civicsaathi',
    title: 'CivicSaathi - AI-powered Municipal Complaint Management System',
    tech: 'Django REST Framework, Next.js, Google Gemini API',
    description:
      'A full-stack system for filing, routing, and resolving civic complaints with AI verification, duplicate detection, and SLA-driven escalation workflows.',
    achievement: "Runner-up, TiE Global Summit X Rajasthan Digifest Hackathon 2025",
    github: "https://github.com/VaibhavSoni24/CivicSaathi",
    live: null
  },
  {
    id: 'callanalyzer',
    title: 'Real-Time Call / Meeting Analyzer',
    tech: 'Flask, Google APIs, Automation',
    description:
      'A web application for meeting transcription and AI-driven insights with MOM generation, automated email notifications, and Google Calendar updates.',
    achievement: "Top 7, Sphinx MNIT Jaipur Hackathon",
    github: "https://github.com/VaibhavSoni24/Call",
    live: null
  },
  {
    id: 'codeconcept',
    title: 'CodeConcept',
    tech: 'FastAPI, Django REST Framework, React + Vite, Monaco Editor',
    description:
      'An AI-assisted learning platform that analyzes conceptual coding mistakes using runtime execution, static analysis, and AST visualization.',
    github: 'https://github.com/VaibhavSoni24/CodeConcept',
    live: null
  }
]

const level2Projects = [
  {
    title: 'Multi-Cloud Platform Manager',
    tech: 'Flask, Next.js, Cloud APIs',
    description:
      'Unified dashboard to authenticate and manage AWS, GCP, and Azure resources with secure credential-based access and centralized control.',
    github: 'https://github.com/VaibhavSoni24/Hackingly-Dashboard',
    live: null
  },
  {
    title: 'DreamWeaver',
    tech: 'HTML, CSS, JavaScript, Groq Llama3, GSAP',
    description:
      'Interactive branching story generator where users select AI-generated continuations and watch narratives unfold with visual prompts and mood-driven animations.',
    github: 'https://github.com/VaibhavSoni24/DreamWeaver',
    live: 'https://dreamweaverofficial.netlify.app/'
  },
  {
    title: 'FluentMate',
    tech: 'Flask, HTML, CSS, JavaScript',
    description:
      'AI-powered language learning assistant for practicing spoken English with interactive dialogues, grammar correction, and confidence-building feedback.',
    github: 'https://github.com/VaibhavSoni24/Innovastra',
    live: null
  },
  {
    title: 'CareConnect',
    tech: 'Flask, HTML, CSS, JavaScript',
    description:
      'AI-powered healthcare concept platform for early disease detection, remote monitoring, and personalized recommendations with emergency support workflows.',
    github: 'https://github.com/VaibhavSoni24/CareConnect',
    live: null
  },
  {
    title: 'Drowsiness Detector',
    tech: 'Flask, OpenCV, Haarcascades',
    description:
      'Browser-based drowsiness monitoring app that detects eye closure patterns and triggers an alarm when fatigue signals are detected.',
    github: 'https://github.com/VaibhavSoni24/Drowsiness_Detector',
    live: null
  },
  {
    title: 'Real Time Chat App',
    tech: 'Node.js, Socket.io, JavaScript',
    description:
      'Real-time room-based chat application built during a certified workshop with support for usernames and instant message exchange.',
    github: 'https://github.com/VaibhavSoni24/RealtimeChatApp',
    live: null
  },
  {
    title: 'Death Timer',
    tech: 'HTML, CSS, JavaScript',
    description:
      'Futuristic timer app with multiple countdown modes, animated UI effects, and dark/light theme support.',
    github: 'https://github.com/VaibhavSoni24/Death-Timer',
    live: null
  }
]

const level1Projects = [
  {
    title: 'Crypto Based Subscription Model',
    tech: 'Solidity, Ethereum',
    description:
      'Decentralized smart contract subscription model built during the EduChain blockchain workshop.',
    github: 'https://github.com/VaibhavSoni24/CryptoBasedSubscriptionModel',
    live: null
  },
  {
    title: 'To Do App',
    tech: 'HTML, CSS, JavaScript',
    description: 'Simple task management web app with clean UI and client-side task persistence.',
    github: 'https://github.com/VaibhavSoni24/To-Do_App',
    live: 'https://to-do-app-vaibhavsoni.netlify.app/'
  },
  {
    title: 'Notes App',
    tech: 'HTML, CSS, JavaScript',
    description: 'Lightweight browser notes application designed for fast capture and retrieval.',
    github: 'https://github.com/VaibhavSoni24/Notes_App',
    live: 'https://notes-app-vaibhavsoni.netlify.app/'
  },
  {
    title: 'AI Flashcard Language Learning App',
    tech: 'Frontend, AI APIs',
    description:
      'Hackathon-built flashcard language learning interface using intelligent repetition and interactive prompts.',
    github: 'https://github.com/VaibhavSoni24/HackHazards',
    live: null
  },
  {
    title: 'My Hugo Site',
    tech: 'Hugo, Firebase Hosting, Cloud Build',
    description: 'Static blog site with automated deployment pipeline through Google Cloud Build.',
    github: 'https://github.com/VaibhavSoni24/my_hugo_site',
    live: null
  },
  {
    title: 'Hello Cloudbuild App',
    tech: 'GitOps, Cloud Build',
    description: 'GitOps-style continuous delivery demo using environment-as-code principles.',
    github: 'https://github.com/VaibhavSoni24/hello-cloudbuild-app',
    live: null
  },
  {
    title: 'Sample App',
    tech: 'Go, Docker, GKE, Cloud Build',
    description: 'Containerized Go HTTP image server deployed on Kubernetes via Cloud Build pipeline.',
    github: 'https://github.com/VaibhavSoni24/sample-app',
    live: null
  },
  {
    title: 'Rotating Hexagon',
    tech: 'JavaScript Physics Animation',
    description: 'Interactive simulation of a ball bouncing inside a rotating hexagon with realistic motion.',
    github: 'https://github.com/VaibhavSoni24/Rotating-Hexagon',
    live: null
  },
  {
    title: 'RGB Bouncing Rings',
    tech: 'CSS 3D Animation',
    description: 'Pure CSS 3D animation of 21 concentric rings cycling through RGB color motion.',
    github: 'https://github.com/VaibhavSoni24/RGB-Bouncing-Rings',
    live: null
  }
]

function ProjectCard({ project }) {
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
      
      {project.description && (
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
            <span>Live Demo</span>
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
            <p className={styles.levelSubtitle}>High-impact full-stack systems and hackathon-winning builds</p>
          </div>
          <div className="grid grid-2">
            {level3Projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
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
