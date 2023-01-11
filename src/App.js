import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
		<div className='App'>
			<Navbar />
			<main className='main'>
				<Routes>
						<Route path='/' element={<Shop />}></Route>
						<Route path='/cart' element={<Cart />}></Route>
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App;
