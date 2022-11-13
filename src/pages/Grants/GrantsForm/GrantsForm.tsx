import React, { FC } from 'react'
import './GrantsForm.styles.scss'

export const GrantsForm: FC = () => {
  return (
    <div className='grantsForm'>
      <h3 className='title'>
        Apply. Or propose your topic if you think that it aligns with our LoR
      </h3>
      <p className='text'>
        Just write to us{' '}
        <a href='mailto:grant@noeon.ai'>
          <b>grant@noeon.ai</b>
        </a>
      </p>
    </div>
  )
}
