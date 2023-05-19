import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'

export function Cart() {
	const cartCheckboxId = useId()

	return (
		<>
			<label
				htmlFor={cartCheckboxId}
				className='flex items-center justify-center bg-[#09f] h-8 cursor-pointer p-1 absolute right-2 top-2 transition-[all .3 ease] z-[9999] w-8'
			>
				<CartIcon />
			</label>
			<input type='checkbox' hidden id={cartCheckboxId} />

			<aside className='hidden bg-black p-8 fixed right-0 top-0 w-[200px]'>
				<ul>
					<li className='border-b border-solid border-[#444]'>
						<img
							src='https://i.dummyjson.com/data/products/2/thumbnail.jpg'
							alt='Iphone'
							className='aspect-video w-full'
						/>
						<div>
							<strong>Iphone</strong> - $1499
						</div>

						<footer className='flex gap-2 justify-center items-center'>
							<small>Qty: 1</small>
							<button className='p-2'>+</button>
						</footer>
					</li>
				</ul>
				<button>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	)
}
