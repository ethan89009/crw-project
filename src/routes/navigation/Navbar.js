import React ,{Fragment, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import { userContext } from '../../contexts/contextProvider'
import "./navbar.styles.scss"
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartIcon } from '../../components/cart-icon/CartIcon'
import { CartDropdown } from '../../components/cart-dropdown/CartDropdown'
import { cartContext } from '../../contexts/cartContext'
export const Navbar = () => {
  const {currentUser, }=useContext(userContext);
  const {isCartOpen}=useContext(cartContext);
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
    <CartIcon />
    </div>
    {isCartOpen&&<CartDropdown/>}
    </div>
    <Outlet/>
    </Fragment>
  )
}
