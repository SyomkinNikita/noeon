import React from 'react'
import '../../base.scss'
import './GrantsPage.styles.scss'
import '../../components/Research/Research.styles.scss'
import banner from './grants-banner.jpg'
import { results } from './constants'
import { FullBanner } from '../../components/FullBanner/FullBanner'
import { Menu } from '../../components/Menu/Menu'
import { Logo } from '../../components/Logo/Logo'
import { GrantTopics } from './GrantTopics/GrantTopics'
import { GrantsFunding } from './GrantsFunding/GrantsFunding'
import { DeadlinesBlock } from './DeadlinesBlock/DeadlinesBlock'
import { WhoCanApply } from './WhoCanApply/WhoCanApply'
import { JoinOurTeamBlock } from '../../components/JoinOurTeamBlock/JoinOurTeamBlock'
import { Results } from './Results/Results'
import { HowToApply } from './HowToApply/HowToApply'
import { GrantsForm } from './GrantsForm/GrantsForm'

const Grants = () => {
  return (
    <>
      <div className='wrapper'>
        <Menu />
        <Logo />
        <FullBanner src={banner} withMargin />
        <div className='companyBlock'>
          <GrantTopics />
          <GrantsFunding />
        </div>
      </div>
      <HowToApply />
      <div className='wrapper'>
        <GrantsForm />
        <Results contentItems={results} />
      </div>
      <DeadlinesBlock />
      <div className='wrapper'>
        <WhoCanApply />
        <JoinOurTeamBlock />
      </div>
    </>
  )
}

export default Grants
