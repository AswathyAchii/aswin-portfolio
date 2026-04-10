import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Experience  from './components/Experience'
import Skills      from './components/Skills'
import Achievements from './components/Achievements'
import Languages   from './components/Languages'
import Education   from './components/Education'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Languages />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
