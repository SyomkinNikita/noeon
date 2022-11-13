import React, { FC } from 'react'
import './BlogTitle.styles.scss'

type TBlogTitleProps = {
  title: string
  id?: string
}

export const BlogTitle: FC<TBlogTitleProps> = ({ title, id }) => {
  return (
    <h1 className='blogTitle' id={id}>
      {title}
    </h1>
  )
}
