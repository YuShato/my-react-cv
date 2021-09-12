import React from 'react'
import {FaFacebook, FaGithub, FaWhatsapp, FaPhoneAlt} from 'react-icons/fa';


function Footer () {
  return (
    <footer className='footer'>
      <ul className='social-icons'>
        <li>
          <a
            href='https://www.facebook.com/shatoyu/'
            className='social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook/>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/YuShato'
            className='social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub/>
          </a>
        </li>
        <li>
          <a
            href='https://api.whatsapp.com/send?phone=79265516821&text=Hi%20Yuliya!%20'
            className='social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <FaWhatsapp/>
          </a>
        </li>
        <li>
          <a
            href='tel:+79265516821'
            className='social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <FaPhoneAlt/>
          </a>
        </li>
      </ul>
      <a href='https://rs.school/js/' target='_blank' rel='noreferrer'>
        <img
          className='rs_school_logo'
          src='./images/rs_school_js.svg'
          width='100'
          alt='rs_school logo'
        />
      </a>
      <p>
        &copy; <span id='date'>{`${new Date().getFullYear()}`}</span> Yuliya Shatokhina
      </p>
    </footer>
  )
}

export default Footer
