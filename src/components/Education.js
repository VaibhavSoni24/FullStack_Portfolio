import styles from './Education.module.css'
import { GraduationCap, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section className="section" id="education" style={{backgroundColor: 'var(--color-bg-secondary)'}}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className={styles.educationCard}>
          <div className={styles.iconWrapper}>
            <GraduationCap size={32} />
          </div>
          
          <div className={styles.educationContent}>
            <h3 className={styles.degree}>B.Tech — Computer Science & Engineering</h3>
            <h4 className={styles.institution}>Arya College of Engineering, Jaipur</h4>
            <p className={styles.university}>Rajasthan Technical University, Kota</p>
            
            <div className={styles.educationMeta}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>2023 – 2027</span>
              </div>
              <div className={styles.metaItem}>
                <span>3rd Year, 6th Semester</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
