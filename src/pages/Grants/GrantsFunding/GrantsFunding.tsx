import React, { FC } from 'react'
import { cardFunding } from '../constants'
import { CardFunding } from '../../../components/CardFunding/CardFunding'

export const GrantsFunding: FC = () => {
  return (
    <div className='grantsFunding'>
      <h3 className='title'>Funding</h3>
      <div className='grantsFunding__wrapper'>
        {cardFunding.map(card => (
          <div key={card.id} className='grantsFunding__item'>
            <CardFunding {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}
