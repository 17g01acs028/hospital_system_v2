import React from 'react'
import icon_1 from "../assets/images/icon-1.png"
import icon_2 from "../assets/images/icon-2.png"
import icon_3 from "../assets/images/icon-3.png"
import icon_4 from "../assets/images/icon-4.png"
import Service from '../components/services/Service'

const Service_list = [{
  title: "Record Keeping",
  description: "Safe and robust system for maintaining patient records.",
  src: icon_1
},
{
  title: "Visit Reminder",
  description: "Automated reminders for clinic visits and doctor appointments.",
  src: icon_2
},
{
  title: "AI Advisor",
  description: "AI-powered advisor providing insights from previous records.",
  src: icon_3
},
{
  title: "Clinics & Doctors",
  description: "Comprehensive database of clinics and doctors for easy access.",
  src: icon_4
}
];
const Services = () => {
  return (
    <section className="service" id="services" aria-label="service">
    <div className="container">

      <ul className="service-list">
{
  Service_list.map((service, index) => {
    return (
      <li key={index}>
        <Service title={service.title} description={service.description} src={service.src}/>
      </li>
    )
  })
}
  
      </ul>

    </div>
  </section>
  )
}

export default Services
