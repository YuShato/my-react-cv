import React from 'react'
import { Link } from 'react-router-dom'

function LinkItem({navLink}) {
    const {link, description } = navLink;
    return (
        <li>
            <Link to={link}>{description}</Link>
          </li>
    )
}

export default LinkItem
