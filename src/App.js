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
import { useState } from 'react';
import Projects from './components/Projects';

function App() {

  const resumeExperience = [
    {
      "company": "DefOpenSource",
      "title": "Front-End Developer",
      "years": "10.2019 - present",
      "mainTech": [
        "Angular 8/9/10"
      ],
      "technologies": [
        "REST API",
        "RxJS",
        "JavaScript",
        "Bootstrap",
        "MDBootstrap",
        "EF Core",
        ".NET Core",
        "SignalR",
        "Angular Material"
      ]
    },
    {
      "company": "Serros Solutions",
      "title": "Intern",
      "years": "01.2018 - 09.2019",
      "mainTech": [
        "Angular 7/8"
      ],
      "technologies": [
        "RxJS",
        "Django",
        "PHP",
        "JavaScript",
        "DHTMLX Gantt"
      ]
    }
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
