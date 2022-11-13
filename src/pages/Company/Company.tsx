import React from 'react'
import '../../base.scss'
import '../../components/Research/Research.styles.scss'
import './CompanyPage.styles.scss'
import { FullBanner } from '../../components/FullBanner/FullBanner'
import {
  team,
  teamRow2,
  teamRow3,
  teamRow4
} from '../../components/Company/constants'
import { Step } from '../../components/Step/Step'
import { CardTeam } from '../../components/CardTeam/CardTeam'
import { Menu } from '../../components/Menu/Menu'
import { Logo } from '../../components/Logo/Logo'
import { companyText, steps } from './constants'
import banner from './fullBanner.jpg'
import { JoinOurTeamBlock } from '../../components/JoinOurTeamBlock/JoinOurTeamBlock'

const Company = () => {
  return (
    <div className='wrapper'>
      <Menu />
      <Logo />
      <FullBanner src={banner} withMargin />
      <div className='companyBlock'>
        <h2 className='title'>Company</h2>
        {companyText.map((text, index) => (
          <p className='text' key={index}>
            {text}
          </p>
        ))}
      </div>
      <h2 className='companyBlock__heading'>Our Values</h2>
      <div className='research__steps company__step'>
        {steps.map(step => (
          <div className='company__step-wrapper' key={step.id}>
            <Step {...step} align='start' />
          </div>
        ))}
      </div>
      <div className='company__content companyTeam'>
        <div className='company__content-text'>
          <h2 className='company__title'>Team</h2>
        </div>
      </div>
      <div className='company__team'>
        {team.map(item => (
          <CardTeam {...item} />
        ))}
      </div>
      <div className='company__team companyTeam__cardWrapper'>
        {teamRow2.map(item => (
          <CardTeam {...item} />
        ))}
      </div>
      <div className='company__team companyTeam__cardWrapper'>
        {teamRow3.map(item => (
          <CardTeam {...item} />
        ))}
      </div>
      <div className='company__team companyTeam__cardWrapper'>
        {teamRow4.map(item => (
          <CardTeam {...item} />
        ))}
      </div>
      <div className='ukraineBlock'>
        <div className='ukraineBlock__flag'>
          <div className='ukraineBlock__blue' />
          <div className='ukraineBlock__yellow' />
        </div>
        <div className='ukraineBlock__supportText'>
          We have an international team and work with people from all over the
          world, including Russians and Ukrainians. We support Ukraine and
          strive for its victory!
        </div>
      </div>
      <div className='companyBlock__contacts'>
        <h3 className='title'>Contact</h3>
        <p className='text'>
          Noeon Research, Midtown Tower 18F, 9-7-1 Akasaka, Minato-ku,
          Tokyo,&nbsp;Japan. <br />
          <b>
            Contact&nbsp;us&nbsp;
            <a href='mailto:info@noeon.ai'>info@noeon.ai</a>
          </b>
        </p>
      </div>
      <JoinOurTeamBlock />
    </div>
  )
}

export default Company
