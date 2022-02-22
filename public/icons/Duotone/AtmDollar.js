import * as React from "react";

const SvgAtmDollar = ({ title, titleId, ...props }) => (
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
      d="M20 5H4a1 1 0 0 0-1 1v12c0 .552.445 1 .997 1h16.01A.995.995 0 0 0 21 18V6a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 7v2m0 8v-2m-3 0h4.9a.1.1 0 0 0 .1-.1v-2.8a.1.1 0 0 0-.1-.1h-3.8a.1.1 0 0 1-.1-.1V9.1a.1.1 0 0 1 .1-.1H15"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAtmDollar;
