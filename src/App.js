import './App.scss';
import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/vendor/nucleo/css/nucleo.css";
import "../src/styles/vendor/font-awesome/css/font-awesome.min.css";
import "../src/styles/argon-design-system-react.css";
import Greetings from './components/greeting';
import Proficiency from './components/Proficiency';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Menu from './components/Menu';
import {useState} from 'react';
import Projects from './components/Projects';

function App() {

  const resumeExperience = [
    {
      "company": "Commsult",
      "title": "Software Developer",
      "years": "10.2019 - present",
      "mainTech": [
        "React"
      ],
      "technologies": [
        "REST API",
        "Flutter",
        "JavaScript",
        "Bootstrap",
        "Angular Material",
        "SAPUI5",
        "Springboot",
        "Docker"
      ]
    },
    {
      "company": "10xers Company",
      "title": "Full-Stack Developer",
      "years": "02.2022 - 09.2022",
      "mainTech": [
        "React Native"
      ],
      "technologies": [
        "Firebase",
        "ReactJs",
        "Redux",
        "Twilio Segment"
      ]
    },
    {
      "company": "PT.Pro-Int Dinamika",
      "title": "Software Developer",
      "years": "08.2020 - 01.2021",
      "mainTech": [
        "C#",
      ],
      "technologies": [
        ".Net",
        "SQL",
        "JavaScript",
      ]
    },
  ]

  const basicInfo = {
    "description_header": "Hi",
    "description": "👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
    "section_name": {
      "about": "About me",
      "projects": "Projects",
      "skills": "Skills",
      "experience": "Experience"
    }
  }
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navigation>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Greetings></Greetings>
      <Skills></Skills>
      <Proficiency></Proficiency>
      <Education></Education>
      <Projects></Projects>
      <Experience
        resumeExperience={resumeExperience}
        resumeBasicInfo={basicInfo}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
