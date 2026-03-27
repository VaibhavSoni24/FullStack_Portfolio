import styles from './Experience.module.css'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'AI Trainer Intern',
    company: 'Aerophantom',
    duration: 'Oct 2025 - Oct 2025 (1 month)',
    location: 'On-site, Bijnor, Uttar Pradesh, India',
    highlights: [
      'Learned and trained students in AI automation fundamentals.',
      'Explained practical electronics concepts including transistors and sensors.',
      'Helped build automated alarm system prototypes using sensors and transistor-based circuits.'
    ]
  },
  {
    role: 'Game Developer Intern',
    company: 'Vortalis Technologies',
    duration: 'Jun 2025 - Aug 2025 (2 months)',
    location: 'On-site, Jaipur, Rajasthan, India',
    highlights: [
      'Built the game Undead Survival for the GMTK Game Jam.',
      'Collaborated with teammate Chaitanya and manager Shaan Sir while representing the company.',
      'Worked in a fast-paced team environment with milestone-driven delivery.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'CollegeTips.in',
    duration: 'Jun 2025 - Jun 2025 (1 month)',
    location: 'Remote, Jaipur, Rajasthan, India',
    highlights: [
      'Helped build frontend sections of the official CollegeTips.in website.',
      'Developed responsive UI components for production pages used by live users.',
      'Improved frontend performance and reusability using modular component design.'
    ],
    link: 'https://collegetips.in/',
    linkLabel: 'Live: collegetips.in'
  },
  {
    role: 'Video Editor Intern',
    company: 'Shouko.shop',
    duration: 'Jun 2024 - Jun 2024 (1 month)',
    location: 'Hybrid, Jaipur, Rajasthan, India',
    highlights: [
      'Created promotional and advertising videos for company social media channels.',
      'Delivered creative assets aligned with campaign goals and brand tone.'
    ]
  }
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className={styles.experienceGrid}>
          {experiences.map((experience, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.company}>{experience.company}</h3>
                  <h4 className={styles.position}>{experience.role}</h4>
                </div>
                <div className={styles.experienceMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <ul className={styles.responsibilities}>
                {experience.highlights.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>

              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.experienceLink}
                >
                  {experience.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
