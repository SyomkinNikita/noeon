import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import './BlogText.styles.scss'

type TBlogTextProps = {
  text: string[]
  title?: string
  id?: string
}

export const BlogText: FC<TBlogTextProps> = ({ text, title, id }) => {
  return (
    <div className='blogText' id={id}>
      {title && <h3 className='blogText__title'>{title}</h3>}
      {text.map(t => (
        <ReactMarkdown children={t} />
      ))}
    </div>
  )
}
