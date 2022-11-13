import React, { FC } from 'react'
import './FigureStep.styles.scss'
import ReactMarkdown from 'react-markdown'

export type TFigureStepProps = {
  img: string
  title?: string
  text: string
}

export const LinkWrapper: FC<any> = props => {
  return (
    <a href={props.href} target='_blank' rel='noreferrer'>
      <b>{props.children}</b>
    </a>
  )
}

export const FigureStep: FC<TFigureStepProps> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className='figureStep'>
      <div className='figureStep__wrapper-img'>
        <img src={img} alt='figure' className='figureStep__figure' />
      </div>
      {title && <p className='figureStep__title'>{title}</p>}
      <span className='figureStep__text'>
        <ReactMarkdown children={text} components={{ a: LinkWrapper }} />
      </span>
    </div>
  )
}
