import { useState } from 'react'

export function Filters({ onChange }) {
	const [minPrice, setMinPrice] = useState(0)

	const handleChangeMinPrice = (e) => {
		setMinPrice(e.target.value)
		onChange((prevState) => ({
			...prevState,
			minPrice: e.target.value,
		}))
	}

	const handleChangeCategory = (e) => {
		onChange((prevState) => ({
			...prevState,
			category: e.target.value,
		}))
	}

	return (
		<section className='flex flex-col gap-4 md:flex-row items-center justify-between text-sm font-bold mb-4'>
			<div className='flex gap-4'>
				<label htmlFor='price'>Price starting at</label>
				<input
					type='range'
					id='price'
					min='0'
					max='1000'
					onChange={handleChangeMinPrice}
				/>
				<span>${minPrice}</span>
			</div>

			<div className='flex gap-4'>
				<label htmlFor='category'>Category</label>
				<select id='category' onChange={handleChangeCategory}>
					<option value='all'>All</option>
					<option value='laptops'>Laptops</option>
					<option value='smartphones'>Smatphones</option>
				</select>
			</div>
		</section>
	)
}
