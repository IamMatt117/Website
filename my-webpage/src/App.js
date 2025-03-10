import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/App.css';
import linkedin from './images/Linkedin.png';
import linkedinRed from './images/linkedinRed.png';
import email from './images/email.png'
import emailRed from './images/emailRed.png'
import gitlab from './images/gitlab.png'
import gitlabHover from './images/gitlabHover.png'
import resume from './images/Resume-cropped.svg'
import SidePanel from './components/sidepanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faVuejs, 
  faBootstrap, 
  faNodeJs, 
  faJava, 
  faPython, 
  faGitAlt,
  faFigma,
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faD, faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons';

library.add(
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faVuejs, 
  faBootstrap, 
  faNodeJs, 
  faJava, 
  faPython, 
  faGitAlt,
  faDatabase,
  faGithub,
  faLinkedin,
  faInstagram,
  faEnvelope
)

function App() {
  const [hover, setHover] = useState(false);
  const [skillsBackground, setSkillsBackground] = useState('linear-gradient(135deg, #000022 0%, #E28413 100%)');
  const [activeIndices, setActiveIndices] = useState([0, 0]); // Track active image for each carousel
  const projectsRef = useRef(null);
  const carouselRefs = useRef([]);

  const handleSkillHover = (skillName) => {
    const gradients = {
      html5: 'linear-gradient(135deg,rgb(77, 26, 15) 0%, #F16529 100%)',
      css3: 'linear-gradient(135deg,rgb(2, 9, 36) 0%, #2965F1 100%)',
      javascript: 'linear-gradient(135deg,rgb(80, 71, 17) 0%, #F7DF1E 100%)',
      react: 'linear-gradient(135deg,rgb(7, 63, 65) 0%, #00D8FF 100%)',
      vue: 'linear-gradient(135deg, #42B883 0%,rgb(15, 45, 78) 100%)',
      tailwind: 'linear-gradient(135deg,rgb(2, 22, 31) 0%, #0EA5E9 100%)',
      bootstrap: 'linear-gradient(135deg, #7952B3 0%, #563D7C 100%)',
      nodejs: 'linear-gradient(135deg, #539E43 0%, #68A063 100%)',
      java: 'linear-gradient(135deg,rgb(187, 69, 33) 0%, #5382A1 100%)',
      python: 'linear-gradient(135deg, #3776AB 0%, #FFD43B 100%)',
      sql: 'linear-gradient(135deg,rgb(11, 39, 61) 0%, #4479A1 100%)',
      git: 'linear-gradient(135deg,rgb(58, 17, 10) 0%, #BD2C00 100%)'
    };
    setSkillsBackground(gradients[skillName] || 'linear-gradient(135deg, #000022 0%, #E28413 100%)');
  };

  const handleSkillLeave = () => {
    setSkillsBackground('linear-gradient(135deg, #000022 0%, #E28413 100%)');
  };

  // Updated Carousel functionality
  const handleCarousel = (direction, carouselIndex) => {
    const container = carouselRefs.current[carouselIndex];
    if (!container) return;

    const images = container.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    
    setActiveIndices(prevIndices => {
      const currentIndex = prevIndices[carouselIndex];
      const newIndex = direction === 'next'
        ? (currentIndex + 1) % totalImages
        : (currentIndex - 1 + totalImages) % totalImages;
      
      const newIndices = [...prevIndices];
      newIndices[carouselIndex] = newIndex;
      return newIndices;
    });
  };

  // GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // About section animations
    const aboutElements = document.querySelectorAll('#About h2, #About p, .about-image, .about-list li');
    aboutElements.forEach((element, index) => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 15%",
            scrub: 0.5
          }
        }
      );
    });

    // Skills section animations
    const skillsTitle = document.querySelector('#Skills h2');
    gsap.fromTo(skillsTitle,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsTitle,
          start: "top 85%",
          end: "top 15%",
          scrub: 0.5
        }
      }
    );

    const skillColumns = document.querySelectorAll('.skills-column');
    skillColumns.forEach((column, index) => {
      gsap.fromTo(column,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: column,
            start: "top 85%",
            end: "top 15%",
            scrub: 0.5
          }
        }
      );
    });

    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
      gsap.fromTo(badge,
        {
          opacity: 0,
          y: 20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: badge,
            start: "top 85%",
            end: "top 15%",
            scrub: 0.5
          }
        }
      );
    });

    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 15%",
            scrub: 0.5
          }
        }
      );
    });

    // Resume section animations
    gsap.fromTo('#Resume h2', 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '#Resume',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 0.5
        }
      }
    );

    // Create main timeline for experience section
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience-timeline',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.5
      }
    });

    // Animate the timeline line
    mainTl.fromTo('.experience-timeline::before',
      {
        scaleY: 0,
        transformOrigin: 'top'
      },
      {
        scaleY: 1,
        duration: 2,
        ease: "none"
      }
    );

    // Timeline items animation with stagger
    const experienceItems = gsap.utils.toArray('.experience-item');
    experienceItems.forEach((item, index) => {
      const itemTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'top 10%',
          scrub: 0.5
        }
      });

      // Dot animation
      itemTl.fromTo(item.querySelector('.timeline-dot'),
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(2)"
        }
      );

      // Content animation
      itemTl.fromTo(item.querySelector('.experience-content'),
        {
          x: -50,
          opacity: 0,
          scale: 0.8,
          transformOrigin: 'left center'
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        },
        "<+=0.1" // Start slightly after dot animation
      );

      // Add hover animations
      const content = item.querySelector('.experience-content');
      const dot = item.querySelector('.timeline-dot');
      
      content.addEventListener('mouseenter', () => {
        gsap.to(content, {
          scale: 1.02,
          x: 10,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(dot, {
          scale: 1.3,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      content.addEventListener('mouseleave', () => {
        gsap.to(content, {
          scale: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(dot, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Download button animation
    gsap.fromTo('.download-button',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.download-button',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 0.5
        }
      }
    );

    // Auto-advance carousel (existing code)
    const intervals = [];
    carouselRefs.current.forEach((container, index) => {
      if (container) {
        const interval = setInterval(() => {
          handleCarousel('next', index);
        }, 5000);
        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  // Effect to handle carousel transitions
  useEffect(() => {
    carouselRefs.current.forEach((container, carouselIndex) => {
      if (!container) return;
      
      const images = container.querySelectorAll('.carousel-image');
      images.forEach((image, imageIndex) => {
        if (imageIndex === activeIndices[carouselIndex]) {
          gsap.to(image, {
            opacity: 1,
            duration: 0.3
          });
          image.classList.add('active');
        } else {
          gsap.to(image, {
            opacity: 0,
            duration: 0.3
          });
          image.classList.remove('active');
        }
      });
    });
  }, [activeIndices]);

  useEffect(() => {
    document.title = "Matthew Mahon";

    const words = ["Software Development", "Quality Assurance", "Web Development", "Mobile Development"];
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 100;
    const delayBetweenWords = 1000;

    const type = () => {
      const element = document.querySelector('.typing');
      if (!element) return;

      if (isDeleting) {
        currentWord = words[i].substring(0, j--);
      } else {
        currentWord = words[i].substring(0, j++);
      }

      element.textContent = currentWord;

      if (!isDeleting && j === words[i].length) {
        setTimeout(() => isDeleting = true, delayBetweenWords);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }

      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    };

    type();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var panels = gsap.utils.toArray(".panel");
    panels.pop();
    
    panels.forEach((panel, i) => {
      
      // Get the element holding the content inside the panel
      let innerpanel = panel.querySelector(".panel-content");
      
      // Get the Height of the content inside the panel
      let panelHeight = innerpanel.offsetHeight;
      
      // Get the window height
      let windowHeight = window.innerHeight;
      
      let difference = panelHeight - windowHeight;
      
      // ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling. We know that the scale & fade should happen over the course of 1 windowHeight, so we can figure out the ratio based on how far we must fake-scroll
      let fakeScrollRatio = difference > 0 ? (difference / (difference + windowHeight)) : 0;
      
      // if we need to fake scroll (because the panel is taller than the window), add the appropriate amount of margin to the bottom so that the next element comes in at the proper time.
      if (fakeScrollRatio) {
        panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
      }
      
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger: panel,
          start: "bottom bottom",
          end: () => fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top",
          pinSpacing: false,
          pin: true,
          scrub: true
        }
      });
      
      // fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
      if (fakeScrollRatio) {
        tl.to(innerpanel, {y:-difference, duration: 1 / (1 - fakeScrollRatio) - 1, ease: "none"});
      }
      tl.fromTo(panel, {scale:1, opacity:1}, {scale: 0.5, opacity: 0.5, duration: 0.9})
        .to(panel, {opacity:0, duration: 0.1});
    });
  }, []);
  

  return (
    <div>
    <SidePanel/>
      <div className="App">
        <header className="App-header">
          <div className='header-content' style={{textAlign: 'center'}}>
          <h1 style={{marginBottom: 0, zIndex: 1}}> Matthew Mahon </h1>
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
          <div className='wrapper'>
          <p className='typing'>Software Development / Quality Assurance</p>
          </div>
          </div>
          <img src={require('./images/grad.png')} className="header-image" alt="logo" />
        </header>
      </div>
      <body>
      <section id='About' className="About">
        <h2 style={{ color: '#000022' }}>About Me</h2>
        <p>I'm Matthew Mahon, a passionate Software Developer with a strong background in building scalable, efficient, and user-friendly applications.
          I have experience working with Java, Python, HTML, CSS, JavaScript, React, and I'm skilled in Agile methodologies, UX design, and full software development lifecycle.
          I have completed a Bachelor of Science in Computing for Business in DCU, where I learned important skills in teamwork, time management, and delivering projects on time.
          There I worked on projects which taught me RESTful APIs, Object-Oriented Programming, and Database Design.</p>
        <p style={{marginTop: '-20px'}}>During my time as a Software Development Intern at General Motors, I collaborated with cross-functional teams to develop and deploy applications on Azure, debug issues, and create reusable components for future projects. 
          My approach to coding is rooted in clean, maintainable code that ensures long-term stability and scalability.
          Beyond development, I thrive in team environments, working closely with designers, product owners, and stakeholders to bring ideas to life. 
          My passion for problem-solving and innovation drives me to continuously improve and stay ahead in the ever-evolving tech landscape.</p>
          <div className="about-container">
          <img src={require('./images/Suit.png')} className="about-image" alt="logo" />
          <ul className="about-list">
            <li><i class="bi bi-chevron-right"></i><b>Birthday:</b> 2 May 2000</li>
            <li><i class="bi bi-chevron-right"></i><b>Age:</b> 25</li>
            <li><i class="bi bi-chevron-right"></i><b>Degree:</b> Bachelor of Science</li>
            <li><i class="bi bi-chevron-right"></i><b>Phone:</b> +353 87 633 0746</li>
            <li><i class="bi bi-chevron-right"></i><b>Email:</b> matthewmahon@rocketmail.com</li>
            <li><i class="bi bi-chevron-right"></i><b>City:</b> Dublin, Ireland</li>
          </ul>
        </div>
      </section>
      <section id='Skills' className="Skills" style={{ background: skillsBackground }}>
        <h2 style={{ color: '#ddd' }}>Skills</h2>
        <div className="skills-container">
          <div className="skills-column">
            <h3>Frontend</h3>
            <div className="skill-badges">
              <div className="skill-badge" 
                onMouseEnter={() => handleSkillHover('html5')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon html5"><FontAwesomeIcon icon={faHtml5} /> HTML</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('css3')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon css3"><FontAwesomeIcon icon={faCss3Alt} /> CSS</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('javascript')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon javascript"><FontAwesomeIcon icon={faJs} /> JavaScript</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('react')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon react"><FontAwesomeIcon icon={faReact} /> React</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('vue')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon vue"><FontAwesomeIcon icon={faVuejs} /> Vue</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('tailwind')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon tailwind"><svg className="skill-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6C7.6 6 5.4 8.8 5.4 8.8L7.8 9.6C7.8 9.6 9 7.8 12 7.8C14.4 7.8 15.6 9 15.6 10.2C15.6 12 13.8 12 10.2 13.2C7.2 14.2 4.8 15.8 4.8 19C4.8 21.8 7 24 10.2 24C13.8 24 15 21.6 15 21.6L12.6 20.8C12.6 20.8 11.4 22.2 10.2 22.2C8.4 22.2 7.8 20.8 7.8 19.8C7.8 18.2 9 17.4 12 16.4C15.6 15.2 18.6 14 18.6 10.2C18.6 7.2 16.2 6 12 6Z"/></svg> Tailwind</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('bootstrap')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon bootstrap"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</span></span>
              </div>
            </div>
          </div>
          
          <div className="skills-column">
            <h3>Backend</h3>
            <div className="skill-badges">
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('nodejs')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon nodejs"><FontAwesomeIcon icon={faNodeJs} /> Node.js</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('java')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon java"><FontAwesomeIcon icon={faJava} /> Java</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('python')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon python"><FontAwesomeIcon icon={faPython} /> Python</span></span>
              </div>
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('sql')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon sql"><FontAwesomeIcon icon={faDatabase} /> SQL</span></span>
              </div>
            </div>
          </div>
          
          <div className="skills-column">
            <h3>Tools</h3>
            <div className="skill-badges">
              <div className="skill-badge"
                onMouseEnter={() => handleSkillHover('git')}
                onMouseLeave={handleSkillLeave}>
                <span><span className="skill-icon git"><FontAwesomeIcon icon={faGitAlt} /> Git</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
          <section id='Projects' className="Projects">
            <h2>My Projects</h2>
            <div className="project-container">
              <div className="project-card">
                <div className="project-image">
                  <div className="carousel">
                    <div className="carousel-container" ref={el => carouselRefs.current[0] = el}>
                      <img src={require('./images/RoadReady/Home.png')} alt="1" className={`carousel-image ${activeIndices[0] === 0 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/SignIn.png')} alt="2" className={`carousel-image ${activeIndices[0] === 1 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/SignUp.png')} alt="3" className={`carousel-image ${activeIndices[0] === 2 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/Sidepanel.png')} alt="3" className={`carousel-image ${activeIndices[0] === 3 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/TheoryTest.png')} alt="3" className={`carousel-image ${activeIndices[0] === 4 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/QuestionCorrect.png')} alt="3" className={`carousel-image ${activeIndices[0] === 5 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/MockTest.png')} alt="3" className={`carousel-image ${activeIndices[0] === 6 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/LeavingWarning.png')} alt="3" className={`carousel-image ${activeIndices[0] === 7 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/TestPass.png')} alt="3" className={`carousel-image ${activeIndices[0] === 8 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/TestHistory.png')} alt="3" className={`carousel-image ${activeIndices[0] === 9 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/TestCenter.png')} alt="3" className={`carousel-image ${activeIndices[0] === 10 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadReady/Instructor.png')} alt="3" className={`carousel-image ${activeIndices[0] === 11 ? 'active' : ''}`}/>
                    </div>
                    <button className="carousel-button prev" onClick={() => handleCarousel('prev', 0)}>❮</button>
                    <button className="carousel-button next" onClick={() => handleCarousel('next', 0)}>❯</button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Road Ready App</h3>
                  <p className="project-description">
                    A Mobile App designed to create a one stop place to study for the Driving/Theory Test. Features include Learning Material, Theory Questionnaire with feedback, and a tool with prebuilt test routes.                  </p>
                  <div className="project-tech">
                    <span className="tech-badge"><FontAwesomeIcon icon={faReact} /> React Native</span>
                    <span className="tech-badge"><img src={require('./images/firebase.png')} alt="Firebase" className="tech-icon" /> Firebase</span>
                    <span className="tech-badge"><FontAwesomeIcon icon={faFigma} />Figma</span>
                    <span className="tech-badge"><FontAwesomeIcon icon={faHtml5} />HTML</span>
                    <span className="tech-badge"><FontAwesomeIcon icon={faCss3Alt} />CSS</span>
                    <span className="tech-badge"><FontAwesomeIcon icon={faJs} />JavaScript</span>
                  </div>
                  <div className="project-links">
                    <a href="https://gitlab.com/group7-big-haul/The_Big_Haul" className="project-link primary">
                      <FontAwesomeIcon icon={faGithub} /> View Code
                    </a>
                    {/* <a href="#" className="project-link secondary">
                      <FontAwesomeIcon icon={faLink} /> Live Demo
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="carousel">
                    <div className="carousel-container" ref={el => carouselRefs.current[1] = el}>
                      <img src={require('./images/RoadWeb/Home1.png')} alt="Django Web App" className={`carousel-image ${activeIndices[1] === 0 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Home2.png')} alt="Django Web App 2" className={`carousel-image ${activeIndices[1] === 1 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Home3.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 2 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Home4.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 3 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Login.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 4 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Pricing.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 5 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/OrderComplete.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 6 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/OrderHistory.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 7 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Timetable.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 8 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Contact.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 9 ? 'active' : ''}`}/>
                      <img src={require('./images/RoadWeb/Profile.png')} alt="Django Web App 3" className={`carousel-image ${activeIndices[1] === 10 ? 'active' : ''}`}/>
                    </div>
                    <button className="carousel-button prev" onClick={() => handleCarousel('prev', 1)}>❯</button>
                    <button className="carousel-button next" onClick={() => handleCarousel('next', 1)}>❮</button>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Road Ready Web App</h3>
                  <p className="project-description">
                    A simple Web App designed using Django, showcasing modern web development practices and clean architecture.
                  </p>
                  <div className="project-tech">
                    <span className="tech-badge"><FontAwesomeIcon icon={faD} />Django</span>
                    <span className="tech-badge"><FontAwesomeIcon icon={faPython} />Python</span>
                    <span className="tech-badge"><FontAwesomeIcon icon={faDatabase} />Sqlite</span>
                    <span className="tech-badge"><FontAwesomeIcon icon={faBootstrap} />Bootstrap</span>
                  </div>
                  <div className="project-links">
                    <a href="https://gitlab.computing.dcu.ie/rawata2/2024-ca4094-rawata2-mahonm28" className="project-link primary">
                      <FontAwesomeIcon icon={faGithub} /> View Code
                    </a>
                    {/* <a href="#" className="project-link secondary">
                      <FontAwesomeIcon icon={faLink} /> Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        <section id='Resume' className="Resume">
            <div className="section-divider"></div>
            <h2>Experience</h2>
            <div className="download-button">
              <a href={require("./CV/MatthewMahonCV.pdf")} download="MatthewMahonCV.pdf">
                <span className="download-icon">⬇</span> Download Resume
              </a>
            </div>
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="timeline-dot"></div>
                <div className="experience-content">
                  <h3>Frontend Developer</h3>
                  <p className="date">Dec 2024 - PRESENT</p>
                  <p className="description">
                    I build responsive, modern websites and reusable UI components for clients using Next.js and Tailwind CSS, focusing 
                    on clean design and seamless user experiences. Collaborate with the team to implement user-friendly features and 
                    designs.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <div className="timeline-dot"></div>
                <div className="experience-content">
                  <h3>Software Developer Intern</h3>
                  <p className="date">JAN 2023 - AUG 2023</p>
                  <p className="description">
                    During my summer internship as a Software Developer, I engaged in converting Figma designs into reusable 
                    components for websites and developing maintainable code. I Designed and developed interactive web applications using HTML, CSS, JavaScript, and React, 
                    ensuring seamless user experiences and responsiveness across devices. I Worked closely with product owners, designers, and developers, 
                    following Agile methodologies to rapidly iterate from prototyping to final implementation.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <div className="timeline-dot"></div>
                <div className="experience-content">
                  <h3>Started Learning Web Development</h3>
                  <p className="date">DEC 2022</p>
                  <p className="description">
                    My web development journey began with learning HTML, CSS, and Javascript. I started building small projects and 
                    learning the basics of web development.
                  </p>
                </div>
              </div>
            </div>
        </section>
        <section id='Contact' className="Contact">
          <div className="footer-container">
            <div className="footer-left">
              <h2>Contact</h2>
              <p className="footer-credit">Designed & Built by Matthew Mahon © 2024</p>
            </div>
            <div className="footer-center">
              <div className="social-links">
                <a href="https://github.com/IamMatt117" className="social-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/matthew-mahon-29a768297/" className="social-link">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              </div>
            </div>
            <div className="footer-right">
              <a href="mailto:matthewmahon@rocketmail.com" className="mail-button">
                <FontAwesomeIcon icon="envelope" /> Mail me
              </a>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
