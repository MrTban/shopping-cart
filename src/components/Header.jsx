import { Filters } from './Filters'

export function Header() {
	return (
		<header>
			<h1 className='text-2xl font-semibold mb-6'>React Shop 🛒</h1>
			<Filters />
		</header>
	)
}
