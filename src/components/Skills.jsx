import {
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaPhp,
  FaAws, FaDatabase, FaGithub, FaGitlab,
  FaCode, FaServer, FaEye, FaTools,
  FaLaravel,
  FaLinux,
  FaSourcetree
} from 'react-icons/fa';
import { SiVuedotjs, SiTailwindcss, SiBootstrap, SiDjango, SiPostgresql } from 'react-icons/si';
import data from '../data.json'

function Skills({ visibleElements }) {
  const skillCategories = data.skillCategories;

  const iconMap = {
    frontend : <FaCode />,
    js: <FaJs />,
    react: <FaReact />,
    vue: <SiVuedotjs />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    tailwind: <SiTailwindcss />,
    bootstrap: <SiBootstrap />,

    backend : <FaServer />,
    php: <FaPhp />,
    django: <SiDjango />,
    aws: <FaAws />,
    mysql: <FaDatabase />,
    postgresql: <SiPostgresql />,
    laravel: <FaLaravel />,
    linux : <FaLinux />,

    devops: <FaTools />,
    github: <FaGithub />,
    gitlab: <FaGitlab />,
    code: <FaCode />,
    server: <FaServer />,
    sourcetree : <FaSourcetree />,
    postman: <FaServer />,
  };

  return (
    <section id="skills" className="lg:py-20 sm:pt-12">
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
                key={category.id}
                className={`
                  bg-white p-6 pb-6 rounded-2xl border border-gray-200 hover:shadow-lg hover-lift transition-all duration-500 animate-on-scroll
                  ${visibleElements.has('skills') ? 'animate' : ''}
                  ${category.id == 2 ? 'shadow-lg' : ''}
                `}
              >
              <div className='mb-6 flex flex-row items-center gap-2 lg:flex-col lg:items-start lg:gap-0'>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover-scale hover-rotate text-2xl">
                    {iconMap[category.icon]}
                </div>
                <h3 className="text-xl font-semibold text-black lg:mt-4">{category.title}</h3>
              </div>
              <div className="space-y-4 mt-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className={`flex justify-between items-center" ${
                        visibleElements.has('skills') ? 'animate-slideInLeft' : 'opacity-0 -translate-x-4'
                      }`}>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-gray-500">{iconMap[skill.icon]}</span>
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