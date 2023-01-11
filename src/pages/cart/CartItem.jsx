import {} from 'react-icons/fa'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { currencyFormat } from '../../helper'

const CartItem = ( props ) => {
  const { id, name, image, price } = props.data
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, } = useContext( ShopContext )
   
  return (
		<div className='cart-item'>
			<div className='cart-item-img-container'>
				<img src={image} alt='cartImage' />
			</div>
			<div className='description'>
				<p className='item-name'>
					<b>{name}</b>
				</p>
				<p className='item-price'>			
					<span>{currencyFormat.format(price)}</span>
				</p>
				<div className='cart-action-container'>
					<button className='cart-update-btn add' onClick={() => addToCart(id)}>
						+
					</button>
					<input
						className='cart-input'
						value={cartItems[id]}
						onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
					/>
					<button
						className='cart-update-btn minus'
						onClick={() => removeFromCart(id)}>
						-
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
