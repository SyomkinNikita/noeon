import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './BlogList.styles.scss'

type TBlogListProps = {
  text: string
  id?: string
}

export const BlogList: FC<TBlogListProps> = ({ text, id }) => {
  return (
    <div className='blogList' id={id}>
      <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]} />
    </div>
  )
}
