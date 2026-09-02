import "./App.css";

const projects = [
  {
    title: "Task Manager",
    description: "A responsive task-management app built with React.",
    technologies: "React, CSS, Local Storage",
    github: "https://github.com/YOUR-USERNAME/task-manager",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app that displays current conditions for a city.",
    technologies: "React, API, CSS",
    github: "https://github.com/YOUR-USERNAME/weather-dashboard",
    demo: "https://example.com",
  },
];

function App() {
  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <a className="logo" href="#home">YN.</a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="home" className="hero-content container">
          <p className="eyebrow">HELLO, I AM</p>
          <h1>Your Name</h1>
          <p className="hero-text">
            A beginner web developer building thoughtful, responsive websites
            with React.
          </p>

          <div className="hero-buttons">
            <a className="button primary" href="#projects">View my work</a>
            <a
              className="button secondary"
              href="https://github.com/YOUR-USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="section container">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Creating simple and useful web experiences.</h2>
          <p className="section-text">
            I am Your Name, a web developer interested in building clean,
            accessible, and responsive websites. I am currently learning React,
            JavaScript, and modern frontend development.
          </p>

          <div className="skills">
            {["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"].map(
              (skill) => <span key={skill}>{skill}</span>
            )}
          </div>
        </section>

        <section id="projects" className="section section-dark">
          <div className="container">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects</h2>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">Project preview</div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="technologies">{project.technologies}</p>

                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Code ↗
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live demo ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let’s work together.</h2>
          <p className="section-text">
            Have a question or want to collaborate? Send me an email.
          </p>
          <a className="button primary" href="mailto:youremail@example.com">
            Email me
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Your Name. Built with React.</p>
      </footer>
    </>
  );
}

export default App;