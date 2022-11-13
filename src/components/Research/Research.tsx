import React, { FC } from 'react'
import './Research.styles.scss'
import { Step } from '../Step/Step'

const steps = [
  { id: 1, text: 'Overcoming limitations of knowledge graphs' },
  { id: 2, text: 'Data analysis through sheaves framework' },
  { id: 3, text: 'Hierarchical action spaces' }
]

export const Research: FC = () => (
  <div className='research' id='research'>
    <h2 className='research__title'>Research</h2>
    <p className='research__text'>
      Noeon Research focused on the automatisation of code synthesis and
      analysis using a hybrid approach. Our solution incorporates the ability to
      process a large amount of data from Machine Learning and the ability to
      have a strong inductive bias by efficient prior knowledge encoding.
    </p>
    <div className='research__steps'>
      {steps.map(step => (
        <div className='research__steps__wrapper' key={step.id}>
          <Step {...step} id={step.id} type='numbers' />
        </div>
      ))}
    </div>
  </div>
)
