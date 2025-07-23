import { useState, useEffect } from "react"

// Import all components
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleElements, setVisibleElements] = useState(new Set())

  // Initialize animations and scroll observer
  useEffect(() => {
    // Trigger initial load animation
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id || entry.target.className]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all sections and animated elements
    const elementsToObserve = document.querySelectorAll('section, .animate-on-scroll')
    elementsToObserve.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <Hero
        isLoaded={isLoaded}
        scrollToSection={scrollToSection}
      />

      <About
        visibleElements={visibleElements}
      />

      <Education
        visibleElements={visibleElements}
      />

      <Skills
        visibleElements={visibleElements}
      />

      <Contact
        visibleElements={visibleElements}
      />

      <Footer />
    </div>
  )
}

export default App