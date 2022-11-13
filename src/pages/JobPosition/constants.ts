import square from '../JoinOurTeam/square.png'
import circle from '../JoinOurTeam/circle.png'
import triangle from '../JoinOurTeam/triangle.png'
import rhomb from './assets/rhomb.png'
import pentagon from '../JoinOurTeam/pentagon.png'
import righttriangle from '../JoinOurTeam/right-triangle.png'
import { TFigureStepProps } from '../../components/FigureStep/FigureStep'

type TFirstBlockDetails = {
  id: number
  text: string
}[]

export const firstBlockDetails: TFirstBlockDetails = [
  {
    id: 1,
    text: 'Country: **Japan**'
  },
  {
    id: 2,
    text: 'City: **Tokyo**'
  },
  {
    id: 3,
    text: 'Category: **AI Research**'
  },
  {
    id: 4,
    text: 'Required Background: **Math / Science**'
  },
  {
    id: 5,
    text: 'Tokyo Office: **Hybrid Work**'
  },
  {
    id: 6,
    text: 'Outside Tokyo: **Remote Work**'
  },
  {
    id: 7,
    text: 'Relocation: **Possible**'
  },
  {
    id: 8,
    text: 'Employment Type: **Full-Time**'
  }
]

type TBlockLookingFor = {
  id: string
  titleUnderNumber: string
  list: {
    firstList: string[]
    secondList?: string[]
  }
}

export const blockLookingFor: TBlockLookingFor[] = [
  {
    id: '01',
    titleUnderNumber:
      'We would like to find a person who meets all of the following criteria',
    list: {
      firstList: [
        '**Has a math, physics or computer science background**',
        '**Deep understanding statistics and probability**',
        '**Deep understanding methods and approaches in ML/DL/RL**',
        '**Aware of Discrete Mathematics, Knowledge Representation, Kolmogorov Complexity, Formal Languages**',
        '**Proficiency in any general-purpose programming language like Python, C++, Java**'
      ]
    }
  },
  {
    id: '02',
    titleUnderNumber:
      'And has a deep understanding of at least one of these items',
    list: {
      firstList: [
        '**Knowledge Representation**',
        '**NLP or Linguistics**',
        '**Graph/Hypergraph ML**',
        '**Statistical Learning**',
        '**Automatic Code Comprehension and Processing**'
      ]
    }
  },
  {
    id: '03',
    titleUnderNumber: 'It would be nice to have an experience with',
    list: {
      firstList: [
        '**One of ML frameworks: TensorFlow, PyTorch**',
        '**One of graph manipulation frameworks: NetworkX, SNAP, igraph**',
        '**Infrastructure tools like Notion, Slack, Zotero, Shortcut, Miro**',
        '**Writing peer-reviewed publications**',
        '**Collaborative research and engineering work**'
      ]
    }
  }
]

type TBlockWouldLike = {
  title: string
  list: {
    firstList: string[]
    secondList?: string[]
  }[]
}

export const blockWouldLike: TBlockWouldLike = {
  title: 'What do we need help with?',
  list: [
    {
      firstList: [
        '**Make scientifically rigorous and grounded statements from \nvague concepts and thoughts**',
        '**Learn and survey state of the art approaches to solving generality in AI**',
        '**Build and design models and prototypes**',
        '**Structure the information and keep records of the various ideas**',
        '**Share and present ideas as well as discuss other’s people ideas**',
        '**Support less qualified colleagues in their efforts**'
      ]
    }
  ]
}

type THowToDifferent = {
  title: string
  subtitle: string
}[]

export const howToDifferent: THowToDifferent = [
  {
    title: 'Goal Focus',
    subtitle:
      'Although we have sprints, objectives, and metrics, we do not base our work on these. Efficient advance to the goal prevails.'
  },
  {
    title: 'No Business-Driven Development',
    subtitle:
      'Although Noeon Research is a for-profit company, at this stage we have no need to fit our work into business goals or fundraising activities. We can focus on pure R&D.'
  },
  {
    title: 'Diverse Background',
    subtitle:
      'In our team, we have a wide range of specialists. It brings us many interdisciplinary intuitions.'
  }
]

export const figureStep: TFigureStepProps[] = [
  {
    // img: triangle,
    img: circle,
    title: 'Good Salary',
    text: 'That’s, of course, a very basic condition. We want our colleagues to be healthy, happy and recreated.'
  },
  {
    img: triangle,
    title: 'Hybrid Work',
    text: 'Our team members work in the office and from homes all around the world. We are OK with that. However, we like to gather sometimes in the office to synchronize with each other.'
  },
  {
    img: square,
    title: 'Flexible Schedule',
    text: "We have scheduled meetings to synchronize and caves to work on our tasks alone. It is a teammate's choice when to work. Just don’t overwork – that’s inefficient."
  },
  {
    img: rhomb,
    title: 'Autonomy',
    text: 'High autonomy is crucial for us – the small and agile team can achieve a breakthrough if its members are professional and independent. However, we promote helping each other. That’s crucial too.'
  },
  {
    img: righttriangle,
    title: 'Challenging Work',
    text: 'Automated code synthesis is a holy grail – many want it, but nobody has. You can read more about it on Company page, or just write to us. We love cross-pollination.'
  },
  {
    img: pentagon,
    title: 'Low Bureaucracy',
    text: 'We value performance and results, not a strict process following. However, metrics, processes, and documentation are important too. We just keep them low.'
  }
]
