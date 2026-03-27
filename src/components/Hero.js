import styles from './Hero.module.css'
import { Download, Github, Linkedin, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.name}>Vaibhav Soni</h1>
            <h2 className={styles.role}>Full-Stack Developer | React, Next.js, Node.js, Django, Flask, FastAPI</h2>

            <div className={styles.contactRow}>
              <span className={styles.contactItem}>
                <MapPin size={14} />
                Jaipur, Rajasthan, India
              </span>
              <a href="mailto:vaibhavsoni280506@gmail.com" className={styles.contactItem}>
                <Mail size={14} />
                vaibhavsoni280506@gmail.com
              </a>
              <a href="tel:+916350366202" className={styles.contactItem}>
                <Phone size={14} />
                +91 6350366202
              </a>
            </div>

            <p className={styles.tagline}>
              Full-stack developer with strong experience in building scalable web applications using React, Next.js,
              Node.js, and modern backend frameworks (Django/Flask/FastAPI). Proven ability to design APIs,
              manage databases, and deploy production-ready systems.
            </p>

            <p className={styles.taglineSecondary}>
              Demonstrated success in hackathons and real-world projects, including AI-powered platforms,
              cloud dashboards, and automation systems with a strong focus on backend architecture and system design.
            </p>
            
            <div className={styles.buttonGroup}>
              <a href="/assets/Vaibhav_Soni_FullStack_Resume.pdf" download className="btn">
                <Download size={18} />
                Download Resume
              </a>
              <a 
                href="https://github.com/VaibhavSoni24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/vaibhav-soni-867836285/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://vaibhavsonifullstackportfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={18} />
                Portfolio
              </a>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/photo.jpeg" 
                alt="Vaibhav Soni"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
