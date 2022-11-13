import React, { FC } from 'react'
import './Results.styles.scss'
import grantsReactMain from '../grants-rect-main.png'
import grantsRectFirst from '../grants-rect-first.png'
import grantsRectSecond from '../grants-rect-second.png'

export type TResultsProps = {
  contentItems: { id: number; header: string; text: string }[]
}

export const Results: FC<TResultsProps> = ({ contentItems }) => {
  return (
    <div className='results'>
      <h2 className='results__title'>Results and Intelectual Property</h2>
      <div className='results__wrapper'>
        <div className='results__images'>
          <img src={grantsReactMain} alt='' className='results__images-main' />
          <div className='results__images-wrapper'>
            <img
              src={grantsRectFirst}
              alt=''
              className='results__images-second'
            />
            <img
              src={grantsRectSecond}
              alt=''
              className='results__images-second'
            />
          </div>
        </div>
        <div className='results__content'>
          {contentItems.map(item => (
            <div className='results__content-item' key={item.id}>
              <h3 className='results__content-header'>{item.header}</h3>
              <p className='text results__content-text'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
