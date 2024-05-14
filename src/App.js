import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import About from './components/About/About.jsx';
import Education from './components/Education/Education.jsx';
import Experience from './components/Experience/Experience.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
