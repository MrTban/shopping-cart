import { AddToCartIcon } from './Icons'

export function Products({ products }) {
	return (
		<main className='w-full flex justify-center items-center'>
			<ul className='grid grid-cols-auto gap-4'>
				{products.slice(0, 10).map((product) => (
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
							<button>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}
