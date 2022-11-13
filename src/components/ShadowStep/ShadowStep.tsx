import React, { FC } from 'react'
import './ShadowStep.styles.scss'

export type TShadowStepProps = {
  number: string
  title: string
  text: string
}

export const ShadowStep: FC<TShadowStepProps> = ({ title, text, number }) => {
  return (
    <div className='shadowStep'>
      <span className='shadowStep__number'>{number}</span>
      <p className='shadowStep__title'>{title}</p>
      <p className='shadowStep__text'>{text}</p>
    </div>
  )
}
