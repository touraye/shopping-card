import Product from "../../components/product/Product"
import { Products } from "../../products"
import './shop.css'

const Shop = () => {
  return (
    <div className='shop-container'>
      <h1 className="shop-title">Sula's Shop</h1>
      <div className="shop-content">
        {
          Products.map( product => <Product key={product.id} data={ product } />
          ) }
      </div>
    </div>
  )
}

export default Shop
