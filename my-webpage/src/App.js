import { useState, useEffect } from 'react';
import './App.css';
import linkedin from './images/Linkedin.png';
import linkedinRed from './images/linkedinRed.png';
import email from './images/email.png'
import emailRed from './images/emailRed.png'
import gitlab from './images/gitlab.png'
import gitlabHover from './images/gitlabHover.png'
import resume from './images/Resume-cropped.svg'


function App() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.title = "Portfolio"
 }, []);

  return (
    <div>
      <div className="App">
        <div className="navigation">
          <a className='nav1' href='#About'>About Me</a>
          <a className='nav2' href='#Projects'>Projects</a>
          <a className='nav3' href='#Resume'>Resume</a>
          <a className='nav4' href='#contact'>Contact Me</a>
        </div>
        <header className="App-header">
          <h1> Matthew Mahon </h1>
          <p style={{margin: '0px', fontSize: '2vmin', color: '#F7DC4F'}}>Software Development / Quality Assurance</p>
          <h2>4th year Enterprise Computing</h2>
        </header>
      </div>
      <body>
        <div id='About' className="About">
          <h3 style={{color: '#015761'}}>About Me</h3>
          <p>I code</p>
        </div>
          <h3 id='Projects' style={{textAlign: 'center', color: '#015761'}}>Projects</h3>
          <div>
          <div className='column-left' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>The Big Haul</h3>

          </div>
          <div className='column-right' style={{background: '#F1F0F0', position: 'relative'}}>
            <p style={{marginLeft: '10px'}}>Users are asked a series of questions that they have to answer.The first answer will earn the user $100. Correct answers from that point forward will double what's in the users bank. Each incorrect answer will remove a life. Failing the final round will result in a game over. The aim is to reach $500,000 with at least 1 life. You reach $500,000 if you earn the Big Haul by reaching the end. Losing 3 lives will cause the User to lose and the game ends. Each game holds a variety of rounds with each round being unique while keeping them dynamic to make sure not every game will play out the same as the previous one.</p>
            <a className='code-button' href="https://gitlab.com/group7-big-haul/The_Big_Haul" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>Veiw Code</a>
            </div>
          <div className='column-right' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>Park at DCU</h3>
            </div>
            <div className='column-left' style={{background: '#F1F0F0', position: 'relative'}}>
            <p>Struggling to park at DCU? This Web App retrieves available spaces from all DCU carparks and relays that information back to the user. Simply input the carpark you wish to use and the Web App will display the number of available spaces (if any).</p>
            <a className='code-button' href="https://gitlab.computing.dcu.ie/mahonm28/2023-ca377-mahonm28-parkatdcu" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>Veiw Code</a>
          </div>
          <div className='column-left' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>Django Web App - In Progress</h3>
            </div>
            <div className='column-right' style={{background: '#F1F0F0', position: 'relative'}}>
            <p>This is a simple Web App designed using Django.</p>
            <a className='code-button' href="https://gitlab.computing.dcu.ie/rawata2/2024-ca4094-rawata2-mahonm28" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>Veiw Code</a>
          </div>
          <div className='column-right' style={{background: '#015761', color: '#F7DC4F'}}>
            <h3>Road Ready - In Progress</h3>
            </div>
            <div className='column-left' style={{background: '#F1F0F0', position: 'relative'}}>
            <p>A Mobile App designed to create a one stop place to study for the Driving/Theory Test. The app hosts 3 main features. The first feature being Learning Material, a section containing any information a user might need about rules of the road. The second feature is a Theory Questionnaire with feedback, this feature is designed to allow the user to practice their knowledge for the Theory Test with feedback to help them improve on areas where they are weak. The last feature is a a tool with prebuilt test routes and ability to create new routes.</p>
            <a className='code-button' href="https://gitlab.computing.dcu.ie/mahonm28/2024-ca472-mahonm28-rawata2" style={{marginLeft: '10px', padding: '5px', bottom: '10px', position: 'absolute'}}>Veiw Code</a>
          </div>
            <h3 style={{color: '#015761'}}>Resume</h3>
          <div id='Resume' style={{background: '#F1F0F0'}}>
            <img className="cv" src={resume} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}></img>
          </div>
        </div>
        <div style={{background: '#015761', color: 'white'}}>
          <h3 id='contact'>Contact Me</h3>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: '25%', marginRight: '25%' }}>
            <img className='linkedin' src={linkedin} onMouseOver={e => {e.currentTarget.src = linkedinRed; setHover(true)}} onMouseOut={e => {e.currentTarget.src = linkedin; setHover(false)}} style={ hover ? {cursor: 'pointer'} : {cursor: 'default'}} />
            <img className='linkedin' src={email} onMouseOver={e => {e.currentTarget.src = emailRed; setHover(true)}} onMouseOut={e => {e.currentTarget.src = email; setHover(false)}} style={ hover ? {cursor: 'pointer'} : {cursor: 'default'}}></img>
            <img className='linkedin' src={gitlab} onMouseOver={e => {e.currentTarget.src = gitlabHover; setHover(true)}} onMouseOut={e => {e.currentTarget.src = gitlab; setHover(false)}} style={ hover ? {cursor: 'pointer'} : {cursor: 'default'}}></img>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
