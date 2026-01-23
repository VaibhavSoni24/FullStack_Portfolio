import styles from './Experience.module.css'
import Image from 'next/image'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className={styles.experienceCard}>
          <div className={styles.experienceHeader}>
            <div>
              <h3 className={styles.company}>CollegeTips.in</h3>
              <h4 className={styles.position}>Web Development Intern</h4>
            </div>
            <div className={styles.experienceMeta}>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>June 2025 (1 Month)</span>
              </div>
              <div className={styles.metaItem}>
                <MapPin size={16} />
                <span>Remote</span>
              </div>
            </div>
          </div>
          
          <ul className={styles.responsibilities}>
            <li>Built production UI components used by live users</li>
            <li>Implemented responsive layouts and reusable components</li>
            <li>Worked under real deadlines (code under company ownership)</li>
          </ul>
          
          <div className={styles.certificateWrapper}>
            <Image 
              src="/assets/CollegeTips.in-WebDevelopment-2025.jpg"
              alt="CollegeTips.in Web Development Certificate"
              width={800}
              height={600}
              className={styles.certificate}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
