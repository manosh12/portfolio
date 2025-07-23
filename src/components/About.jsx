function About({ visibleElements }) {
  return (
    <section id="about" className="lg:py-20 py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 animate-on-scroll ${
            visibleElements.has('about') ? 'animate' : ''
          }`}>
            <div>
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">About Me</span>
              <h2 className="text-4xl md:text-5xl font-light mt-2">
                Crafting Digital
                <span className="block font-black">Experiences</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                I'm a passionate full-stack developer with over{" "}
                <span className="font-semibold text-black">5 years of experience</span> creating digital solutions
                that make a difference.
              </p>
              <p>
                My expertise spans modern web technologies, cloud infrastructure, and system architecture. I enjoy
                solving complex problems and turning innovative ideas into reality.
              </p>
            </div>
          </div>

          <div className={`relative animate-on-scroll ${
            visibleElements.has('about') ? 'animate' : ''
          }`}>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center hover-lift hover-rotate transition-all duration-500">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg hover-scale">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <p className="text-gray-500 font-medium">Professional Portrait</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About