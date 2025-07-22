import { ArrowRightIcon } from "./Icons"

function Hero({ isLoaded, scrollToSection }) {
  const stats = [
    { number: "50+", label: "Projects" },
    { number: "5+", label: "Years" },
    { number: "25+", label: "Clients" },
    { number: "99%", label: "Success" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* <div className={`inline-flex items-center px-4 py-2 border border-gray-200 rounded-full bg-gray-50 hover-scale transition-all duration-500 ${
            isLoaded ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-600">Available for new projects</span>
          </div> */}

          {/* Main Heading */}
          <div className="space-y-4 mt-10">
            <h1 className="text-4xl md:text-7xl font-light tracking-tight">
              <span className={`block text-gray-400 transition-all duration-700 ${
                isLoaded ? 'animate-slideInLeft' : 'opacity-0 -translate-x-12'
              }`}>
                Alex
              </span>
              <span className={`block font-black text-black transition-all duration-700 ${
                isLoaded ? 'animate-slideInRight' : 'opacity-0 translate-x-12'
              }`}>
                Chen
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-gray-600 font-light transition-all duration-700 ${
              isLoaded ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}>
              Full-Stack Developer
            </p>
          </div>

          <p className={`text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
            isLoaded ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            I craft exceptional digital experiences through clean architecture and thoughtful design. Specializing in
            modern web technologies with 5+ years of expertise.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 lg:pt-8 transition-all duration-700 ${
            isLoaded ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover-scale hover-lift flex items-center justify-center"
            >
              View My Work →
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-black hover:text-black transition-all duration-300 hover-scale hover-lift"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6 lg:pt-16 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center hover-scale transition-all duration-700 ${
                  isLoaded ? 'animate-scaleIn' : 'opacity-0 scale-75'
                }`}>
                <div className="text-3xl font-bold text-black mb-1 animate-float">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          {/* <div className={`pt-4 flex flex-col items-center transition-all duration-700 ${
            isLoaded ? 'animate-bounce' : 'opacity-0'
          }`}>
            <p className="text-sm text-gray-500 mb-3">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-black transition-colors duration-300">
              <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero