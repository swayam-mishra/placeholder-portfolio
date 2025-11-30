import { 
  SiCplusplus, SiOracle, SiPython, SiKotlin, SiJavascript, SiPostgresql, SiMysql,
  SiReact, SiNodedotjs, SiPandas, SiScikitlearn, SiAndroid, SiJetpackcompose,
  SiGit, SiGithub, SiSupabase, SiAppwrite, SiArduino, SiFigma,
  SiEspressif
} from 'react-icons/si';
import { Cpu, Radio, Gauge, CircuitBoard, Code2, Navigation } from 'lucide-react';

export const skillsData = {
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

export const projectData = [
  {
    title: "Spend Wise — AI-Powered Personal Finance CLI",
    tech: "C++, Python, MySQL",
    desc: "AI-powered finance tracker with ML predictions and generative AI suggestions."
  },
  {
    title: "Smart Mountain Climber Helmet",
    tech: "ESP32, LoRa, GPS",
    desc: "Wearable IoT safety system with vitals monitoring and emergency alerts."
  },
  {
    title: "Decentralized Supply Chain Tracker",
    tech: "Solidity, Foundry, React.js",
    desc: "Blockchain-based product tracking platform with role-based smart contracts."
  },
  {
    title: "Delivery Service Engine (Backend System)",
    tech: "Java, JDBC, PostgreSQL",
    desc: "A complete backend architecture for an online food delivery platform."
  }
];