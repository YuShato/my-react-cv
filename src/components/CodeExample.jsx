import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { SiCodewars } from "react-icons/si";
import { FaCode } from "react-icons/fa";




function CodeExample () {

  return (
    <section className='section bg-grey'>
      <div className='section-title'>
        <h2>code examples</h2>
        <div className='underline'></div>
      </div>
      <div className='services-center section-center'>
        <article className='service'>
          <SiCodewars className="service-icon"/>
          <h4>Codewars</h4>
          <div className='underline'></div>
          <ul>
            <li>Rank:5 kyu</li>
            <li>Honor:479</li>
            <li>Total Completed Kata:103</li>
          </ul>
          <a
            href='https://www.codewars.com/users/YuShato'
            target='_blank'
            className='btn'
            rel='noreferrer'
          >
            View profile
          </a>
        </article>
        <article className='service'>
          <FaCode className="service-icon"/>
          <h4>Code Example</h4>
          <div className='underline'></div>
          <p>
            <b>Task: </b>Complete the solution so that it reverses all of the
            words within the string passed in.
          </p>

          <div className='code-example'>
            <SyntaxHighlighter language='javascript' style={atelierDuneLight}>
              {`function reverseWords (str) {
                return str
                  .split(' ')
                  .reverse()
                  .join(' ')
              }`}
            </SyntaxHighlighter>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CodeExample
