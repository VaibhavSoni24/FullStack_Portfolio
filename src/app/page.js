import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Certificates from '@/components/Certificates'
import Languages from '@/components/Languages'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Skills />
      <Certificates />
      <Languages />
      <Footer />
    </main>
  )
}
