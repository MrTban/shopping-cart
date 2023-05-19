import './cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
	return (
		<li className='border-b border-solid border-[#444]'>
			<img src={thumbnail} alt={title} className='aspect-video w-full' />
			<div>
				<strong>{title}</strong> - ${price * quantity}
			</div>

			<footer className='flex gap-2 justify-center items-center'>
				<small>Qty: {quantity}</small>
				<button className='p-2' onClick={addToCart}>
					+
				</button>
			</footer>
		</li>
	)
}

export function Cart() {
	const cartCheckboxId = useId()
	const { cart, clearCart, addToCart } = useCart()

	return (
		<>
			<label
				htmlFor={cartCheckboxId}
				className='fixed cart-button flex items-center justify-center bg-[#09f] rounded-full h-8 cursor-pointer p-1  right-2 top-2 transition-[all .3 ease] z-[9999] w-8 hover:scale-110'
			>
				<CartIcon />
			</label>
			<input id={cartCheckboxId} type='checkbox' hidden />

			<aside className='cart hidden bg-black p-8 fixed right-0 top-0 w-[200px]'>
				<ul>
					{cart.map((product) => (
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							{...product}
						/>
					))}
				</ul>

				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	)
}
