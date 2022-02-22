import * as React from "react";

const SvgBagofCash = ({ title, titleId, ...props }) => (
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
      d="M6.912 6C6.97 5.672 7 5.338 7 5c0-1.06-.207-2.074-.582-3h11.163A7.978 7.978 0 0 0 17 5c0 .337.031.671.088 1M6.912 6c-.224 1.294-.847 2.502-1.544 3.524a8 8 0 1 0 13.27.01c-.697-1.023-1.324-2.237-1.55-3.534M6.912 6h10.176"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M14 12.25c0-.966-.895-1.75-2-1.75m0 0c-1.105 0-2 .784-2 1.75s.955 1.489 2 1.75c1 .25 2 .784 2 1.75s-.895 1.75-2 1.75m0-7V9m0 8.5c-1.105 0-2-.784-2-1.75m2 1.75V19"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBagofCash;
