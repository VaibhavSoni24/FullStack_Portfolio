import styles from './Footer.module.css'
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <nav className={styles.footerLinks}>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#achievements">Achievements</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#certificates">Certificates</a>
            </nav>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <div className={styles.contactLinks}>
              <a href="mailto:vaibhavsoni280506@gmail.com" className={styles.contactLink}>
                <Mail size={16} />
                <span>vaibhavsoni280506@gmail.com</span>
              </a>
              <a href="tel:+916350366202" className={styles.contactLink}>
                <Phone size={16} />
                <span>+91 6350366202</span>
              </a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Connect</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com/VaibhavSoni24" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/vaibhav-soni-867836285/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© 2026 Vaibhav Soni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
