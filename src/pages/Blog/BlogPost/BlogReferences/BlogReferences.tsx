import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './BlogReferences.styles.scss'
import { LinkWrapper } from '../../../../components/FigureStep/FigureStep'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { ReactComponent as Shevron } from '../../assets/shevron.svg'

type TBlogReferencesProps = {
  title: string
  references: string[]
  id?: string
}

export const BlogReferences: FC<TBlogReferencesProps> = ({
  references,
  title,
  id
}) => {
  const { width } = useWindowSize()
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const renderItems = useMemo(() => {
    if (width < 1768) {
      return (
        <div className='blogReferences__wrapper-item'>
          {references.map(reference => (
            <ReactMarkdown
              children={reference}
              components={{ a: LinkWrapper }}
            />
          ))}
        </div>
      )
    }
    const referencesOne = references.slice(0, Math.ceil(references.length / 2))
    const referencesTwo = references.slice(Math.ceil(references.length / 2))
    const allReferences = [referencesOne, referencesTwo]

    return (
      <>
        {allReferences.map(currentRef => (
          <div className='blogReferences__wrapper-item'>
            {currentRef.map(item => (
              <ReactMarkdown children={item} components={{ a: LinkWrapper }} />
            ))}
          </div>
        ))}
      </>
    )
  }, [width, references])

  useEffect(() => {
    if (ref && ref.current) {
      const refHeight = ref.current?.scrollHeight
      setHeight(refHeight)
    }
  }, [])

  const handleClickOpen = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <div className='blogReferences' id={id}>
      <h3 className='blogReferences__title'>
        {title}
        <Shevron
          onClick={handleClickOpen}
          className={
            open
              ? 'blogReferences__shevron blogReferences__shevron_open'
              : 'blogReferences__shevron'
          }
        />
      </h3>
      <div
        className='blogReferences__wrapper'
        ref={ref}
        style={{ height: open ? `${height}px` : 0 }}
      >
        {renderItems}
      </div>
    </div>
  )
}
