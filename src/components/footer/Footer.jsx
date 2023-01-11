import {FaHeart} from 'react-icons/fa'
import './footer.css'

const Footer = () => (
	<div className='footer'>
		<div className='foot1'>
			<p>
				Made with <span><FaHeart color='red' /></span> by <a href='http://www.ecodes.gm'>Ecodes</a>
			</p>
		</div>
		<div className='foot2'>
			<small>&copy; 2023</small>
		</div>
	</div>
)

export default Footer