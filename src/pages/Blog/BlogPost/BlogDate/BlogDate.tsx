import React, { FC } from 'react'
import './BlogDate.styles.scss'
import { BlogTableOfContents } from '../BlogTableOfContents/BlogTableOfContents'
import { menuItems } from '../constants'

type TBlogDateProps = {
  date: string
  id?: string
}

export const BlogDate: FC<TBlogDateProps> = ({ date, id }) => {
  return (
    <div className='blogDate__wrapper' id={id}>
      <time className='blogDate' dateTime={date}>
        {date}
      </time>
      <BlogTableOfContents content={menuItems} />
    </div>
  )
}
