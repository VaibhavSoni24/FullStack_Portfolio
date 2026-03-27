import styles from './Certificates.module.css'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: "IIT Guwahati - Summer Analytics Program",
    description: "Completed Summer Analytics program with Top 25% performance."
  },
  {
    title: "Accenture (Forage) - Software Engineering Simulation",
    description: "Hands-on virtual simulation focused on software engineering workflows and delivery practices."
  },
  {
    title: "NPTEL - Programming in Java",
    description: "Academic certification covering Java programming fundamentals and applied problem solving."
  },
  {
    title: "Google - AI Workshop",
    description: "Training focused on practical AI workflows and applied development opportunities."
  },
  {
    title: "HP Life - Agile & Data Analytics",
    description: "Industry-oriented learning on agile execution and data analytics fundamentals."
  }
]

export default function Certificates() {
  return (
    <section className="section" id="certificates" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
      <div className="container">
        <h2 className="section-title">Selected Certifications & Training</h2>
        
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
