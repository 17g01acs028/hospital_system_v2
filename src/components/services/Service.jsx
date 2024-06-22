import React from 'react'

const Service = ({title,description,src}) => {
  return (
    <li>
          <div className="service-card" data-reveal="bottom">

            <div className="card-icon">
              <img src={src} width="71" height="71" loading="lazy" alt="icon"/>
            </div>

            <h3 className="headline-sm card-title">
              <a href="#">{title}</a>
            </h3>

            <p className="card-text">
              {description}
            </p>
          </div>
        </li>

  )
}

export default Service
