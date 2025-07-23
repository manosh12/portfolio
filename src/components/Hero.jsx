import data from "../data.json"

function Hero({ isLoaded, scrollToSection }) {
   const stats = data.stats;

  return (
    <section id="home" className="flex items-center justify-center lg:py-32 py-14">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-10">
          {/* Main Heading */}
          <div className="space-y-4 lg:mt-10">
            <h1 className="text-4xl md:text-7xl font-light tracking-tight">
              <span className={`block text-gray-400 transition-all duration-700 ${
                isLoaded ? 'animate-slideInLeft' : 'opacity-0 -translate-x-12'
              }`}>
                Digital
              </span>
              <span className={`block font-black text-black transition-all duration-700 ${
                isLoaded ? 'animate-slideInRight' : 'opacity-0 translate-x-12'
              }`}>
                Solutions
              </span>
            </h1>
            <div className={`flex items-center justify-center space-x-4 transition-all duration-700 ${
              isLoaded ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
            }`}>
              <div className="h-px bg-gray-300 w-16"></div>
              <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
                Developer
              </p>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
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
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover-scale hover-lift flex items-center justify-center"
            >
              Get In Touch →
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
        </div>
      </div>
    </section>
  )
}

export default Hero