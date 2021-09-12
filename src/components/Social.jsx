import React from 'react'
import SocialItem from './SocialItem'
import { SocialData } from '../data'

function Social () {
  return (
    <ul className='social-icons'>
      {SocialData.map(network => (
        <SocialItem network={network} key={network.id} />
      ))}
    </ul>
  )
}

export default Social
