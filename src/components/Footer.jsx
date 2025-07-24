import { FaEnvelopeSquare, FaPhoneSquare } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import data from "../data.json"

function Footer() {
  const quickLinks = data.quickLinks;

  const scrollToSection = (href) => {
    if (href) {
      const element = document.querySelector(`#${href}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8 lg:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 lg:space-y-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold text-xl">Pun Manosh</div>
                <div className="text-gray-400 text-sm">Developer</div>
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

          {/* Newsletter & Social */}
          <div className="space-y-6 ">
            <h3 className="text-lg font-semibold text-white relative">
              Stay Connected
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white rounded-full"></div>
            </h3>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaEnvelopeSquare />
                <span className="text-sm">coderexplorer21@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaPhoneSquare />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <FaLocationDot />
                <span className="text-sm">Fukuoka, Japan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 sm:hidden pb-6">
          <h3 className="text-lg font-semibold text-white relative">
            Quick Links
            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white rounded-full"></div>
          </h3>
          <ul className="flex justify-start gap-8">
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
        <div className="border-t border-gray-800 pt-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm lg:text-center">
              © 2025 Pun Manosh. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer