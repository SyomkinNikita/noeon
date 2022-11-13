import React, { FC } from 'react'
import './Logo.styles.scss'
import { Link, useLocation } from 'react-router-dom'

type TLogoProps = {
  isHiddenSecondBlock?: boolean
}

export const Logo: FC<TLogoProps> = ({ isHiddenSecondBlock = false }) => {
  const location = useLocation()
  const isBlogPage = location.pathname.includes('/blog')

  return (
    <div
      className={
        isHiddenSecondBlock
          ? 'logo-wrapper logo-wrapper_hidden'
          : 'logo-wrapper'
      }
    >
      <Link to='/' className='logo-link'>
        <div className='logo'>
          <div className='logo-noeon'>NOEON</div>
          <br />
          <div className='logo-research'>research</div>
        </div>
      </Link>
      <p
        className={
          isHiddenSecondBlock ? 'logo-text logo-text_hidden' : 'logo-text'
        }
      >
        Technology for IT engineers' labour automatisation
      </p>
    </div>
  )
}
