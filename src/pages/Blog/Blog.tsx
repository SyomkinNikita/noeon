import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Blog.styles.scss'
import img from './blog-img.png'
import { Menu } from '../../components/Menu/Menu'
import { Logo } from '../../components/Logo/Logo'

type TLinkToStartWindowProps = {
  href: string
  children?: ReactNode
}

const LinkToStartWindow: FC<TLinkToStartWindowProps> = ({
  href,
  children
}: any) => (
  <Link to={href} onClick={() => window.scrollTo(0, 0)}>
    {children}
  </Link>
)

const Blog: FC = () => {
  return (
    <div className='wrapper'>
      <Menu />
      <Logo isHiddenSecondBlock={true}/>
      <div className='blog__wrapper'>
        <div className='blog-post blog-post_big'>
          <LinkToStartWindow href='/blog/1'>
            <img className='blog-post__img' src={img} alt='' />
          </LinkToStartWindow>
          <div className='blog-post__contentWrapper'>
            <h3 className='blog-post__title'>
              <LinkToStartWindow href='/blog/1'>
                Are People Demanding Too Much Safety for ...
              </LinkToStartWindow>
            </h3>
            <p className='blog-post__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sem felis, consectetur at dictum sed, dignissim sit
              amet libero. Integer turpis nisl, placerat sit amet dictum in,
              commodo in libero.{' '}
            </p>
            <time className='blog-post__date'>Oct 31, 2022</time>
          </div>
        </div>
        <div className='blog-post'>
          <LinkToStartWindow href='/blog/1'>
            <img className='blog-post__img' src={img} alt='' />
          </LinkToStartWindow>
          <div className='blog-post__contentWrapper'>
            <h3 className='blog-post__title'>
              <Link to='/blog/1'>
                Are People Demanding Too Much Safety for ...
              </Link>
            </h3>
            <p className='blog-post__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sem felis, consectetur at dictum sed, dignissim sit
              amet libero. Integer turpis nisl, placerat sit amet dictum in,
              commodo in libero.
            </p>
            <time className='blog-post__date'>Oct 31, 2022</time>
          </div>
        </div>
        <div className='blog-post'>
          <LinkToStartWindow href='/blog/1'>
            <img className='blog-post__img' src={img} alt='' />
          </LinkToStartWindow>
          <div className='blog-post__contentWrapper'>
            <h3 className='blog-post__title'>
              <LinkToStartWindow href='/blog/1'>
                Are People Demanding Too Much Safety for ...
              </LinkToStartWindow>
            </h3>
            <p className='blog-post__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sem felis, consectetur at dictum sed, dignissim sit
              amet libero. Integer turpis nisl, placerat sit amet dictum in,
              commodo in libero.{' '}
            </p>
            <time className='blog-post__date'>Oct 31, 2022</time>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
