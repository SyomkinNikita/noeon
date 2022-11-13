import React, { FC } from 'react'
import { dedlines } from '../constants'
import { Deadlines } from '../../../components/Deadlines/Deadlines'

export const DeadlinesBlock: FC = () => {
  return (
    <div className='deadlinesBlock'>
      <div className='wrapper'>
        <h3 className='title'>Deadlines and Competition</h3>
        <div className='deadlinesBlock__wrapper'>
          {dedlines.map(item => (
            <Deadlines {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
