import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';

function App() {
  return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Shop />}></Route>
				<Route path='/cart' element={<Cart />}></Route>
			</Routes>
		</div>
	)
}

export default App;
