import React, { FC } from 'react'
import './ApplyStep.styles.scss'

export type TApplyStepProps = {
  number: string
  title: string
  text: string
}

export const ApplyStep: FC<TApplyStepProps> = ({ title, text, number }) => {
  return (
    <div className='applyStep'>
      <span className='applyStep__number'>{number}</span>
      <p className='applyStep__title'>{title}</p>
      <p className='applyStep__text'>{text}</p>
    </div>
  )
}
