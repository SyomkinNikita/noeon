import ReactMarkdown from 'react-markdown'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu/Menu'
import { Logo } from '../../components/Logo/Logo'
import { JoinOurTeamBlock } from '../../components/JoinOurTeamBlock/JoinOurTeamBlock'
import { FigureStep } from '../../components/FigureStep/FigureStep'
import { useWindowSize } from '../../hooks/useWindowSize'
import '../../base.scss'
import '../../components/Research/Research.styles.scss'
import './JobPosition.styles.scss'
import {
  blockLookingFor,
  blockWouldLike,
  figureStep,
  firstBlockDetails,
  howToDifferent
} from './constants'
import banner from './assets/firstImg.png'
import offering from './assets/offering.png'

const JobPosition: FC = () => {
  const { width } = useWindowSize()
  return (
    <div>
      <div className='wrapper'>
        <Menu />
        <nav className='navigation'>
          <Link to='/join-our-team'>
            <span className='navigation__link'>
              {width < 1024 ? 'Team' : 'Join Our Team'} /
            </span>
          </Link>
          <span>
            <strong> AI Research Engineer</strong>
          </span>
        </nav>
        <section className='firstBlockJob'>
          <div className='firstBlockJob__row'>
            <div className='details'>
              <h3 className='details__title'>Details</h3>
              <div className='details__text'>
                {firstBlockDetails.map(item => (
                  <ReactMarkdown children={item.text} key={item.id} />
                ))}
              </div>
            </div>
            <div className='keywords'>
              <h3 className='keywords__title'>Keywords</h3>
              <p className='keywords__text'>
                RL, GNN, Knowledge Graph, Solomonoff Induction, NLP, Ontology,
                Statistical Learning, Intractability, Code Comprehension, Causal
                Inference, Bayesian Epistemology, Sheaf Diffusion, VF3, Inverse
                MDP
              </p>
            </div>
          </div>

          <div className='firstBlockJob__row-second'>
            <div className='firstBlockJob__flexForMobile'>
              <div className='pictureBlock'>
                <img src={banner} alt='city' />
                <Logo isHiddenSecondBlock />
              </div>
              <div className='blockUnderImage'>
                <h1 className='blockUnderImage__title'>
                  AI Senior Research Engineer
                </h1>
                <h3 className='blockUnderImage__subtitle'>Introduction</h3>
                <p className='blockUnderImage__text'>
                  The company develops a system capable of semantic processing
                  of programming code, e.g., code analysis, transformation, and
                  synthesis, as well as operating a computational environment.
                  The approach combines explicit knowledge representation in
                  discrete structures with ML-assisted algorithms to manipulate
                  those structures. The system we design is to be able to follow
                  the reasoning trajectory and examine the internal logic,
                  identify a lack of information and interact with external
                  sources and incorporate new knowledge at later stages equally
                  inexpensive as at the initial one. It would be nice to have
                  you in our team to help us with that!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='blockLookingFor'>
          <h2 className='blockLookingFor__heading'>Who are we looking for?</h2>
          {blockLookingFor.map(item => (
            <div className='blockLookingFor__step' key={item.titleUnderNumber}>
              <div className='blockLookingFor__step-left'>
                <span className='blockLookingFor__step-number'>{item.id}</span>
                <span className='blockLookingFor__step-header'>
                  {item.titleUnderNumber}
                </span>
              </div>
              <div className='blockLookingFor__step-right'>
                <ol>
                  {item.list.firstList.map(item => (
                    <li>
                      <ReactMarkdown children={item} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </section>
        <section className='blockWouldLike'>
          <h2 className='blockWouldLike__header'>{blockWouldLike.title}</h2>
          <div className='blockWouldLike__list'>
            {blockWouldLike.list.map(item => (
              <ol>
                {item.firstList.map(firstListItem => (
                  <li key={firstListItem}>
                    <ReactMarkdown children={firstListItem} />
                  </li>
                ))}
              </ol>
            ))}
          </div>
        </section>
      </div>
      <section className='howToDifferent'>
        <h2 className='howToDifferent__header'>How we’re different</h2>
        <div className='howToDifferent__textBlock'>
          {howToDifferent.map(item => (
            <div className='howToDifferent__block'>
              <span className='howToDifferent__textBlock-title'>
                {item.title}
              </span>
              <span className='howToDifferent__textBlock-subtitle'>
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </section>
      <div className='wrapper'>
        <section className='offering'>
          <h2 className='offering__heading'>What are we offering?</h2>
          <div className='offering__block'>
            <div className='offering__imageBlock'>
              <img src={offering} alt='offering' />
            </div>
          </div>
          <div className='figureStepBlock'>
            {figureStep.map(step => (
              <div
                key={step.text.slice(0, 10)}
                className='figureStepBlock__item'
              >
                <FigureStep {...step} />
              </div>
            ))}
          </div>
        </section>
        <JoinOurTeamBlock />
      </div>
    </div>
  )
}

export default JobPosition
