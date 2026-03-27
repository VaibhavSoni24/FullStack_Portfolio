import styles from './Skills.module.css'

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "REST APIs"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Angular (Basic)", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Databases",
    skills: ["Firebase", "MySQL", "SQLite", "PostgreSQL"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure (Basic)", "Docker", "CI/CD (GitHub Actions, Cloud Build)"]
  },
  {
    title: "Concepts",
    skills: ["Full-Stack Development", "API Design", "System Design", "AI Integration", "Microservices Basics"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Postman", "Socket.io", "Redis", "GraphQL", "Three.js"]
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
