import React from 'react'
import { FrontendSkill, OtherSkill } from '../consts'
import SkillItem from './SkillItem'

function Skills () {
  return (
    <section className='section skills'>
      <div className='section-title'>
        <h2>skills</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center skills-center'>
        <article>
          <h3>front end</h3>
          <ul>
            {FrontendSkill.map(skill => (
              <SkillItem skill={skill} key={skill.skillName} />
            ))}
          </ul>
        </article>
        <article>
          <h3>Other technologies</h3>
          <ul>
            {OtherSkill.map(skill => (
              <SkillItem skill={skill} key={skill.skillName} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Skills
