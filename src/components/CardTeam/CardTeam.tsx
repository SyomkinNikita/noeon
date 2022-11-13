import React, { FC } from 'react'
import './CardTeam.styles.scss'

type TCardTeamProps = {
  id: number
  name: string
  post: string
  img: string
  description?: string
}

export const CardTeam: FC<TCardTeamProps> = ({
  img,
  name,
  post,
  id,
  description
}) => {
  return (
    <div className='cardTeam' key={id}>
      <img className='cardTeam__teamPhoto' src={img} alt={`${name} ${post}`} />
      <div className='cardTeam__textContent'>
        <span className='cardTeam__teamName'>{name}</span>
        <p className='cardTeam__teamPost'>{post}</p>
        {description && (
          <span className='cardTeam__education'>{description}</span>
        )}
      </div>
    </div>
  )
}
