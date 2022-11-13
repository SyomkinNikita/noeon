import { TFigureStepProps } from '../../components/FigureStep/FigureStep'
import square from './square.png'
import circle from './circle.png'
import triangle from './triangle.png'
import rhomb from './rhomb.png'
import pentagon from './pentagon.png'
import righttriangle from './right-triangle.png'

export const figureStep: TFigureStepProps[] = [
  {
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
    text: 'Automated code synthesis is a holy grail – many want it, but nobody has. You can read more about it on [Company](/company) page, or just write to us. We love cross-pollination.'
  },
  {
    img: pentagon,
    title: 'Low Bureaucracy',
    text: 'We value performance and results, not a strict process following. However, metrics, processes, and documentation are important too. We just keep them low.'
  }
]
