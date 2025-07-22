import {
  FaCheckCircle, FaCheckSquare
} from 'react-icons/fa';

function Education({ visibleElements }) {
  const education = {
    school: "Kyushu Eisugakukan",
    course: "IT-Web Course",
    period: "April 2018 - April 2020",
    location: "Japan",
    subjects: [
      {
        category: "Web Programming",
        skills: ["PHP", "JavaScript", "HTML", "CSS"]
      },
      {
        category: "Web Design",
        skills: ["Photoshop", "Illustrator", "Excel", "Word"]
      }
    ]
  }

  return (
    <section id="education" className="lg:py-20 py-12 bg-white">
      <div className="lg:px-6">
        <div className={`text-center mb-16 animate-on-scroll ${
          visibleElements.has('education') ? 'animate' : ''
        }`}>
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Education</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">
            Academic
            <span className="block font-black">Background</span>
          </h2>
        </div>

        <div className="lg:max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className={`animate-on-scroll ${
            visibleElements.has('education') ? 'animate' : ''
          }`}>
            {/* School Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale">
                <span className="text-3xl text-white">🎓</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light mb-2">{education.school}</h3>
              <p className="text-xl text-gray-600 font-medium">{education.course}</p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="flex items-center text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span className="text-sm font-medium">{education.period}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                    <path d="M20 10c0 6-10 12-10 12s-10-6-10-12a10 10 0 0 1 20 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="text-sm font-medium">{education.location}</span>
                </div>
              </div>
            </div>

            {/* Subjects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {education.subjects.map((subject, index) => (
                <div
                  key={subject.category}
                  className={`p-6 ${
                    visibleElements.has('education') ? 'animate' : ''
                  }`}>
                  <div className="mb-6 flex flex-row items-center gap-2 lg:flex-col lg:items-start lg:gap-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover-scale hover-rotate">
                        {index === 0 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="16 18 22 12 16 6"/>
                            <polyline points="8 6 2 12 8 18"/>
                        </svg>
                        )}
                        {index === 1 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                        )}
                    </div>
                    <h4 className="text-lg font-semibold text-black lg:mt-3">{subject.category}</h4>
                </div>

                  <div className="space-y-3">
                    {subject.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover-lift ${
                          visibleElements.has('education') ? 'animate-slideInLeft' : 'opacity-0 -translate-x-4'
                        }`} style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                        <span className="text-gray-700 font-medium">{skill}</span>
                        <div>
                            <FaCheckSquare className="text-gray-700 w-5 h-5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    {/* Timeline */}
    <div className={`bg-gray-50 w-full lg:mt-20 mt-10 py-20 animate-on-scroll ${
    visibleElements.has('education') ? 'animate' : ''
    }`}>
        <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

            <div className="space-y-12 sm:px-2">
            {[
                { year: "2018", title: "Started IT-Web Course", description: "Began comprehensive web development program" },
                { year: "2019", title: "Advanced Programming", description: "Mastered PHP, JavaScript, and modern web technologies" },
                { year: "2020", title: "Graduation", description: "Completed course with strong foundation in web development" }
            ].map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                    {index % 2 === 0 && (
                    <div className={`animate-on-scroll ${
                        visibleElements.has('education') ? 'animate' : ''
                    }`}>
                        <h4 className="text-xl font-semibold text-black">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                    </div>
                    )}
                </div>

                <div className="relative z-10 w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center hover-scale">
                    <span className="font-bold text-sm">{milestone.year}</span>
                </div>

                <div className="flex-1 text-left pl-8">
                    {index % 2 === 1 && (
                    <div className={`animate-on-scroll ${
                        visibleElements.has('education') ? 'animate' : ''
                    }`}>
                        <h4 className="text-xl font-semibold text-black">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    </section>
  )
}

export default Education