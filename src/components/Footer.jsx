import { IS_DEVELOPMENT } from '../config'

export function Footer({ filters }) {
	return (
		<footer className='fixed left-4 bottom-4 text-left bg-black/70 px-2 py-6 rounded-3xl opacity-95 backdrop-blur'>
			{IS_DEVELOPMENT ? (
				JSON.stringify(filters, null, 2)
			) : (
				<>
					<h4 className='flex m-0'>
						Technical test in React ⚛️ －{' '}
						<span className='text-sm text-[#09f] opacity-80 flex items-center'>
							@mrtban.dev
						</span>
					</h4>
					<h5 className='flex m-0'>Shoppin Cart with useContext & useReducer</h5>
				</>
			)}
		</footer>
	)
}
