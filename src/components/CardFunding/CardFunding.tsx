import React, { FC } from 'react'
import './CardFunding.styles.scss'

export type TCardFundingProps = {
  img: string
  text: string
}

export const CardFunding: FC<TCardFundingProps> = ({ img, text }) => {
  return (
    <div className='cardFunding'>
      <img src={img} alt={text} className='cardFunding__img' />
      <p className='text cardFunding__text'>{text}</p>
    </div>
  )
}
