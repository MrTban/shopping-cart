import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products({ products }) {
	const { addToCart, removeToCart, cart } = useCart()

	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id)
	}
	return (
		<main className='w-full flex justify-center items-center'>
			<ul className='grid sm:grid-cols-auto gap-4'>
				{products.slice(0, 10).map((product) => {
					const isProductInCart = checkProductInCart(product)
					return (
						<li
							key={product.id}
							className='flex flex-col gap-4 rounded-lg bg-[#111] text-white p-4'
						>
							<img
								src={product.thumbnail}
								alt={product.title}
								className='rounded-lg w-full aspect-video block object-cover bg-white'
							/>
							<div>
								<strong>{product.title}</strong> - ${product.price}
							</div>
							<div>
								<button
									onClick={() =>
										isProductInCart ? removeToCart(product) : addToCart(product)
									}
									className={`${isProductInCart ? 'bg-red-700' : 'bg-[#09f]'}`}
								>
									{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		</main>
	)
}
