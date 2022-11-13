import React, { FC } from 'react'
import { whoCanApplySteps } from '../constants'
import { Step } from '../../../components/Step/Step'

export const WhoCanApply: FC = () => {
  return (
    <div className='whoCanApply'>
      <h3 className='title'>Who Can Apply</h3>
      <div className='whoCanApply__wrapper'>
        {whoCanApplySteps.map(step => (
          <div className='whoCanApply__item'>
            <Step {...step} align='start' />
          </div>
        ))}
      </div>
    </div>
  )
}
