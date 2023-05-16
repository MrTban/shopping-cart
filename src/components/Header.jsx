import { Filters } from './Filters'

export function Header({ changeFilters }) {
	return (
		<header>
			<h1 className='text-2xl font-semibold mb-6'>React Shop 🛒</h1>
			<Filters onChange={changeFilters} />
		</header>
	)
}
