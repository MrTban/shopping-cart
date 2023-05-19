import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { useId } from 'react'

export function Filters() {
	const { setFilters } = useFilters()

	const [minPrice, setMinPrice] = useState(0)
	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleChangeMinPrice = (event) => {
		setMinPrice(event.target.value)
		setFilters((prevState) => ({
			...prevState,
			minPrice: event.target.value,
		}))
	}

	const handleChangeCategory = (event) => {
		setFilters((prevState) => ({
			...prevState,
			category: event.target.value,
		}))
	}

	return (
		<section className='flex flex-col gap-4 sm:flex-row items-center justify-between text-sm font-bold mb-4'>
			<div className='flex gap-4'>
				<label htmlFor={minPriceFilterId}>Price starting at:</label>
				<input
					type='range'
					id={minPriceFilterId}
					min='0'
					max='1000'
					onChange={handleChangeMinPrice}
				/>
				<span>${minPrice}</span>
			</div>

			<div className='flex gap-4'>
				<label htmlFor={categoryFilterId}>Category</label>
				<select id={categoryFilterId} onChange={handleChangeCategory}>
					<option value='all'>All</option>
					<option value='laptops'>Laptops</option>
					<option value='smartphones'>Smartphones</option>
				</select>
			</div>
		</section>
	)
}
