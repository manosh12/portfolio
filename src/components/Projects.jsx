function Projects({ visibleElements }) {
  const projects = [
    {
      title: "Enterprise Cloud Platform",
      description: "A comprehensive cloud infrastructure platform serving 10M+ users globally. Built with microservices architecture.",
      tech: ["React", "Node.js", "AWS", "Kubernetes"],
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform processing 50M+ events daily with machine learning insights.",
      tech: ["React", "Python", "PostgreSQL", "D3.js"],
    },
    {
      title: "AI Security Monitor",
      description: "Next-generation security platform using AI/ML to detect threats in real-time.",
      tech: ["Python", "TensorFlow", "Go", "Redis"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${
          visibleElements.has('projects') ? 'animate' : ''
        }`}>
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">
            Featured
            <span className="block font-black">Projects</span>
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""} animate-on-scroll ${
                visibleElements.has('projects') ? 'animate' : ''
              }`}>
                <div>
                  <h3 className="text-3xl font-light mb-4">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover-scale"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="text-black font-semibold hover:underline hover-lift">View Live</button>
                  <button className="text-gray-600 font-semibold hover:text-black hover-lift">Case Study</button>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""} animate-on-scroll ${
                visibleElements.has('projects') ? 'animate' : ''
              }`}>
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center hover-scale hover-lift transition-all duration-500">
                  <span className="text-4xl animate-float">🚀</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects