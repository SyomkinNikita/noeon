import React, { FC } from 'react'
import './HowToApply.styles.scss'

export const HowToApply: FC = () => {
  return (
    <div className='howToApply'>
      <div className='wrapper'>
        <h2 className='howToApply__title'>How to Apply</h2>
        <div className='howToApply__wrapper'>
          <div className='howToApply__step howToApply__step_one'>
            <span className='howToApply__step-number'>01</span>
            <span className='howToApply__step-header'>Write to us</span>
            <p className='howToApply__step-text'>
              Write to us about your background, chosen topic, what people you
              want on your team, and how you plan to distribute funds. You can
              keep it simple.
            </p>
          </div>
          <div className='howToApply__step howToApply__step_two'>
            <span className='howToApply__step-number'>02</span>
            <span className='howToApply__step-header'>Include links</span>
            <p className='howToApply__step-text'>
              Feel free to include links to related articles or other materials.
            </p>
          </div>
          <div className='howToApply__step howToApply__step_three'>
            <span className='howToApply__step-number'>03</span>
            <span className='howToApply__step-header'>Wait for result</span>
            <p className='howToApply__step-text'>
              We will contact you within a week to discuss further details.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
