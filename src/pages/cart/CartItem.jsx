import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const CartItem = ( props ) => {
  const { id, name, image, price } = props.data
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, updateCartItemPrice, getCartItemNumber } = useContext( ShopContext )
  
  const countItemsOnTheCart = getCartItemNumber()
  console.log('cart-items', countItemsOnTheCart)
 
  return (
		<div className='cart-item'>
			<img src='' alt='cartImage' />
			<div className='description'>
				<p className='item-name'>
					<b>{name}</b>
				</p>
				<p className='item-price'>
					GMD {'  '}
					<input
						value={price}
						onChange={(e) => updateCartItemPrice(Number(e.target.value), id)}
					/>
				</p>
				<div className='cart-action-container'>
					<button onClick={() => removeFromCart(id)}>-</button>
					<input
						value={cartItems[id]}
						onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
					/>
					<button onClick={() => addToCart(id)}>+</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
