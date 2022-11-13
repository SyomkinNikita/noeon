import React, { FC } from 'react'
import './BlogImage.styles.scss'

type TFullScreen = {
  type: 'fullScreen'
  img: {
    position: 'left' | 'right'
    src: string
  }
  descriptionImg: string
  additionalText?: string
  id?: string
}

type TNonFullScreen = {
  type: 'nonFullScreen'
  img: {
    position: 'left' | 'right'
    src: string
  }
  descriptionImg: string
  additionalText: string
  id?: string
}

type TBlogImageProps = TFullScreen | TNonFullScreen

export const BlogImage: FC<TBlogImageProps> = ({
  type,
  img,
  descriptionImg,
  additionalText,
  id
}) => {
  const classNameBlogImage =
    type === 'fullScreen'
      ? 'blogImage_fullScreen'
      : img.position === 'left'
      ? 'blogImage'
      : 'blogImage blogImage_right'

  const classNameBlogImageFullscreen =
    type === 'fullScreen'
      ? 'blogImage__img blogImage__img_fullScreen'
      : 'blogImage__img'

  return (
    <div className={classNameBlogImage} id={id}>
      <div className='blogImage__wrapper'>
        <img src={img.src} alt='' className={classNameBlogImageFullscreen} />
        <p className='blogImage__description'>{descriptionImg}</p>
      </div>
      {additionalText && (
        <p className='blogImage__additionalText'>{additionalText}</p>
      )}
    </div>
  )
}
