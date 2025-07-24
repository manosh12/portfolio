import { useState, useEffect } from 'react'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (scrolled / maxHeight) * 100

    setScrollProgress(progress)

    if (scrolled > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {/* Go to Top Button */}
      <div
        className={`hidden lg:block fixed right-6 bottom-6 z-50 transition-all duration-500 ease-in-out transform ${
          isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <div className="relative group">
          {/* Main Button */}
          <button
            onClick={scrollToTop}
            className="relative w-14 h-14 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-black dark:text-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 flex items-center justify-center group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            title="Go to top"
            aria-label="Go to top"
          >
            ↑
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-black dark:bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Go to top
              {/* Tooltip Arrow */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black dark:border-l-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GoToTop