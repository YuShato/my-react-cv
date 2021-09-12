import React from 'react'
import { SocialData } from '../data';
import SocialItem from './SocialItem';

function SocialHero () {
  return (
    <ul className='social-icons hero-icons'>
      {SocialData.map((network) => <SocialItem key={network.id} network={network}/>)}
    </ul>
  )
}

export default SocialHero
