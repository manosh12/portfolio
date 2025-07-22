"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Server,
  Shield,
  Cloud,
  Send,
  Menu,
  X,
  ArrowRight,
  Download,
  Briefcase,
  Award,
  Users,
  Calendar,
  Eye,
  Heart,
  Star,
  ArrowUpRight,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Animation and intersection observer setup
  useEffect(() => {
    setIsLoaded(true)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]))
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Cursor Follower */}
      <div
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${scrollY > 100 ? 0.5 : 1})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <div className="font-bold text-xl tracking-tight">Alex Chen</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {["Home", "About", "Skills", "Work", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === "work" ? "portfolio" : item.toLowerCase())}
                  className={`relative px-4 py-2 font-medium transition-all duration-500 group ${
                    activeSection === (item.toLowerCase() === "work" ? "portfolio" : item.toLowerCase())
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gray-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-500 ${
                      activeSection === (item.toLowerCase() === "work" ? "portfolio" : item.toLowerCase())
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Let's Talk
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-black p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
              <div className="px-6 py-8 space-y-4">
                {["Home", "About", "Skills", "Work", "Contact"].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === "work" ? "portfolio" : item.toLowerCase())}
                    className="block w-full text-left text-gray-600 hover:text-black py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-1/4 left-10 w-32 h-32 border border-gray-200 rounded-full transition-all duration-1000 ${isLoaded ? "animate-pulse scale-100 opacity-100" : "scale-0 opacity-0"}`}
          />
          <div
            className={`absolute bottom-1/4 right-10 w-24 h-24 bg-black rounded-full opacity-5 transition-all duration-1000 delay-300 ${isLoaded ? "scale-100" : "scale-0"}`}
          />
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-100 rounded-full transition-all duration-1500 delay-500 ${isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gray-300 rounded-full transition-all duration-1000`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 200}ms`,
                transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                opacity: isLoaded ? 0.6 : 0,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="space-y-12">
            {/* Animated Status Badge */}
            <div
              className={`inline-flex items-center px-6 py-3 border border-gray-200 rounded-full bg-white/50 backdrop-blur-sm hover:border-black transition-all duration-500 group transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
              <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
                Available for new projects
              </span>
              <ArrowUpRight className="ml-2 w-4 h-4 text-gray-400 group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
            </div>

            {/* Animated Main Heading */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-9xl font-light tracking-tighter leading-none">
                  <span
                    className={`block opacity-90 transition-all duration-700 delay-200 ${isLoaded ? "translate-y-0 opacity-90" : "translate-y-12 opacity-0"}`}
                  >
                    Alex
                  </span>
                  <span
                    className={`block font-black transition-all duration-700 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                  >
                    Chen
                  </span>
                </h1>
                <div
                  className={`flex items-center justify-center space-x-6 transition-all duration-700 delay-600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-black to-transparent w-24 animate-pulse" />
                  <p className="text-xl lg:text-2xl text-gray-600 font-light tracking-wide">
                    Senior Full-Stack Developer
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-black to-transparent w-24 animate-pulse" />
                </div>
              </div>

              <p
                className={`text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-700 delay-800 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                I craft exceptional digital experiences through{" "}
                <span className="font-medium text-black">clean architecture</span> and{" "}
                <span className="font-medium text-black">thoughtful design</span>. Specializing in modern web
                technologies with 5+ years of expertise.
              </p>
            </div>

            {/* Animated CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center pt-8 transition-all duration-700 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <button
                onClick={() => scrollToSection("portfolio")}
                className="group bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center transform hover:-translate-y-1"
              >
                <span>Explore My Work</span>
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-medium hover:border-black hover:text-black transition-all duration-300 hover:scale-105 flex items-center justify-center transform hover:-translate-y-1"
              >
                <Download className="mr-3 group-hover:animate-bounce" size={20} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Projects", icon: Briefcase },
                { number: "5+", label: "Years", icon: Calendar },
                { number: "25+", label: "Clients", icon: Users },
                { number: "99%", label: "Success", icon: Award },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center group hover:scale-110 transition-all duration-500 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                  style={{
                    transitionDelay: `${1200 + index * 200}ms`,
                    animationDelay: `${1200 + index * 200}ms`,
                  }}
                >
                  <div className="w-16 h-16 border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-black mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Animated Scroll Indicator */}
            <div
              className={`pt-20 flex flex-col items-center animate-bounce transition-all duration-700 delay-1600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <p className="text-sm text-gray-500 mb-3">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-black transition-colors duration-300">
                <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Animated Image/Visual */}
            <div
              className={`lg:col-span-5 relative transition-all duration-1000 ${visibleSections.has("about") ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Briefcase size={40} className="text-gray-600" />
                  </div>
                  <p className="text-gray-500 font-medium">Professional Portrait</p>
                </div>
              </div>
              {/* Animated Floating Elements */}
              <div
                className={`absolute -top-6 -right-6 w-32 h-32 border-2 border-gray-300 rounded-3xl rotate-12 hover:rotate-6 transition-all duration-700 ${visibleSections.has("about") ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                style={{ transitionDelay: "200ms" }}
              />
              <div
                className={`absolute -bottom-6 -left-6 w-24 h-24 bg-black rounded-2xl hover:scale-110 hover:rotate-12 transition-all duration-700 ${visibleSections.has("about") ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                style={{ transitionDelay: "400ms" }}
              />
              <div
                className={`absolute top-1/2 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:-translate-y-2 transition-all duration-500 ${visibleSections.has("about") ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                style={{ transitionDelay: "600ms" }}
              >
                <Code size={24} className="text-gray-600" />
              </div>
            </div>

            {/* Animated Content */}
            <div
              className={`lg:col-span-7 space-y-10 transition-all duration-1000 delay-300 ${visibleSections.has("about") ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-0.5 bg-black mr-4 animate-pulse" />
                  <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">About Me</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-light mb-6 leading-tight">
                  Crafting Digital
                  <span className="block font-black">Experiences</span>
                </h2>
              </div>

              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p
                  className={`text-xl font-light transition-all duration-700 delay-500 ${visibleSections.has("about") ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  I'm a passionate full-stack developer with over{" "}
                  <span className="font-semibold text-black">5 years of experience</span> creating digital solutions
                  that make a difference. I believe in the power of clean, efficient code and user-centered design.
                </p>
                <p
                  className={`text-lg transition-all duration-700 delay-700 ${visibleSections.has("about") ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  My expertise spans modern web technologies, cloud infrastructure, and system architecture. I enjoy
                  solving complex problems and turning innovative ideas into reality through thoughtful engineering and
                  meticulous attention to detail.
                </p>
              </div>

              {/* Animated Skills Grid */}
              <div
                className={`grid grid-cols-2 gap-8 pt-8 transition-all duration-700 delay-900 ${visibleSections.has("about") ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <div className="space-y-4">
                  <h4 className="font-semibold text-black flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse" />
                    Specializations
                  </h4>
                  <ul className="text-gray-600 space-y-2 ml-5">
                    {["Full-Stack Development", "Cloud Architecture", "UI/UX Design", "DevOps & CI/CD"].map(
                      (item, index) => (
                        <li
                          key={item}
                          className={`transition-all duration-500 hover:translate-x-2 hover:text-black ${visibleSections.has("about") ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                          style={{ transitionDelay: `${1000 + index * 100}ms` }}
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-black flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse" />
                    Industries
                  </h4>
                  <ul className="text-gray-600 space-y-2 ml-5">
                    {["FinTech & Banking", "E-commerce", "Healthcare Tech", "SaaS Platforms"].map((item, index) => (
                      <li
                        key={item}
                        className={`transition-all duration-500 hover:translate-x-2 hover:text-black ${visibleSections.has("about") ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                        style={{ transitionDelay: `${1000 + index * 100}ms` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Animated CTA */}
              <div
                className={`pt-8 transition-all duration-700 delay-1200 ${visibleSections.has("about") ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group flex items-center text-black font-semibold hover:underline hover:translate-x-2 transition-all duration-300"
                >
                  Let's work together
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has("skills") ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-black mr-4 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Skills & Expertise</span>
              <div className="w-12 h-0.5 bg-black ml-4 animate-pulse" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              Technical
              <span className="block font-black">Arsenal</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Frontend Development",
                icon: Code,
                skills: [
                  { name: "React/Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 95 },
                  { name: "JavaScript ES6+", level: 92 },
                ],
              },
              {
                title: "Backend & Cloud",
                icon: Server,
                skills: [
                  { name: "Node.js/Python", level: 88 },
                  { name: "AWS/Azure", level: 85 },
                  { name: "Docker/K8s", level: 82 },
                  { name: "PostgreSQL", level: 90 },
                ],
              },
              {
                title: "Tools & DevOps",
                icon: Shield,
                skills: [
                  { name: "Git/GitHub", level: 95 },
                  { name: "CI/CD Pipelines", level: 85 },
                  { name: "Monitoring", level: 88 },
                  { name: "Testing", level: 90 },
                ],
              },
            ].map((category, index) => (
              <div
                key={category.title}
                className={`group bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 relative overflow-hidden ${visibleSections.has("skills") ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <category.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-8 text-black group-hover:scale-105 transition-transform duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`space-y-3 transition-all duration-500 ${visibleSections.has("skills") ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                        style={{ transitionDelay: `${600 + index * 200 + skillIndex * 100}ms` }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium hover:text-black transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`bg-black h-2 rounded-full transition-all duration-1500 ease-out ${visibleSections.has("skills") ? "" : "w-0"}`}
                            style={{
                              width: visibleSections.has("skills") ? `${skill.level}%` : "0%",
                              transitionDelay: `${800 + index * 200 + skillIndex * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections.has("portfolio") ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-black mr-4 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Selected Work</span>
              <div className="w-12 h-0.5 bg-black ml-4 animate-pulse" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              Featured
              <span className="block font-black">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              A curated collection of projects that showcase my expertise in modern web development and system
              architecture
            </p>
          </div>

          <div className="space-y-24">
            {/* Project 1 - Featured with enhanced animations */}
            <div
              className={`group transition-all duration-1000 ${visibleSections.has("portfolio") ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl group-hover:scale-105 transition-all duration-700">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />
                    <Cloud
                      size={100}
                      className="text-gray-400 group-hover:text-gray-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"
                    />
                    <div className="absolute top-6 right-6 flex space-x-2">
                      <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 hover:rotate-12 transition-all duration-300">
                        <Eye size={16} className="text-gray-600" />
                      </div>
                      <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 hover:rotate-12 transition-all duration-300">
                        <Heart size={16} className="text-gray-600" />
                      </div>
                      {/* Animated overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                  <div
                    className={`flex items-center space-x-3 transition-all duration-700 ${visibleSections.has("portfolio") ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <Star className="w-5 h-5 text-black animate-pulse" />
                    <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Featured Project</span>
                  </div>
                  <div
                    className={`transition-all duration-700 ${visibleSections.has("portfolio") ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <h3 className="text-4xl font-light mb-4 group-hover:scale-105 transition-transform duration-300">
                      Enterprise Cloud
                      <span className="block font-black">Platform</span>
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-light">
                      A comprehensive cloud infrastructure platform serving{" "}
                      <span className="font-semibold text-black">10M+ users globally</span>. Built with microservices
                      architecture, achieving 99.9% uptime and reducing operational costs by 60%.
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-3 transition-all duration-700 ${visibleSections.has("portfolio") ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    {["React", "Node.js", "AWS", "Kubernetes", "TypeScript"].map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-black hover:text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
                        style={{ transitionDelay: `${900 + techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex space-x-6 transition-all duration-700 ${visibleSections.has("portfolio") ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                    style={{ transitionDelay: "1000ms" }}
                  >
                    <button className="group/btn flex items-center text-black font-semibold hover:underline hover:scale-105 transition-all duration-300">
                      View Live
                      <ExternalLink
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-45 transition-all duration-300"
                      />
                    </button>
                    <button className="group/btn flex items-center text-gray-600 font-semibold hover:text-black hover:scale-105 transition-all duration-300">
                      Case Study
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add similar enhanced animations to other projects... */}
          </div>

          {/* Animated View All Projects button */}
          <div
            className={`text-center pt-16 transition-all duration-1000 ${visibleSections.has("portfolio") ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: "1200ms" }}
          >
            <button className="group bg-black text-white px-12 py-4 rounded-full font-medium hover:bg-gray-800 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              View All Projects
              <ArrowRight className="inline ml-3 group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-black mr-4" />
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Get In Touch</span>
              <div className="w-12 h-0.5 bg-black ml-4" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              Let's Create
              <span className="block font-black">Something Great</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life through
              thoughtful design and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-3xl font-light mb-8">Let's connect</h3>

                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Email", value: "alex.chen@email.com", href: "mailto:alex.chen@email.com" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
                  ].map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center space-x-6 group hover:translate-x-2 transition-transform duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <contact.icon size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-black text-lg">{contact.label}</div>
                        <div className="text-gray-600 group-hover:text-black transition-colors">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-12">
                  <h4 className="font-semibold text-black mb-6 text-lg">Follow my journey</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Github, href: "#", label: "GitHub" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl">
                <h3 className="text-3xl font-light mb-8">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-gray-300"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-5 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 group"
                  >
                    <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AC</span>
              </div>
              <div>
                <div className="font-bold text-xl">Alex Chen</div>
                <div className="text-gray-600 text-sm">Senior Full-Stack Developer</div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-600 mb-2">© 2024 Alex Chen. All rights reserved.</p>
              <p className="text-sm text-gray-500">Crafted with passion using React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
