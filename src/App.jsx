import React, { useState, useEffect } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import foto from './assets/tu-foto.jpg'

function HomeSection({ isDarkMode }) {
  const cardStyle = {
    transition: 'margin 0.5s', // Agrega una transición suave al cambiar el tema
    marginTop: isDarkMode ? '40px' : '0', // Ajusta la cantidad de espacio según tus preferencias
  };
  const homeSectionClass = `home-section ${isDarkMode ? 'dark-theme' : ''}`;
  return (
    <section id='home' className={homeSectionClass} style={cardStyle}>
      <ProfileCard
        name={
          <span>
            Joshua <span style={{ color: '#508EEE' }}>Emil</span>
          </span>
        }
        role="Web developer"
        imageUrl={foto}
        socialLinks={[
          { name: 'Instagram', url: 'https://www.instagram.com/joshua.epr/' },
          { name: 'GitHub', url: 'https://github.com/JoshuaDevs-E' },
          { name: 'Threads', url: 'https://www.threads.net/@joshua.epr' },
        ]}
        isDarkMode={isDarkMode}
      />
    </section>
  );
}

function AboutSection() {
  return (
    <section id='about'>
      <h2>About <span style={{ color: '#508EEE' }}>Me</span></h2>
      <p>👏I am a web developer with experience in both front-end and back-end. I am passionate about creating interactive and dynamic web applications using the latest technologies and tools.</p>
    </section>
  );
}
function PortfolioSection({ isDarkMode }) {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description of my first project. It involves creating a web application using React and integrating with a backend server built with Node.js.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#project1',
    },
    {
      title: 'Project 2',
      description: 'Here is the second project in my portfolio. It\'s a mobile app developed using React Native and has features like authentication and data storage.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id='portfolio' className={isDarkMode ? 'dark-theme' : ''}>
      <h2 className='h2'>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className={`portfolio-item ${isDarkMode ? 'dark' : ''} container`} key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="item-content">
              <h3>{project.title}</h3>
              <p className='p1'>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



function SkillsSection() {
  return (
    <section id='skills'>
      <h2 className='h2'>Skills</h2>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <div className="skills-buttons">
          <button class="html-button"><i class="fab fa-html5"></i> HTML</button>
          <button class="css-button"><i class="fab fa-css3"></i> CSS</button>
          <button class="js-button"><i class="fab fa-js"></i> JavaScript</button>
          <button class="python-button"><i class="fab fa-python"></i> Python</button>
          <button className="flask-button"><i className="fas fa-pepper-hot"></i> Flask</button>
          <button class="mysql-button"><i class="fas fa-database"></i> MySQL</button>
          <button class="react-button"><i class="fab fa-react"></i> React</button>
          <button class="react-vite-button"><i class="fas fa-bolt"></i> React + Vite</button>
          <button class="git-button"><i class="fab fa-git-alt"></i> Git</button>
          <button class="figma-button"><i class="fab fa-figma"></i> Figma</button>
          <button class="bootstrap-button"><i class="fab fa-bootstrap"></i> Bootstrap</button>
          <button class="nodejs-button"><i class="fab fa-node-js"></i> Node.js</button>
          <button class="mongodb-button"><i class="fab fa-creative-commons-sa"></i> MongoDB</button>
          <button class="sqlite-button"><i class="fas fa-database"></i> SQLite</button>
          <button class="c-button">C</button>
      </div>
    </section>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}>
      <nav className='nav'>
        <ul className='ul' style={{ justifyContent: 'flex-end' }}>
          <li className='li'>
            <a className='a' href="#toggle-theme" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <i className="fas fa-lightbulb"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </a>
          </li>
          <li className='li'><a className='a' href="#skills">Skills</a></li>
          <li className='li'><a className="a" href="#portfolio">Portfolio</a></li>
          <li className='li'><a className='a' href="#about">About Me</a></li>
          <li className='li'><a className='a' href="#home">Home</a></li>
        </ul>
      </nav>
      <HomeSection isDarkMode={isDarkMode} />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
    </div>
  );
}

export default App;
