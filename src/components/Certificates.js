import styles from './Certificates.module.css'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: "TiE Global Summit - Rajasthan Digifest Hackathon 2025",
    description: "Municipality management app (CivicSaathi) using Next.js and Django"
  },
  {
    title: "Sphinx MNIT Jaipur Hackathon",
    description: "Real-time call analyzer with MOM generation"
  },
  {
    title: "CollegeTips.in Web Development Internship",
    description: "One month remote internship, built production UI components"
  },
  {
    title: "HackHazards 2025",
    description: "Personalized story writer app (DreamWeaver) powered by LLaMA 3 API"
  },
  {
    title: "DevSummit 2025",
    description: "Healthcare platform (CareConnect) powered by AI"
  },
  {
    title: "Innovastra 2025",
    description: "Live language translator (FluentMate) using Flask"
  },
  {
    title: "WSA Full Stack Training & Internship 2024",
    description: "WebStack Academy comprehensive full stack program"
  },
  {
    title: "SkyySkill Chat App Development",
    description: "Online workshop, built real-time chat app using Socket.io"
  },
  {
    title: "EduChain Blockchain Basics",
    description: "Blockchain fundamentals workshop at JECRC University"
  },
  {
    title: "Code Crunch 2023",
    description: "Internal college competition, signup/login system with Firebase"
  },
  {
    title: "HP Life - Effective Business Website Building",
    description: "Website development course"
  },
  {
    title: "PW Web Development Basics",
    description: "Foundational web development course"
  }
]

export default function Certificates() {
  return (
    <section className="section" id="certificates" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        
        <div className="grid grid-3">
          {certificates.map((cert, index) => (
            <div key={index} className={`card ${styles.certCard}`}>
              <div className={styles.certIcon}>
                <Award size={20} />
              </div>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certDescription}>{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllWrapper}>
          <a 
            href="https://www.linkedin.com/in/vaibhav-soni-867836285/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <ExternalLink size={18} />
            View all certificates on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
