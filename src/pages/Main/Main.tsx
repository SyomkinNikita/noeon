import React from 'react'
import { Research } from '../../components/Research/Research'
import { CompanyLocation } from '../../components/Company/CompanyLocation'
import { Menu } from '../../components/Menu/Menu'
import { Logo } from '../../components/Logo/Logo'
import { JoinOurTeamBlock } from '../../components/JoinOurTeamBlock/JoinOurTeamBlock'
import video from './NOEON VIDEO 08.m4v'
import './Main.styles.scss'

const Main = () => {
  return (
    <div className='wrapper'>
      <Menu />
      <Logo />
      <video className='mainVideo' src={video} autoPlay muted loop />
      <Research />
      <CompanyLocation />
      <JoinOurTeamBlock />
    </div>
  )
}

export default Main
