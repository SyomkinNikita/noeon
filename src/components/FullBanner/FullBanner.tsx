import React, { FC } from 'react'
import './FullBanner.styles.scss'

type TFullBannerProps = {
  src: string
  withMargin?: boolean
}
export const FullBanner: FC<TFullBannerProps> = ({
  src,
  withMargin = false
}) => {
  const classNameWrapper = withMargin
    ? 'fullBanner fullBanner_withMargin'
    : 'fullBanner'

  return (
    <div className={classNameWrapper}>
      <img src={src} alt='Tokyo' />
    </div>
  )
}
