import { Mail, Phone, Moon, Sun, FileText } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX, SiMedium, SiTryhackme } from 'react-icons/si';
import { useState } from 'react';
import portraitPhoto from './assets/portrait.jpg';
import { skillsData, projectData } from './data';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-8 py-12 md:px-12 lg:px-16">
        {/* Top Right Controls: Resume + Dark Mode Toggle */}
        <div className="flex justify-end items-center mb-8 gap-3">
          <a 
            href="/resume.pdf" 
            download="Swayam_Mishra_Resume.pdf"
            className={`flex items-center gap-2 p-2 border-3 transition-all duration-200 
              hover:scale-105 active:scale-95 shadow-[3px_3px_0px_0px] ${
                isDarkMode 
                  ? 'border-white bg-black text-white hover:bg-white hover:text-black shadow-white' 
                  : 'border-black bg-white text-black hover:bg-black hover:text-white shadow-black'
              }`}
          >
            <FileText size={18} />
            <span className="text-sm">Resume</span>
          </a>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 border-3 transition-all duration-200 hover:scale-110 active:scale-95 shadow-[3px_3px_0px_0px] ${
              isDarkMode 
                ? 'border-white bg-black text-white hover:bg-white hover:text-black shadow-white' 
                : 'border-black bg-white text-black hover:bg-black hover:text-white shadow-black'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Header */}
            <header className="animate-fade-in">
              <div className={`text-6xl tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>SM</div>
            </header>

            {/* Intro */}
            <div
              className={`text-sm leading-relaxed transition-colors duration-300 animate-fade-in ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
              style={{ animationDelay: '100ms' }}
            >
              <p>
                Hi, I'm Swayam — I like building things that mix software, hardware, and intelligence.
                Sometimes they work on the first try. Usually… they don't, but that's part of the fun.
              </p>
            </div>

            {/* Summary */}
            <section className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2
                className={`uppercase tracking-wide opacity-70 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                Summary
              </h2>
              <div
                className={`space-y-3 text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                <p>
                  Computer science student who spends way too much time with backend systems, AI models, IoT boards, and
                  occasionally debugging things that I swear worked yesterday.
                </p>
                <p>
                  When I'm not wiring sensors or experimenting with distributed systems, I'm producing music and DJ'ing — because
                  even developers deserve a beat drop or two.
                </p>
                <p>
                  Winner of <span className="font-bold">Cybervault CTF 1.0</span>, 4th Place at{' '}
                  <span className="font-bold">IoT Lab CTF</span> (Solo), Global Rank 261 at{' '}
                  <span className="font-bold">Shaastra CTF 2025</span>
                </p>
                <p>
                  I love solving real-world problems through code, designing systems that scale, and building high-impact projects
                  for hackathons and CTFs.
                </p>
                <p>Still trying to make something meaningful with my code (and hopefully fewer segfaults).</p>
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h2
                className={`uppercase tracking-wide opacity-70 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                Projects
              </h2>
              <div className="space-y-5">
                {projectData.map((project, index) => (
                  <div
                    key={index}
                    className={`space-y-1 border-3 p-4 shadow-[4px_4px_0px_0px] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px] ${
                      isDarkMode
                        ? 'border-white bg-black shadow-white hover:shadow-white'
                        : 'border-black bg-white shadow-black hover:shadow-black'
                    }`}
                  >
                    <h3 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs opacity-70 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {project.tech}
                    </p>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {project.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Photo & Skills */}
          <div className="space-y-12">
            {/* Photo */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div
                className={`w-full max-w-sm border-3 aspect-square overflow-hidden transition-all duration-300 shadow-[6px_6px_0px_0px] hover:shadow-[8px_8px_0px_0px] ${
                  isDarkMode
                    ? 'border-white shadow-white hover:shadow-white'
                    : 'border-black shadow-black hover:shadow-black'
                }`}
              >
                <img src={portraitPhoto} alt="Swayam Mishra" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Skills */}
            <section className="space-y-5 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h2
                className={`uppercase tracking-wide transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skillsData).map(([category, skills]) => {
                  const isLanguage = category === 'Languages';
                  return (
                    <div key={category} className="space-y-3">
                      <h3
                        className={`text-xs uppercase tracking-wider opacity-60 transition-colors duration-300 ${
                          isDarkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        {category === 'Languages'
                          ? 'LANGUAGES'
                          : category === 'Frameworks & Libraries'
                          ? 'FRAMEWORKS & LIBRARIES'
                          : category === 'Developer Tools'
                          ? 'DEVELOPER TOOLS'
                          : 'HARDWARE & IOT'}
                      </h3>
                      <div className={`flex flex-wrap ${isLanguage ? 'gap-2' : 'gap-2.5'} gap-y-3`}>
                        {skills.map((skill: any) => {
                          const needsExtraPadding = skill.name === 'JDBC' || skill.name === 'Jetpack Compose';
                          const isNodeJs = skill.name === 'Node.js';
                          const needsLighterIcon = skill.name === 'Appwrite' || skill.name === 'Figma';

                          return (
                            <div
                              key={skill.name}
                              className={`flex items-center gap-2 border-3 text-xs transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[1px_1px_0px_0px] ${
                                isLanguage ? 'px-2 py-1.5' : needsExtraPadding ? 'px-3 py-1.5' : 'px-2.5 py-1.5'
                              } ${
                                isDarkMode
                                  ? 'bg-black text-white border-white hover:shadow-white'
                                  : 'bg-white text-black border-black hover:shadow-black'
                              }`}
                            >
                              <skill.icon
                                className={`flex-shrink-0 ${isNodeJs ? 'w-4 h-4' : 'w-5 h-5'} ${
                                  needsLighterIcon ? 'opacity-70' : ''
                                } ${isDarkMode ? 'text-white' : 'text-black'}`}
                              />
                              <span className="whitespace-nowrap">{skill.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        {/* Footer - Contact & Socials */}
        <footer className="mt-16 border-t-3 pt-8 pb-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className={`border-t-3 pt-8 ${isDarkMode ? 'border-white' : 'border-black'}`}>
            <h2
              className={`uppercase tracking-wide mb-5 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              Contact & Socials
            </h2>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#"
                className={`group flex items-center justify-center gap-2.5 px-4 py-2.5 border-3 text-sm min-w-[130px] transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
                  isDarkMode
                    ? 'bg-white text-black border-black hover:bg-gray-100'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
                onClick={e => {
                  e.preventDefault();
                  navigator.clipboard.writeText('swayammishra1504@gmail.com');
                  alert('Email ID copied to clipboard!');
                }}
              >
                <Mail className="w-5 h-5 stroke-[1.5]" />
                <span>Email</span>
              </a>
              <a
                href="#"
                className={`group flex items-center justify-center gap-2.5 px-4 py-2.5 border-3 text-sm min-w-[130px] transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
                  isDarkMode
                    ? 'bg-white text-black border-black hover:bg-gray-100'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
                onClick={e => {
                  e.preventDefault();
                  navigator.clipboard.writeText('+917067708007');
                  alert('Phone number copied to clipboard!');
                }}
              >
                <Phone className="w-5 h-5 stroke-[1.5]" />
                <span>Phone</span>
              </a>
              <a
                href="https://github.com/swayam-mishra"
                className={`group flex items-center justify-center gap-2.5 px-4 py-2.5 border-3 text-sm min-w-[130px] transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
                  isDarkMode
                    ? 'bg-white text-black border-black hover:bg-gray-100'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                <SiGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="www.linkedin.com/in/swayam-mishra15"
                className={`group flex items-center justify-center gap-2.5 px-4 py-2.5 border-3 text-sm min-w-[130px] transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
                  isDarkMode
                    ? 'bg-white text-black border-black hover:bg-gray-100'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                <SiLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/swayyaam"
                className={`group flex items-center justify-center gap-2.5 px-4 py-2.5 border-3 text-sm min-w-[130px] transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
                  isDarkMode
                    ? 'bg-white text-black border-black hover:bg-gray-100'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                <SiX className="w-5 h-5" />
                <span>X</span>
              </a>
              <a
                href="https://medium.com/@cowsyy"
                className={`group flex items-center justify-center gap-2.5 px-4 py-2.5 border-3 text-sm min-w-[130px] transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
                  isDarkMode
                    ? 'bg-white text-black border-black hover:bg-gray-100'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                <SiMedium className="w-5 h-5" />
                <span>Medium</span>
              </a>
              <a
                href="https://tryhackme.com/p/cowsy"
                className={`group flex items-center justify-center gap-2.5 px-4 py-2.5 border-3 text-sm min-w-[130px] transition-all duration-200 hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] ${
                  isDarkMode
                    ? 'bg-white text-black border-black hover:bg-gray-100'
                    : 'bg-white text-black border-black hover:bg-gray-100'
                }`}
              >
                <SiTryhackme className="w-5 h-5" />
                <span>TryHackMe</span>
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}