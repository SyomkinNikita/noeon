import React, { FC } from 'react'
import './JoinOurTeam.styles.scss'
import img from './img-JoinOurTeam.png'

type TJoinOurTeamBlockProps = {
  title?: string
}

export const JoinOurTeamBlock: FC<TJoinOurTeamBlockProps> = ({
  title = 'Join Our Team'
}) => {
  return (
    <div className='joinOurTeam' id='join-our-team'>
      <div className='joinOurTeam__content'>
        <h2 className='joinOurTeam__title'>{title}</h2>
        <p className='joinOurTeam__text'>
          We are looking for specialist for full-time employment and for
          part-time collaboration.
          <span>
            Contact us <a href='mailto:hiring@noeon.ai'>hiring@noeon.ai</a>
          </span>
        </p>
      </div>
      <img src={img} alt='joinOurTeam' className='joinOurTeam__img' />
    </div>
  )
}
