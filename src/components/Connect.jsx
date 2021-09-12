import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '../consts'

function Connect() {
    return (
        <section className="connect">
        <video controls autoPlay muted loop className="video-container" poster="./images/project-1.jpeg">
          <source src="./videos/connect.mp4" type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>
        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <p className="video-text">
            If you have any questions or suggestions, just email me.<br/> Here are my contacts.
          </p>
          <Link to={AppRoute.CONTACT} className="btn">contact me</Link>
        </div>
      </section>
    )
}

export default Connect
