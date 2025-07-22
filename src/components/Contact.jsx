import { MailIcon, PhoneIcon, LocationIcon, GithubIcon, LinkedinIcon } from "./Icons"

function Contact({ visibleElements }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! I will get back to you soon.")
  }

  const contactInfo = [
    { icon: <MailIcon />, label: "Email", value: "coderexplorer21@email.com" },
    { icon: <PhoneIcon />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <LocationIcon />, label: "Location", value: "福岡, 日本" },
  ]

  return (
    <section id="contact" className="lg:py-20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${
          visibleElements.has('contact') ? 'animate' : ''
        }`}>
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">
            Let's Create
            <span className="block font-black">Something Great</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 animate-on-scroll ${
            visibleElements.has('contact') ? 'animate' : ''
          }`}>
            <h3 className="text-2xl font-light">Let's connect</h3>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={contact.label} className={`flex items-center space-x-4 hover-lift transition-all duration-500 ${
                  visibleElements.has('contact') ? 'animate-slideInLeft' : 'opacity-0 -translate-x-8'
                }`}>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover-scale hover-rotate">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{contact.label}</div>
                    <div className="text-gray-600">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-black mb-4">Follow my journey</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover-scale hover-rotate ${
                    visibleElements.has('contact') ? 'animate-scaleIn' : 'opacity-0 scale-75'
                  }`}>
                  <GithubIcon />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover-scale hover-rotate ${
                    visibleElements.has('contact') ? 'animate-scaleIn' : 'opacity-0 scale-75'
                  }`}>
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover-lift animate-on-scroll ${
            visibleElements.has('contact') ? 'animate' : ''
          }`}>
            <h3 className="text-2xl font-light mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:border-gray-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 hover:border-gray-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-gray-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover-scale hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact