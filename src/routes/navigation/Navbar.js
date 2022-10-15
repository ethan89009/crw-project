import React ,{Fragment, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import { userContext } from '../../contexts/contextProvider'
import "./navbar.styles.scss"
import { signOutUser } from '../../utils/firebase/firebase.utils'

export const Navbar = () => {
  const {currentUser, }=useContext(userContext);
  
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
    {
      currentUser?(
        <span className='nav-link' onClick={signOutUser} >SIGN OUT</span>
      ):    <Link className='nav-link' to='/auth'>
    Sign-in
    </Link>
    }
    </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}
