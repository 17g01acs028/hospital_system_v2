import React, { useState } from 'react'
import About_Banner from '../assets/images/about-banner.png'

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="section about" id="about" aria-labelledby="about-label">
    <div className="container">

      <div className="about-content">

        <p className="section-subtitle title-lg has-after" id="about-label" data-reveal="left">About Us</p>

        <h2 className="headline-md" data-reveal="left">Reliable Solutions</h2>

        <p className="section-text" data-reveal="left">
        Our system offers a comprehensive suite of services to ensure efficient and effective patient record keeping and analysis. We focus on providing:
        </p>
        <div className="wrapper">

<ul className="about-list">

  <li className="about-item" data-reveal="left">
    <ion-icon name="checkmark-circle-outline"></ion-icon>

    <span className="span"><strong>Clinics & Doctors:</strong> Comprehensive database of clinics and doctors for easy access.</span>
  </li>

  <li className="about-item" data-reveal="left">
    <ion-icon name="checkmark-circle-outline"></ion-icon>

    <span className="span"><strong>AI Advisor:</strong> AI-powered advisor providing insights from previous records.</span>
  </li>

  <li className="about-item" data-reveal="left">
    <ion-icon name="checkmark-circle-outline"></ion-icon>

    <span className="span"><strong>Visit Reminder:</strong> Automated reminders for doctor cappointments.</span>
  </li>

  <li className="about-item" data-reveal="left">
    <ion-icon name="checkmark-circle-outline"></ion-icon>

    <span className="span"><strong>Record Keeping:</strong> Safe and robust system for maintaining patient records.</span>
  </li>

</ul>

</div>
        <ul className="tab-list" data-reveal="left">

          <li>
            <button onClick={() => handleTabClick('vision')}  className={`tab-btn ${activeTab === 'vision' ? ' active' : ''}` }>Vision</button>
          </li>

          <li>
            <button onClick={() => handleTabClick('mission')}  className={`tab-btn ${activeTab === 'mission' ? 'tab-btn active' : ''}` }>Mission</button>
          </li>

        </ul>

        {activeTab === 'mission' && (
          <>
           <h2>Our Mission</h2>
            <p>
              To provide a safe, robust, and efficient system for patient record keeping and to offer innovative solutions that enhance patient care through automated reminders, AI-powered insights, and easy access to a comprehensive database of clinics and doctors.
            </p>
          </>
        )}
        {activeTab === 'vision' && (
          <>
            <h2>Our Vision</h2>
            <p className='tab-text'>
              To revolutionize healthcare by leveraging technology to create a seamless and integrated patient care experience that is proactive, personalized, and accessible to all.
            </p>
          </>
        )}
      

      </div>

      <figure className="about-banner" data-reveal="right">
        <img src={About_Banner} width="554" height="678" loading="lazy" alt="about banner"
          className="w-100"/>
      </figure>

    </div>
  </section>
  )
}

export default About
