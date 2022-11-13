import React, { FC, MouseEvent } from 'react'
import './BlogTableOfContents.styles.scss'
import { useScrollspy } from '../../../../hooks/useScrollspy'

export type TBlogTableOfContentsProps = {
  content: { id: string; text: string }[]
}

export const BlogTableOfContents: FC<TBlogTableOfContentsProps> = ({
  content
}) => {
  const activeId = useScrollspy(
    (elements => elements.map(el => el.id))(content),
    100 // row-gap в грид-сетке
  )

  const handleClick = (e: MouseEvent<HTMLLIElement>, id: string) => {
    const div = document.querySelector(`#${id}`)
    div?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <p className='blogTableOfContents__title'>Contents</p>
      <ol className='blogTableOfContents'>
        {content.map(item => (
          <li
            key={item.id}
            className={
              activeId === item.id
                ? 'blogTableOfContents__item blogTableOfContents__item_active'
                : 'blogTableOfContents__item'
            }
            onClick={e => handleClick(e, item.id)}
          >
            {item.text}
          </li>
        ))}
      </ol>
    </>
  )
}
