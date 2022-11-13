import React, { FC } from 'react'
import { steps } from '../constants'
import { Step } from '../../../components/Step/Step'

export const GrantTopics: FC = () => {
  return (
    <>
      <h2 className='research__title'>Grant Topics</h2>
      <div className='research__steps company__step'>
        {steps.map(step => (
          <div className='company__step-wrapper' key={step.id}>
            <Step
              {...step}
              align='start'
              id={step.id}
              type='numbers'
              isNumberOnlyBig
            />
          </div>
        ))}
      </div>
    </>
  )
}
