import { TStepProps } from '../../components/Step/Step'
import ellipseBlack from './ellipse-black.png'
import ellipseWhite from './ellipse-white.png'

export const steps: TStepProps[] = [
  {
    id: 1,
    title: 'Exploration over Exploitation',
    text: 'Although there might already be a working solution for our tasks, we prefer looking for a better one at the cost of more time and resources.',
    type: 'icons',
    images: [ellipseBlack]
  },
  {
    id: 2,
    title: 'Reasonable Perfectionism',
    text: 'In our research, we aspire to go deeper than necessary for a task completion, even if it requires additional effort. However this value should not be considered as a call for overengineering.',
    type: 'icons',
    images: [ellipseWhite]
  },
  {
    id: 3,
    title: 'Explicit Better than Implicit',
    text: 'If there is something to say, it will be said directly but politely, even if it might be unpleasant for someone.',
    type: 'icons',
    images: [ellipseWhite, ellipseBlack]
  },
  {
    id: 4,
    title: 'Fail Fast',
    text: 'Because of high competition, we chose to move fast, even if it means prioritizing a necessary task over an interesting one or not falling in love with elegant solutions.',
    type: 'icons',
    images: [ellipseWhite, ellipseWhite]
  },
  {
    id: 5,
    title: 'Autopoiesis',
    text: 'In our business it is important to have the clearest view possible, so when newly discovered facts contradict our existing knowledge, we aspire to change our opinions, however unpleasant or disquieting it may feel.',
    type: 'icons',
    images: [ellipseWhite, ellipseBlack, ellipseBlack]
  },
  {
    id: 6,
    title: 'Health',
    text: 'High efficiency in the long run is more important to us than moving fast in the short term. That’s why we value good sleep, good health and rest over working overtime.',
    type: 'icons',
    images: [ellipseWhite, ellipseBlack, ellipseWhite]
  }
]

export const companyText = [
  'Noeon Research is an R&D company designing a technology that is general and universal enough to automate tasks solved by junior- and mid-level software engineers.',

  'Noeon Research focuses on the automatisation of code synthesis and analysis using a hybrid approach. Our solution incorporates the ability to process a large amount of data from Machine Learning as well as the ability to have a strong inductive bias by efficient prior knowledge encoding.',

  'To surpass the conventional approach, Noeon Research aims to develop a new approach that is less specialized, capable of extending its functionality, scalable, and able to learn on the fly.'
]
