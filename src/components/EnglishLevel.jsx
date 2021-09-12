import React from 'react'

function EnglishLevel () {
  return (
    <section className='section bg-grey'>
      <div className='section-title'>
        <h2>English level</h2>
        <div className='underline'></div>
      </div>
      <div className='services-center section-center'>
        <article className='service'>
          <img src='./images/cert-eng.jpg' alt='english level %' />
          <p>These are the results of my testing from www.efset.org.</p>
        </article>
        <article className='service'>
          <p>
             I myself
            assess my knowledge of English as:
          </p>
          <ul>
              <li>Speaking: A1 - A2</li>
              <li>Writing: A2</li>
              <li>Reading B1</li>
              <li>Listening: B1</li>
          </ul>
          <p>I am currently taking English courses to improve my skills</p>
        </article>
      </div>
    </section>
  )
}

export default EnglishLevel
