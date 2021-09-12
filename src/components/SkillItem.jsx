import React from 'react'

function SkillItem({skill}) {
    const {skillName, qualification} = skill;
    return (
        <li>
        <div className='skill'>
          <p>{skillName}</p>
          <div className='skill-container'>
            <div className={`skill-value value-${qualification}`}></div>
            <p className={`skill-text skill-text-${qualification}`}>{`${qualification}%`}</p>
          </div>
        </div>
      </li>
    )
}

export default SkillItem
