import styles from './Hero.module.css'
import { Download, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.name}>Vaibhav Soni</h1>
            <h2 className={styles.role}>Full Stack Developer | Backend & Cloud Focus</h2>
            <p className={styles.tagline}>
              Full-stack engineering student with strong backend, cloud, and systems focus.
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
