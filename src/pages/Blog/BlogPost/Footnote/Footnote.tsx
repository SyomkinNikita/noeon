import React, { FC } from 'react'
import './Footnote.styles.scss'

type TFootnoteProps = {
  text: string
  id?: string
}

export const Footnote: FC<TFootnoteProps> = ({ text, id }) => {
  return (
    <div className='footnote' id={id}>
      <p className='footnote__text'>{text}</p>
    </div>
  )
}
