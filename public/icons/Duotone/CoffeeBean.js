import * as React from "react";

const SvgCoffeeBean = ({ title, titleId, ...props }) => (
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
      d="m12 22 .764-1.528A8.09 8.09 0 0 0 12 12a8.09 8.09 0 0 1-.764-8.472L12 2"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 22c4.418 0 8-4.477 8-10S16.418 2 12 2 4 6.477 4 12s3.582 10 8 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCoffeeBean;
