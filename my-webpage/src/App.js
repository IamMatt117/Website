import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './css/App.css';
import linkedin from './images/Linkedin.png';
import linkedinRed from './images/linkedinRed.png';
import email from './images/email.png'
import emailRed from './images/emailRed.png'
import gitlab from './images/gitlab.png'
import gitlabHover from './images/gitlabHover.png'
import resume from './images/Resume-cropped.svg'
import haul from './images/BigHaul.png'
import park from './images/park.jpg'
import road from './images/car.png'
import django from './images/Django.png'
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
  faGit,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

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
  faDatabase
)

function App() {
  const [hover, setHover] = useState(false);
  const [skillsBackground, setSkillsBackground] = useState('linear-gradient(135deg, #000022 0%, #E28413 100%)');

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
        <p>Hi my names Matthew. I'm a 23-year-old adventurer with a deep passion for the outdoors. I find solace in the wilderness, frequently embarking on hikes and camping expeditions to reconnect with nature. Beyond the landscapes, I'm a fierce competitor on the football field, displaying both skill and sportsmanship. With four years of programming experience under my belt, I've honed my technical prowess and problem-solving abilities. Currently, I am pursuing higher education at Dublin City University, where they're undoubtedly combining their love for technology with their academic pursuits to forge a promising future. This dynamic blend of outdoor enthusiasm, athletic prowess, and technical acumen makes me a multifaceted and driven individual.</p>
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
          <h2 id='Projects' style={{textAlign: 'center', color: '#015761'}}>Projects</h2>
          <section id='Projects' className="Projects">
          <div class="slides-wrapper">
<section class="panel">
	  <div class="panel-content"><h1>Section 1</h1>
	  </div>
</section>
<section class="panel section-2">
  <div class="panel-content height"><div class="dd"><h1>Section 2</h1>
    <p>This section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes inThis section is supposed to be long and scrollable within before the next slide comes in</p>
  </div></div>
</section>
<section class="panel section-3">
	  <div class="panel-content"><h1>Section 3</h1></div>
</section>
<section class="panel">
	  <div class="panel-content"><h1>Section 4</h1></div>
</section>
</div>

          <div className="container">
          <div className='item-a' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>The Big Haul</h3>
            <img style={{width: '25vw', margin: 'auto', padding: 'auto', display: 'block'}} src={haul}></img>
          </div>
          <div className='item-a-p' style={{background: '#F1F0F0', position: 'relative'}}>
            <p style={{margin: '10px'}}>Users are asked a series of questions that they have to answer.The first answer will earn the user $100. Correct answers from that point forward will double what's in the users bank. Each incorrect answer will remove a life. Failing the final round will result in a game over. The aim is to reach $500,000 with at least 1 life. You reach $500,000 if you earn the Big Haul by reaching the end. Losing 3 lives will cause the User to lose and the game ends. Each game holds a variety of rounds with each round being unique while keeping them dynamic to make sure not every game will play out the same as the previous one.</p>
            <a className='code-button' href="https://gitlab.com/group7-big-haul/The_Big_Haul" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>View Code</a>
            </div>
          <div className='item-b' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>Park at DCU</h3>
            <img src={park} style={{width: '30vw', margin: 'auto', padding: 'auto', display: 'block'}}></img>
            </div>
            <div className='item-b-p' style={{background: '#F1F0F0', position: 'relative'}}>
            <p>Struggling to park at DCU? This Web App retrieves available spaces from all DCU carparks and relays that information back to the user. Simply input the carpark you wish to use and the Web App will display the number of available spaces (if any).</p>
            <a className='code-button' href="https://gitlab.computing.dcu.ie/mahonm28/2023-ca377-mahonm28-parkatdcu" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>View Code</a>
          </div>
          <div className='item-c' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>Django Web App - In Progress</h3>
            <img src={django}style={{width: '25vw', margin: 'auto', padding: 'auto', display: 'block'}}></img>
            </div>
            <div className='item-c-p' style={{background: '#F1F0F0', position: 'relative'}}>
            <p>This is a simple Web App designed using Django.</p>
            <a className='code-button' href="https://gitlab.computing.dcu.ie/rawata2/2024-ca4094-rawata2-mahonm28" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>View Code</a>
          </div>
          <div className='item-d' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>Road Ready - In Progress</h3>
            <img src={road} style={{height: '25vw', margin: 'auto', padding: 'auto', display: 'block'}}></img>
            </div>
            <div className='item-d-p' style={{background: '#F1F0F0', position: 'relative'}}>
            <p>A Mobile App designed to create a one stop place to study for the Driving/Theory Test. The app hosts 3 main features. The first feature being Learning Material, a section containing any information a user might need about rules of the road. The second feature is a Theory Questionnaire with feedback, this feature is designed to allow the user to practice their knowledge for the Theory Test with feedback to help them improve on areas where they are weak. The last feature is a a tool with prebuilt test routes and ability to create new routes.</p>
            <a className='code-button' href="https://gitlab.computing.dcu.ie/mahonm28/2024-ca472-mahonm28-rawata2" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>View Code</a>
          </div>
          </div>
        </section>
        <section id='Resume' className="Resume">
            <h2 style={{color: '#015761'}}>Resume</h2>
          <div id='Resume' style={{background: '#F1F0F0'}}>
            <img className="cv" src={resume} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}></img>
          </div>
        </section>
        <section id='contact' className="Contact">
        <div style={{background: '#015761', color: 'white'}}>
          <h2 id='contact'>Contact Me</h2>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: '25%', marginRight: '25%' }}>
            <a href="https://www.linkedin.com/in/matthew-mahon-29a768297/">
              <img className='linkedin' src={linkedin} onMouseOver={e => {e.currentTarget.src = linkedinRed; setHover(true)}} onMouseOut={e => {e.currentTarget.src = linkedin; setHover(false)}} style={ hover ? {cursor: 'pointer'} : {cursor: 'default'}} />
            </a>
            
            <img className='linkedin' src={email} onClick={() => window.location = 'mailto:matthewmahon@rocketmail.com'} onMouseOver={e => {e.currentTarget.src = emailRed; setHover(true)}} onMouseOut={e => {e.currentTarget.src = email; setHover(false)}} style={ hover ? {cursor: 'pointer'} : {cursor: 'default'}}></img>
            <a href="https://gitlab.computing.dcu.ie/dashboard/projects">
              <img className='linkedin' src={gitlab} onMouseOver={e => {e.currentTarget.src = gitlabHover; setHover(true)}} onMouseOut={e => {e.currentTarget.src = gitlab; setHover(false)}} style={ hover ? {cursor: 'pointer'} : {cursor: 'default'}}></img>
            </a>
          </div>
        </div>
        </section>
      </body>
    </div>
  );
}

export default App;
