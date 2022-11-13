import React, { FC, useState, MouseEvent, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useWindowSize } from '../../hooks/useWindowSize'
import './Menu.styles.scss'
import { MenuNames } from './types'
import { MenuMobile } from './MenuMobile'
import { menuItems } from './constants'

export const Menu: FC = () => {
  let location = useLocation()
  const navigate = useNavigate()
  const { width } = useWindowSize()
  const [active, setActive] = useState(() => {
    switch (location.pathname) {
      case '/company':
      case '/grants':
      case '/join-our-team':
      case '/blog':
        return location.pathname.substring(1)
      case '/join-our-team/job-position':
        return 'join-our-team'
      default:
        return 'research'
    }
  })

  useEffect(() => {
    if (location.state) {
      const elementToScroll = document.querySelector(`#${location.state}`)
      elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      navigate('', { replace: true })
    }
    if (location.pathname === '/') {
      setActive('research')
    }
    if (location.pathname === '/company') {
      setActive('company')
      window.scrollTo(0, 0)
    }
  }, [location.state, navigate])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, menuId: MenuNames) => {
    e.preventDefault()
    switch (menuId) {
      case 'company':
      case 'grants':
      case 'join-our-team':
      case 'blog':
      case 'job-position':
        navigate(`/${menuId}`)
        setActive(menuId)
        break
      default: {
        navigate('/', { state: menuId })
        const elementToScroll = document.querySelector(`#${menuId}`)
        setActive(menuId)
        elementToScroll?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className='menu__wrapper'>
      {width < 1024 ? (
        <MenuMobile menuItems={menuItems} />
      ) : (
        <ul className='menu'>
          {menuItems.map(menuItem => (
            <li
              key={menuItem.id}
              className={
                active === menuItem.id
                  ? 'menu__item menu__item_active'
                  : 'menu__item'
              }
            >
              <a
                onClick={e => handleClick(e, menuItem.id)}
                href={`#${menuItem.id}`}
              >
                {menuItem.mobileName && width < 768
                  ? menuItem.mobileName
                  : menuItem.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
