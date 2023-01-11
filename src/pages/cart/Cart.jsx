import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { Products } from '../../products'
import { currencyFormat } from '../../helper'

import './cart.css'
import CartItem from './CartItem'

const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, getTotalCartAmount, getCartItemNumber, clearCart } =
		useContext(ShopContext)
  const totalAmount = getTotalCartAmount()  
  const itemsOnCart = getCartItemNumber()
  return (
		<div className='cart'>
			<div className='cart-tile'>
				<h1>Your Cart</h1>
			</div>
			<div className='cart-content'>
				<div className='cart-item-container'>
					{itemsOnCart > 0 ? (
						Products.map((product) => {
							if (cartItems[product.id] !== 0) {
								return <CartItem key={product.id} data={product} />
							}
						})
					) : (
						<p>Cart is Empty</p>
					)}
				</div>
				<div className='cart-footer'>
					{itemsOnCart > 0 ? (
						<p>Subtotal: {currencyFormat.format(totalAmount)}</p>
					) : (
						''
					)}
					<div className='cart-footer-btn-container'>
						<button onClick={() => navigate('/')}>
							{itemsOnCart > 0 ? 'continue Shopping' : 'Start Shopping'}
						</button>
						{itemsOnCart > 0 ? <button>checkout</button> : ''}
					</div>
					<div className='clear-cart-container'>
						{itemsOnCart > 0 ? (
							<button onClick={() => clearCart()} className='clear-cart-btn'>
								Clear Cart
							</button>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart