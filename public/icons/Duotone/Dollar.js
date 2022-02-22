import * as React from "react";

const SvgDollar = ({ title, titleId, ...props }) => (
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
    <path d="M12 5.7V3m0 15.3V21" stroke="currentColor" strokeWidth={2} />
    <path
      d="M16 8.85c0-1.74-1.79-3.15-4-3.15S8 7.11 8 8.85s1.91 2.68 4 3.15c2 .45 4 1.41 4 3.15s-1.79 3.15-4 3.15-4-1.41-4-3.15"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDollar;
