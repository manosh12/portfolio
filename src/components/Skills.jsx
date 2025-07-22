import {
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaPhp, FaPython,
  FaAws, FaDatabase, FaGitAlt, FaGithub, FaGitlab,
  FaCode, FaServer, FaEye, FaFlask
} from 'react-icons/fa';
import { SiVuedotjs, SiTailwindcss, SiBootstrap, SiDjango, SiPostgresql } from 'react-icons/si';

function Skills({ visibleElements }) {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript ES6+", icon: <FaJs /> },
        { name: "React", icon: <SiVuedotjs /> },
        { name: "Vue.js", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend & Cloud",
      icon: <FaServer />,
      skills: [
        { name: "PHP/Laravel/CakePHP", icon: <FaPhp /> },
        { name: "Python/Django", icon: <><FaPython /> <SiDjango /></> },
        { name: "AWS", icon: <FaAws /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <FaGitAlt />,
      skills: [
        { name: "GitHub", icon: <FaGithub /> },
        { name: "GitLab", icon: <FaGitlab /> },
        { name: "VsCode", icon: <FaCode /> },
        { name: "Monitoring", icon: <FaEye /> },
        { name: "Testing", icon: <FaFlask /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${
          visibleElements.has('skills') ? 'animate' : ''
        }`}>
          <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Skills & Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light mt-2">
            Technical
            <span className="block font-black">Arsenal</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`bg-white p-6 pb-12 rounded-2xl border border-gray-200 hover:shadow-lg hover-lift transition-all duration-500 animate-on-scroll ${
                visibleElements.has('skills') ? 'animate' : ''
              }`}
            >
              <div className='mb-6 flex flex-row items-center gap-2 lg:flex-col lg:items-start lg:gap-0'>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover-scale hover-rotate text-2xl">
                    {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-black lg:mt-4">{category.title}</h3>
              </div>
              <div className="space-y-4 mt-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className={`flex justify-between items-center" ${
                        visibleElements.has('skills') ? 'animate-slideInLeft' : 'opacity-0 -translate-x-4'
                      }`} style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-gray-500">{skill.icon}</span>
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;