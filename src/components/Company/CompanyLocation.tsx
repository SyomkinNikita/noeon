import React, { FC } from 'react'
import '../../base.scss'
import './CompanyLocation.styles.scss'
import city from './image_screen_2.png'
import { Link } from 'react-router-dom'

export const CompanyLocation: FC = () => {
  return (
    <div className='company' id='company'>
      <div className='company__content'>
        <img className='company__city' src={city} alt='Tokyo' />
        <div className='company__content-text'>
          <h2 className='company__title'>
            We are located in Tokyo, Midtown Tower 18F
          </h2>
          <Link className='company__link' to='company'>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}
