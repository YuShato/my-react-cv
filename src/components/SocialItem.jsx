import React from 'react'

function SocialItem({network}) {
    const {icon, link, id} = network;
    return (
        <li key={id}>
        <a href={link} className='social-icon'>
          {icon}
        </a>
      </li>
    )
}

export default SocialItem
