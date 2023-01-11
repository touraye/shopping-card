import './product.css'
import {ShopContext} from '../../context/ShopContext'
import { useContext } from 'react'
import { currencyFormat } from '../../helper'

const Product = ( props ) => {
	const {addToCart, cartItems} = useContext(ShopContext)
  
	const { id, name, image, price } = props.data
	
	const cartItemAmount = cartItems[id]
  
  return (
		<div className='product-cart'>
			<div className='product-cart-image-container'>
				<img className='product-cart-img' src={image} alt='productImg' />
			</div>
			<div className='prodcut-cart-des'>
				<p>
					<b>{name} </b>
				</p>
				<p className='product-price'>{currencyFormat.format(price)}</p>
			</div>
			<div className='product-cart-action'>
				<button onClick={() => addToCart(id)} className='add-to-cart-btn'>
					Add to Cart
					{'  '}
					{cartItemAmount > 0 && <>({cartItemAmount})</>}
				</button>
			</div>
		</div>
	)
}

export default Product