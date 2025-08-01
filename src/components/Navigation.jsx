import { useState, useEffect } from "react"
import { FaGithub,FaBars, FaTimes } from 'react-icons/fa';


import data from "../data.json"

function Navigation({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const quickLinks = data.quickLinks;

  const handleScrollToSection = (sectionId) => {
    console.log(sectionId)
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="lg:fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover-scale">
                <img src="/images/logo.png" alt="logo" className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">MANOSH</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {quickLinks.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.href.toLowerCase())}
                  className={`text-gray-600 hover:text-black transition-all duration-300 hover-lift animate-fadeIn`}
                >
                  {item.name}
                </button>
              ))}
              <a href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:text-white bg-black text-white transition-all duration-300 hover-scale group"
                  title="GitHub"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <FaGithub />
                  </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover-scale relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transition-all duration-300 cursor-pointer ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sliding Menu */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <img src="/images/logo.png" alt="logo" className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold">MANOSH</div>
              </div>
            </div>
            <div className="cursor-pointer" onClick={() => setIsMenuOpen(false)}><FaTimes /></div>
          </div>

          {/* Menu Items */}
          <div className="px-6 mt-4">
            <nav className="space-y-1">
              {quickLinks.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.href)}
                  className={`group w-full text-left px-4 py-3 hover:bg-gray-100 transition-all duration-300 flex items-center justify-between ${
                    isMenuOpen ? 'animate-slideInRight' : 'opacity-0'
                  }`}>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-gray-600 group-hover:text-black transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">→</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
            <div className={`space-y-4 ${
              isMenuOpen ? 'animate-fadeInUp' : 'opacity-0'
            }`}>
              {/* Contact Info */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Get in touch</p>
                <p className="text-sm font-medium text-black">coderexplorer@gmail.com</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover-scale"
                >
                 <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation