import React, { FC } from 'react'
import './Deadlines.styles.scss'

export type TDeadlinesProps = {
  number: '1' | '2' | '3'
  text: string
}

export const Deadlines: FC<TDeadlinesProps> = ({ text, number = '1' }) => {
  const renderBlock = (items: '1' | '2' | '3') => {
    switch (items) {
      case '1': {
        return (
          <>
            <div className='deadlines__number deadlines__number_empty' />
            <div className='deadlines__number deadlines__number_one' />
          </>
        )
      }
      case '2': {
        return (
          <>
            <div className='deadlines__number deadlines__number_two' />
            <div className='deadlines__number deadlines__number_one' />
          </>
        )
      }
      default: {
        return (
          <>
            <div className='deadlines__number deadlines__number_one' />
            <div className='deadlines__number deadlines__number_two' />
            <div className='deadlines__number deadlines__number_three' />
          </>
        )
      }
    }
  }

  return (
    <div className='deadlines'>
      <div className='deadlines__wrapper'>{renderBlock(number)}</div>
      <p className='deadlines__text text'>{text}</p>
    </div>
  )
}
