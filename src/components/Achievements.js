import styles from './Achievements.module.css'
import Image from 'next/image'
import { Award, ExternalLink } from 'lucide-react'

const achievements = [
  {
    title: "Sphinx MNIT Jaipur Hackathon",
    achievement: "Top 7",
    project: "Real-Time Call Analyzer",
    projectLink: "#callanalyzer",
    image: "/assets/sphinx.jpeg"
  },
  {
    title: "TiE Global Summit – Rajasthan Digifest",
    achievement: "Runner-Up",
    project: "CivicSaathi",
    projectLink: "#civicsaathi",
    image: "/assets/digifest.jpeg"
  }
]

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid grid-2">
          {achievements.map((achievement, index) => (
            <div key={index} className={`card ${styles.achievementCard}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={achievement.image}
                  alt={achievement.title}
                  width={600}
                  height={400}
                  className={styles.achievementImage}
                />
              </div>
              
              <div className={styles.achievementContent}>
                <div className={styles.achievementHeader}>
                  <Award size={20} className={styles.icon} />
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                </div>
                
                <div className={styles.achievementBadge}>
                  {achievement.achievement}
                </div>
                
                <p className={styles.projectInfo}>
                  Project: <a href={achievement.projectLink} className={styles.projectLink}>
                    {achievement.project}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
