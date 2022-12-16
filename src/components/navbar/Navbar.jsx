import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'
import cart from '../../assets/cart-plus.svg'
import './navbar.css'

const Navbar = () => {
	const { getCartItemNumber } = useContext( ShopContext )
	const itemsOnCart = getCartItemNumber()	
  return (
		<div className='navbar'>
			<Link to='/'>
				Shop
			</Link>
			<Link to='/cart'>
				<div className="shop-icon-container">
					<img src={ cart } alt='logo' />
				<span className='cart-number'>{ itemsOnCart }</span>
				</div>
			</Link>
		</div>
	)
}

export default Navbar
