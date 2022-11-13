import React, { FC, MouseEvent } from 'react'
import banner from './image_screen_1.png'
import { Logo } from '../Logo/Logo'
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as ArrowSmall } from './arrow_small.svg'
import './BannerBlock.styles.scss'

export const BannerBlock: FC = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const elementToScroll = document.querySelector(`#research`)
    elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className='bannerBlock'>
        <div className='bannerBlock__logo'>
          <Logo />
        </div>
        <img className='bannerBlock__img' src={banner} alt='noeon' />
      </div>
      <button onClick={handleClick} className='bannerBlock__button'>
        <ArrowSmall />
        <Arrow />
      </button>
    </>
  )
}
