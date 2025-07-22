import { MailIcon, PhoneIcon, LocationIcon } from "./Icons"

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    { name: "Web Development", href: "#" },
    { name: "Design", href: "#" },
    { name: "Server Construction", href: "#" }
  ]

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold text-xl">Alex Chen</div>
                <div className="text-gray-400 text-sm">Full-Stack Developer</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 hidden lg:block">
            <h3 className="text-lg font-semibold text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-sm">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-sm">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6 ">
            <h3 className="text-lg font-semibold text-white relative">
              Stay Connected
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white rounded-full"></div>
            </h3>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <MailIcon/>
                <span className="text-sm">codeexplorer21@email.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <PhoneIcon />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <LocationIcon />
                <span className="text-sm">Fukuoka, Japan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 sm:hidden">
          <h3 className="text-lg font-semibold text-white relative">
            Quick Links
            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white rounded-full"></div>
          </h3>
          <ul className="flex justify-between">
            {quickLinks.map((link, index) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                >
                  <span className="text-sm">{link.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-10">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center">
              © 2025 Pun Manosh. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer