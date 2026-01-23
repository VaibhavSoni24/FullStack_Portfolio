import styles from './Skills.module.css'

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Solidity (Basic)"]
  },
  {
    title: "Backend",
    skills: ["Flask", "Django", "Node.js", "REST APIs"]
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "HTML", "CSS"]
  },
  {
    title: "Databases",
    skills: ["Firebase", "MySQL", "SQLite", "PostgreSQL"]
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS (Basic)", "GCP (Basic)", "Azure (Basic)", "Git & GitHub"]
  },
  {
    title: "Concepts",
    skills: ["Full Stack Development", "API Design", "Cloud Systems", "AI Integration"]
  }
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-3">
          {skillCategories.map((category, index) => (
            <div key={index} className={`card ${styles.skillCard}`}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
