import styles from './Languages.module.css'
import { Languages as LanguagesIcon } from 'lucide-react'

const languages = [
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Professional" },
  { name: "Japanese", level: "Basic" }
]

export default function Languages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <h2 className="section-title">Languages</h2>
        
        <div className={styles.languagesGrid}>
          {languages.map((lang, index) => (
            <div key={index} className={`card ${styles.languageCard}`}>
              <LanguagesIcon size={24} className={styles.icon} />
              <h3 className={styles.languageName}>{lang.name}</h3>
              <p className={styles.languageLevel}>{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
