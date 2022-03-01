import * as React from 'react';

const SvgGolf = ({ title, titleId, ...props }) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-labelledby={titleId}
		{...props}>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M18 9A6 6 0 1 1 6 9a6 6 0 0 1 12 0Z'
			stroke='#555770'
			strokeWidth={2}
		/>
		<path
			d='M7 18h1m9 0h-1m-8 0h8m-8 0c1.5 0 4 .4 4 4 0-3.6 2-4 4-4'
			stroke='currentColor'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
			fill='#555770'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default SvgGolf;
