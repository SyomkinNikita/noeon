import React, { MouseEvent, FC, useState, useEffect } from 'react'
import { ReactComponent as MenuOpen } from './menu-icon.svg'
import { ReactComponent as MenuClose } from './menu-icon-close.svg'
import { MenuItem } from './types'
import './MenuMobile.styles.scss'
import { Link } from 'react-router-dom'

type TMenuMobileProps = { menuItems: MenuItem[] }

export const MenuMobile: FC<TMenuMobileProps> = ({ menuItems }) => {
  const [open, setOpen] = useState(false)
  const handleClick = <T extends {}>(e: MouseEvent<T>): void => {
    e.preventDefault()
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    const body = document.body

    if (open) {
      body.classList.add('fixed')
    } else {
      body.classList.remove('fixed')
    }
  }, [open])

  const classNameMenuItems = open
    ? 'mobileMenu__menuItems mobileMenu__menuItems_open'
    : 'mobileMenu__menuItems'

  return (
    <div className='mobileMenu'>
      <button onClick={handleClick} className='mobileMenu__iconWrapper'>
        <MenuOpen />
      </button>
      <ul className={classNameMenuItems}>
        <MenuClose onClick={handleClick} className='mobileMenu__closeIcon' />
        {menuItems.map(item => (
          <li onClick={handleClick}>
            <Link to={item.id === 'research' ? '/' : `/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
