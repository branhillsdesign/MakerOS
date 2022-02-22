import * as React from 'react';

const FullArrowRight = (props) => (
  <svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m13 6.5 5.5 5.5m0 0L13 17.5m5.5-5.5H4'
      stroke='#555770'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default FullArrowRight;
