import React, { useState, useEffect } from 'react';
import '../css/sidepanel.css'; // Make sure to create a corresponding CSS file for styling



const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');


  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    // Check if we're at the bottom of the page
    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

    if (isAtBottom) {
      currentSection = 'Contact';
    } else {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
          currentSection = section.getAttribute('id');
        }
      });
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link><div className={`sidepanel ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={togglePanel}>
        {isOpen ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list"></i>}
      </button>
      <div className="content">
      <img className="profile" src={require('../images/sidepanel/smile.png')} alt="profile" />
      <h2>Matthew Mahon</h2>
        <div class="socials">
          <a href="https://www.linkedin.com/in/matthew-mahon-a04648232/" class="social-btn"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/IamMatt117" class="social-btn"><i class="bi bi-github"></i></a>
        </div>
        <ul>
            <li className={`btn-8 ${activeSection === 'Home' ? 'active' : ''}`}><a href="#Home"><span><i className="bi bi-house navicon"></i> Home</span></a></li>
            <li className={`btn-8 ${activeSection === 'About' ? 'active' : ''}`}><a href="#About"><span><i className="bi bi-person navicon"></i> About</span></a></li>
            <li className={`btn-8 ${activeSection === 'Projects' ? 'active' : ''}`}><a href="#Projects"><span><i className="bi bi-images navicon"></i> Projects</span></a></li>
            <li className={`btn-8 ${activeSection === 'Experience' ? 'active' : ''}`}><a href="#Experience"><span><i className="bi bi-file-earmark-text navicon"></i> Experience</span></a></li>
            <li className={`btn-8 ${activeSection === 'Contact' ? 'active' : ''}`}><a href="#Contact"><span><i className="bi bi-envelope navicon"></i> Contact</span></a></li>
          </ul>
      </div>
    </div></>
  );
};

export default SidePanel;