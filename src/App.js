import './App.css';
import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/vendor/nucleo/css/nucleo.css";
import "../src/styles/vendor/font-awesome/css/font-awesome.min.css";
import "../src/styles/argon-design-system-react.css";
import Greetings from './components/greeting';
import Proficiency from './components/Proficiency';
import Education from './components/Education';
import Experience from './components/Experience';

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
  return (
    <div>
      <Navigation></Navigation>
      <Greetings></Greetings>
      <Proficiency></Proficiency>
      <Education></Education>
      {/* <Experience></Experience> */}
      <Experience
        resumeExperience={resumeExperience}
        resumeBasicInfo={basicInfo}
      />
    </div>
  );
}

export default App;
