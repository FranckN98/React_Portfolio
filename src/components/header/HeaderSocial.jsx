import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImXing} from 'react-icons/im'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithub/></a>
        <a href="https://xing.com"><ImXing/></a>
    </div>
  )
}

export default HeaderSocial