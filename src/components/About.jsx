function About({isLoaded, visibleElements }) {
  return (
    <section id="about" className="lg:py-20 py-12 bg-gray-50">
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

          {/* Updated Professional Portrait to match third image design */}
          <div className={`relative animate-on-scroll px-3 ${
            visibleElements.has('about') ? 'animate' : ''
          }`} style={{ animationDelay: '200ms' }}>

            {/* Main Portrait Container */}
            <div className="relative">
              <div className="aspect-[5/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Center Icon and Text */}
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Professional Portrait</p>
                </div>
              </div>

              {/* Decorative Elements - matching the image design */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 border-2 border-gray-300 rounded-3xl rotate-12 hover:rotate-6 transition-all duration-700 animate-float ${
                visibleElements.has('about') ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} style={{ transitionDelay: '200ms' }} />

              <div className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gray-900 rounded-2xl hover:scale-110 hover:rotate-12 transition-all duration-700 animate-float ${
                visibleElements.has('about') ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}/>

              {/* Code Icon - matching the design */}
              <div className={`absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-float ${
                visibleElements.has('about') ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About