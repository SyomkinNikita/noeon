import andrei from './Andrei.png'
import yuri from './Yury.png'
import denis from './Denis.png'
import sergeiIzmailov from './Sergei_Izmailov.png'
import mikhailMironov from './Mikhail_Mironov.png'
import nikitaRepeev from './Nikita_Repeev.png'
import denisSevostyanov from './Denis_Sevostyanov.png'
import arsentiiIvasiuk from './Arsentii_Ivasiuk.png'
import ulyanaUdavikhina from './Ulyana_Udavikhina.png'
import kimikoKoyama from './Kimiko_Koyama.png'

type TTeamItem = {
  id: number
  name: string
  post: string
  description?: string
  img: string
}

export const team: TTeamItem[] = [
  { id: 1, name: 'Iurii Chernyi', post: 'CFO', img: yuri },
  { id: 2, name: 'Andrei Krutikov', post: 'CEO', img: andrei },
  { id: 3, name: 'Denis Silvers', post: 'CCO', img: denis }
]

export const teamRow2: TTeamItem[] = [
  {
    id: 4,
    name: 'Sergei Izmailov',
    post: 'Research Engineer',
    img: sergeiIzmailov,
    description: 'PhD in Computational \nPhysics'
  },
  {
    id: 5,
    name: 'Nikita Repeev',
    post: 'Research Engineer',
    img: nikitaRepeev,
    description: 'MSc in Theoretical \nPhysics'
  },
  {
    id: 6,
    name: 'Mikhail Mironov',
    post: 'AI Research Engineer',
    img: mikhailMironov,
    description: 'PhD in \nMathematics'
  }
]

export const teamRow3: TTeamItem[] = [
  {
    id: 7,
    name: 'Denis Sevostyanov',
    post: 'Research Engineer',
    img: denisSevostyanov,
    description: 'MSc in Theoretical \nPhysics'
  },
  {
    id: 8,
    name: 'Arsentii Ivasiuk',
    post: 'Research Engineer',
    img: arsentiiIvasiuk,
    description: 'BSc in \nBiophysics'
  }
]

export const teamRow4: TTeamItem[] = [
  {
    id: 9,
    name: 'Ulyana Udavikhina',
    post: 'Industry Analyst',
    img: ulyanaUdavikhina,
    description: 'PhD in Social \nPsychology'
  },
  {
    id: 10,
    name: 'Kimiko Koyama',
    post: 'Executive Assistant',
    img: kimikoKoyama
  }
]
