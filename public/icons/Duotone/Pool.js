import * as React from "react";

const SvgPool = ({ title, titleId, ...props }) => (
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
      d="M12 12c1.657 0 3-1.12 3-2.5S13.657 7 12 7 9 8.12 9 9.5s1.343 2.5 3 2.5Zm0 0c-1.657 0-3 1.12-3 2.5s1.343 2.5 3 2.5 3-1.12 3-2.5-1.343-2.5-3-2.5Zm10 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M5.674 9A6.973 6.973 0 0 0 5 12c0 1.074.242 2.09.674 3m12.652-6c.432.91.674 1.926.674 3s-.242 2.09-.674 3"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPool;
