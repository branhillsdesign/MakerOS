import * as React from "react";

const SvgEgg = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M17 15a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7h-2Zm-5 5a5 5 0 0 1-5-5H5a7 7 0 0 0 7 7v-2Zm-5-5c0-1.548.357-4.036 1.233-6.102C9.132 6.778 10.385 5.5 12 5.5v-2c-2.885 0-4.632 2.315-5.608 4.617C5.393 10.472 5 13.234 5 15h2Zm5-9.5c1.614 0 2.868 1.278 3.767 3.398C16.643 10.964 17 13.452 17 15h2c0-1.766-.393-4.528-1.392-6.883C16.632 5.815 14.885 3.5 12 3.5v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgEgg;
