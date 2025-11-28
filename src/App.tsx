import { Mail, Phone, Moon, Sun, Cpu, Radio, Gauge, CircuitBoard, Code2, Navigation, Compass } from 'lucide-react';
import { 
  SiCplusplus, SiOracle, SiPython, SiKotlin, SiJavascript, SiPostgresql, SiMysql,
  SiReact, SiNodedotjs, SiPandas, SiScikitlearn, SiAndroid, SiJetpackcompose,
  SiGit, SiGithub, SiSupabase, SiAppwrite, SiArduino, SiFigma,
  SiEspressif, SiLinkedin, SiX, SiMedium, SiTryhackme
} from 'react-icons/si';
import { useState } from 'react';
import portraitPhoto from './assets/portrait.jpg';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const skillsData = {
    Languages: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: SiOracle },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
    'Frameworks & Libraries': [
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'JDBC', icon: SiOracle },
      { name: 'Android SDK', icon: SiAndroid },
      { name: 'Jetpack Compose', icon: SiJetpackcompose },
    ],
    'Developer Tools': [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: Code2 },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Appwrite', icon: SiAppwrite },
      { name: 'Arduino IDE', icon: SiArduino },
      { name: 'Figma', icon: SiFigma },
    ],
    'Hardware & IoT': [
      { name: 'ESP32', icon: SiEspressif },
      { name: 'Arduino Uno', icon: SiArduino },
      { name: 'MPU6050', icon: Gauge },
      { name: 'LoRa Module', icon: Radio },
      { name: 'SIM800L', icon: CircuitBoard },
      { name: 'MAX302', icon: Cpu },
      { name: 'Neo-6M GPS', icon: Navigation },
    ]
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-8 py-12 md:px-12 lg:px-16">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-8">
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
            <div className={`text-sm leading-relaxed transition-colors duration-300 animate-fade-in ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ animationDelay: '100ms' }}>
              <p>
                Hi, I'm Swayam — I like building things that mix software, hardware, and intelligence.
                Sometimes they work on the first try. Usually… they don't, but that's part of the fun.
              </p>
            </div>

            {/* Summary */}
            <section className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className={`uppercase tracking-wide opacity-70 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Summary</h2>
              <div className={`space-y-3 text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <p>
                  Computer science student who spends way too much time with backend systems, AI models, IoT boards, and occasionally debugging things that I swear worked yesterday.
                </p>
                <p>
                  When I'm not wiring sensors or experimenting with distributed systems, I'm producing music and DJ'ing — because even developers deserve a beat drop or two.
                </p>
                <p>
                  Winner of <span className="font-bold">Cybervault CTF 1.0</span>, 4th Place at <span className="font-bold">IoT Lab CTF</span> (Solo), Global Rank 261 at <span className="font-bold">Shaastra CTF 2025</span>
                </p>
                <p>
                  I love solving real-world problems through code, designing systems that scale, and building high-impact projects for hackathons and CTFs.
                </p>
                <p>
                  Still trying to make something meaningful with my code (and hopefully fewer segfaults).
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h2 className={`uppercase tracking-wide opacity-70 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
              <div className="space-y-5">
                {/* Project 1 */}
                <div className={`space-y-1 border-3 p-4 shadow-[4px_4px_0px_0px] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px] ${
                  isDarkMode 
                    ? 'border-white bg-black shadow-white hover:shadow-white' 
                    : 'border-black bg-white shadow-black hover:shadow-black'
                }`}>
                  <h3 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Spend Wise — AI-Powered Personal Finance CLI</h3>
                  <p className={`text-xs opacity-70 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>C++, Python, MySQL</p>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>AI-powered finance tracker with ML predictions and generative AI suggestions.</p>
                </div>

                {/* Project 2 */}
                <div className={`space-y-1 border-3 p-4 shadow-[4px_4px_0px_0px] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px] ${
                  isDarkMode 
                    ? 'border-white bg-black shadow-white hover:shadow-white' 
                    : 'border-black bg-white shadow-black hover:shadow-black'
                }`}>
                  <h3 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Smart Mountain Climber Helmet</h3>
                  <p className={`text-xs opacity-70 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>ESP32, LoRa, GPS</p>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Wearable IoT safety system with vitals monitoring and emergency alerts.</p>
                </div>

                {/* Project 3 */}
                <div className={`space-y-1 border-3 p-4 shadow-[4px_4px_0px_0px] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px] ${
                  isDarkMode 
                    ? 'border-white bg-black shadow-white hover:shadow-white' 
                    : 'border-black bg-white shadow-black hover:shadow-black'
                }`}>
                  <h3 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Decentralized Supply Chain Tracker</h3>
                  <p className={`text-xs opacity-70 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Solidity, Foundry, React.js</p>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Blockchain-based product tracking platform with role-based smart contracts.</p>
                </div>

                {/* Project 4 */}
                <div className={`space-y-1 border-3 p-4 shadow-[4px_4px_0px_0px] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_0px] ${
                  isDarkMode 
                    ? 'border-white bg-black shadow-white hover:shadow-white' 
                    : 'border-black bg-white shadow-black hover:shadow-black'
                }`}>
                  <h3 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Delivery Service Engine (Backend System)</h3>
                  <p className={`text-xs opacity-70 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Java, JDBC, PostgreSQL</p>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>A complete backend architecture for an online food delivery platform.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Photo & Skills */}
          <div className="space-y-12">
            {/* Photo */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className={`w-full max-w-sm border-3 aspect-square overflow-hidden transition-all duration-300 shadow-[6px_6px_0px_0px] hover:shadow-[8px_8px_0px_0px] ${
                isDarkMode 
                  ? 'border-white shadow-white hover:shadow-white' 
                  : 'border-black shadow-black hover:shadow-black'
              }`}>
                <img 
                  src={portraitPhoto} 
                  alt="Swayam Mishra" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Skills */}
            <section className="space-y-5 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h2 className={`uppercase tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Skills</h2>
              <div className="space-y-6">
                {Object.entries(skillsData).map(([category, skills]) => {
                  const isLanguage = category === 'Languages';
                  
                  return (
                    <div key={category} className="space-y-3">
                      <h3 className={`text-xs uppercase tracking-wider opacity-60 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {category === 'Languages' ? 'LANGUAGES' : 
                         category === 'Frameworks & Libraries' ? 'FRAMEWORKS & LIBRARIES' :
                         category === 'Developer Tools' ? 'DEVELOPER TOOLS' :
                         'HARDWARE & IOT'}
                      </h3>
                      <div className={`flex flex-wrap ${isLanguage ? 'gap-2' : 'gap-2.5'} gap-y-3`}>
                        {skills.map((skill) => {
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
            <h2 className={`uppercase tracking-wide mb-5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact & Socials</h2>
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
