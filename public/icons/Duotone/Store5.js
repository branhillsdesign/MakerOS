import * as React from "react";

const SvgStore5 = ({ title, titleId, ...props }) => (
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
			d='M4 11.663V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7.337'
			stroke='#555770'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.5 10c0 1.105-1.007 2-2.25 2-.463 0-.892-.124-1.25-.337-.603-.359-1-.97-1-1.663l1.31-5.243A1 1 0 0 1 5.28 4h2.97m-.75 6c0 1.105 1.007 2 2.25 2S12 11.105 12 10m-4.5 0 .75-6M12 10c0 1.105 1.007 2 2.25 2s2.25-.895 2.25-2M12 10V4m4.5 6c0 1.105 1.007 2 2.25 2 .462 0 .892-.124 1.25-.337.603-.359 1-.97 1-1.663l-1.31-5.243A1 1 0 0 0 18.72 4H16m.5 6L16 4m0 0h-4m0 0H8.25'
			stroke='currentColor'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default SvgStore5;
