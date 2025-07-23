import { useState, useEffect } from "react"
import { MenuIcon, CloseIcon } from "./Icons"
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
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover-scale">
                <span className="text-white font-bold text-sm">PM</span>
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
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover-scale relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
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
                <span className="text-white font-bold">AC</span>
              </div>
              <div>
                <div className="font-bold text-lg">Alex Chen</div>
              </div>
            </div>
            <div className="" onClick={() => setIsMenuOpen(false)}><CloseIcon /></div>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-8">
            <nav className="space-y-0.5">
              {quickLinks.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.href)}
                  className={`group w-full text-left px-4 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-between ${
                    isMenuOpen ? 'animate-slideInRight' : 'opacity-0'
                  }`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium text-gray-600 group-hover:text-black transition-colors duration-300">
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
                <p className="text-sm font-medium text-black">codeexplorer@gmail.com</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover-scale"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover-scale"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
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