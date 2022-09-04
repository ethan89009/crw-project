import React ,{Fragment} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import "./navbar.styles.scss"
export const Navbar = () => {
  return (
    <Fragment>
    <div className='navigation'>
    <Link className='logo-container' to='/'>
    <Logo className='logo'/>
    </Link>
    <div className='nav-links-container'>
    <Link className='nav-link' to='/shop'>
    Shop
    </Link>
    </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}