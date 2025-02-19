import { useState, useEffect } from 'react';
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


function App() {
  const [hover, setHover] = useState(false);

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
      <section id='Skills' className="Skills">
        <h2>Skills</h2>
        <div className='grid-container'>
          <div class="skill-item">
            <div class="skill-name">HTML</div>
            <div class="skill-wrapper">
              <div class="skill html">100%</div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">Django</div>
            <div class="skill-wrapper">
              <div class="skill php">60%</div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">CSS</div>
            <div class="skill-wrapper">
              <div class="skill css">80%</div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">JavaScript</div>
            <div class="skill-wrapper">
              <div class="skill javascript">75%</div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">React</div>
            <div class="skill-wrapper">
              <div class="skill react">75%</div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">Python</div>
            <div class="skill-wrapper">
              <div class="skill python">85%</div>
            </div>
          </div>
        </div>
      </section>
          <h2 id='Projects' style={{textAlign: 'center', color: '#015761'}}>Projects</h2>
          <section id='Projects' className="Projects">
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
